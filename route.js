const express = require("express");
const router = express.Router();
const db = require("./database");
var validator = require("validator");
const crypto = require("crypto");
var mysql = require("mysql");
const { stringify } = require("querystring");

const SECRETKEY = "YMLMGAMK";

const sqlQuery = (query, params_arr = []) => {
  return new Promise(function (resolve, reject) {
    db.con.query(mysql.format(query, params_arr), function (err, results) {
      if (!err) {
        resolve(results);
      } else {
        reject(err);
      }
    });
  });
};

const encryptPassword = async (req, res, password) => {
  try {
    const hashedPassword = await crypto
      .createHmac("sha256", SECRETKEY)
      .update(password)
      .digest("hex");
    console.log(hashedPassword);
    return hashedPassword;
  } catch (err) {
    res.status(501).json({ msg: `${err}` });
  }
};

const validEmail = (req, res, next) => {
  if (validator.isEmail(req.body.username)) {
    next();
  } else {
    return res
      .status(400)
      .send(generateResponse(-1, `enter email correctly`, []));
  }
};

function checkPassword(req, res, next) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (re.test(req.body.password)) {
    next();
  } else {
    return res
      .status(400)
      .send(
        generateResponse(
          -2,
          `password should have upper case,lower case , special and a digit`,
          []
        )
      );
  }
}

const generateResponse = (status, message, data) => {
  return {
    status,
    message,
    data,
  };
};

router.get("/menu", async (req, res) => {
  try {
    let result = await sqlQuery(`Select * from items `);
    let obj = Object.assign({}, result);
    return res
      .status(200)
      .send(generateResponse(1, `data recieved from server`, [obj]));
  } catch (e) {
    console.log(e);
    res.status(500).send(generateResponse(1, `Problem on our side`, []));
  }
});

router.post("/logout", (req, res) => {
  console.log("hello logout");
  if (req.session.authenticated) {
    req.session.destroy();
    res.clearCookie();
    return res.status(200).send(generateResponse(1, `logout`, []));
    // res.status(200).json({ msg: "logout" });
  } else {
    return res.status(500).send(generateResponse(1, `not a loggedin user`, []));
    // res.status(401).json({ msg: "not a loggedin user" });
  }
});

router.post("/login", (req, res) => {
  var { username, password } = req.body;
  console.log("here", { username, password });
  try {
    if (
      req.session.authenticated &&
      req.session.username == username &&
      req.session.password == password
    ) {
      if (req.session.isadmin) {
        // important !!!!!!
        return res
          .status(200)
          .send(
            generateResponse(1, `admin verification successfull`, [{ yes: 2 }])
          );
        // return res.status(200).json({ msg: 1, yes: 2 });
      } else {
        return res
          .status(200)
          .send(
            generateResponse(1, `user vericifation successsfull`, [{ yes: 1 }])
          );
        // return res.status(200).json({ msg: 1, yes: 1 });
      }
    }
    let sql = `Select * from user where username="${username}"`;
    db.con.query(sql, async (error, result) => {
      let obj = Object.assign({}, result);
      console.log("nani", obj);

      if (Object.keys(obj).length === 1) {
        password = await encryptPassword(req, res, password);
        console.log("nani");
        let flag = password === obj[0].password;
        if (!flag) {
          return res
            .status(400)
            .send(generateResponse(-1, `password not match`, []));
          // return res.status(400).json({ msg: "password not match" });
        }
        req.session.authenticated = true;
        req.session.username = username;
        req.session.uid = obj[0].uid;
        req.session.password = password;
        // console.log(obj[);
        console.log("I WAS HERE !");
        if (obj[0].isadmin === 1) {
          console.log("I WAS HERE");
          req.session.isadmin = 1;
        } else req.session.isadmin = 0;
        if (req.session.isadmin) {
          return res
            .status(200)
            .send(
              generateResponse(1, `admin verification successfull`, [
                { yes: 2 },
              ])
            );
          // return res.status(200).json({ msg: 1, yes: 2 });
        } else {
          return res
            .status(200)
            .send(
              generateResponse(1, `user verification successfull`, [{ yes: 1 }])
            );
          // return res.status(200).json({ msg: 1, yes: 1 });
        }
      } else {
        return res.status(400).send(generateResponse(-2, `invalid user`, []));
        // return res.status(400).json({ msg: "invalid user" });
      }
    });
  } catch (err) {
    return res.status(500).send(generateResponse(1, `${err}`, []));
    // return res.status(500).json({ msg: `${err}` });
  }
});

// admin
// 0-> unsure
// 1-> confirm
// 2-> cancle

// order_table
// 0 -> pending
// 1-> completed
// 2-> cancled

router.post("/pendingOrders", (req, res) => {
  if (req.session.authenticated && req.session.isadmin == 1) {
    try {
      let sql = "SELECT * from orders where status = 0";
      db.con.query(sql, (err, r) => {
        if (err) throw err;
        let obj = Object.assign({}, r);
        return res
          .status(200)
          .send(
            generateResponse(1, `pendingOrders results sent successfully`, [
              obj,
            ])
          );
        // return res.status(200).send(obj);
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(generateResponse(1, `${err}`, []));
      // return res.status(501).json({ msg: "internal error" });
    }
  } else {
    return res.status(500).send(generateResponse(1, `not an admin`, []));
    return res.status(401).json({ msg: "not an admin" });
  }
});

router.post("/additem", (req, res) => {
  console.log(req.body);
  var { name, cost } = req.body;
  try {
    let sql = `Select * from items where name = "${name}"`;
    db.con.query(sql, (e, re) => {
      if (e) {
        return res.status(500).send(generateResponse(1, `${err}`, []));
        // return res.status(501).json({
        //   msg: "internal error",
        // });
      }
      let obj = Object.assign({}, re);
      console.log("object", obj);
      if (Object.keys(obj).length == 0) {
        let sql1 = `Insert into items (name,cost) values ("${name}","${cost}") `;
        console.log(sql1);
        db.con.query(sql1, (error, result) => {
          if (error) throw error;
          return res
            .status(500)
            .send(generateResponse(1, `inserted successfully`, []));
          // return res.status(200).json({ msg: "inserted successfully" });
        });
      } else {
        let sql1 = `Update items set cost= "${cost}" where name = "${name}" `;
        db.con.query(sql1, (error, result) => {
          if (error) throw error;
          return res
            .status(200)
            .send(generateResponse(1, `updated successfully`, []));
          // return res.status(200).json({ msg: "updated successfully" });
        });
      }
    });
  } catch (err) {
    return res.status(500).send(generateResponse(1, `${err}`, []));
    // return res.status(501).json({ msg: "internal error" });
  }
});

let update_stats = (orderid, status) => {
  let sql = `UPDATE orders set status=${status} WHERE orderid=${orderid}`;
  return new Promise((res, rej) => {
    db.con.query(sql, (e, r) => {
      if (e) rej(e);
      console.log("done!");
      res();
    });
  });
};

router.post("/confirmOrder", async (req, res) => {
  try {
    let sz = Object.keys(req.body).length;
    for (let i = 0; i < sz; ++i) {
      await update_stats(req.body[i].orderid, req.body[i].status);
    }
    return res.status(200).send(generateResponse(1, `done`, []));
    // return res.status(200).json({ msg: "done" });
  } catch (e) {
    console.log(e);
    return res.status(500).send(generateResponse(1, `${e}`, []));
    // return res.status(501).json({ msg: "internal error" });
  }
});

router.post("/register", validEmail, checkPassword, async (req, res) => {
  var { username, password } = req.body;
  //console.log(req.body);

  try {
    let sql = `Select * from user where username="${username}"`;
    console.log(sql);
    db.con.query(sql, async (error, result) => {
      if (error) {
        return res.status(500).send(generateResponse(1, `${error}`, []));
        // res.status(501).json({ msg: `${error}` });
      }
      let obj = Object.assign({}, result);

      if (Object.keys(obj).length === 0) {
        password = await encryptPassword(req, res, password);
        var sql = `INSERT into user (username,password) values ("${username}","${password}")`;
        try {
          db.con.query(sql, (er, result) => {
            if (er) {
              return res.status(500).send(generateResponse(1, `${er}`, []));
              // res.status(501).json({ msg: `${er}` });
            }
            return res
              .status(200)
              .send(generateResponse(1, `valid request`, []));
            // return res.status(400).json({ msg: "invalid request" });
          });
        } catch (err) {
          return res.status(501).send(generateResponse(1, `${err}`, []));
          // res.status(501).json({ msg: `${err}` });
        }
      } else {
        return res.status(400).send(generateResponse(-3, `existing user`, []));
        // return res.status(400).json({ msg: "existing user" });
      }
    });
  } catch (err) {
    console.log("in register catch", err);
    return res.status(500).send(generateResponse(1, `${err}`, []));
    // res.status(500).json({ msg: `${err}` });
  }
});

const dbInsertItem = (sql) => {
  console.log(sql, "in insert");
  db.con.query(sql, (error, result) => {
    if (error) throw error;
  });
};

const getCost = (key) => {
  return new Promise((res, rej) => {
    console.log("key", key);
    let sql = `SELECT cost from items where name = '${key}' `;
    db.con.query(sql, (err, result) => {
      console.log("result", result[0].cost);
      if (err) rej(0);
      res(result[0].cost);
    });
  });
};

let ff = async (req) => {
  console.log("xx");
  return new Promise(async (res, rej) => {
    var address = req.body.address;
    console.log(req.body);
    let obj = {};
    let tot = 0;
    for (var key in req.body) {
      if (key === "address") continue;
      obj[key] = req.body[key];
      let item_cost = await getCost(key);
      tot += req.body[key] * item_cost;
      // if (req.body[key] > 0) {
      //   let sql = `INSERT INTO orders(address,item,quantity,username,status) values("${address}","${key}","${req.body[key]}","${req.session.username}","0")`;
      //   console.log(sql);
      //   let x = await dbInsertItem(sql);
      //   if (!x) rej(0);
      // }
    }
    console.log("TOTAL", tot);
    console.log("xxx", JSON.stringify(obj));
    let sql = `INSERT INTO orders(address , items , total , uid , status) values('${address}' , '${JSON.stringify(
      obj
    )}' ,'${tot}' , '${req.session.uid}' , 0)`;
    db.con.query(sql, (error, result) => {
      if (error) {
        console.log(error);
        rej(0);
      }
      res(1);
    });
  }).catch((error) => {
    rej(error);
  });
};

//xxx
router.post("/placeOrder", async (req, res) => {
  if (req.session.authenticated) {
    try {
      var address = req.body.address;
      //console.log(address);
      if (address === null || address === "") {
        return res
          .status(400)
          .send(generateResponse(-1, `enter address cannot be empty`, []));
        // res.status(401).json({ msg: "enter address cannot be empty" });
      }

      //console.log(req.body, "in lower function");
      let x_x = await ff(req);
      if (x_x) {
        return res
          .status(200)
          .send(generateResponse(1, `waiting for confirmation`, []));
        // return res.status(200).json({ msg: "waiting for confirmation" });
      }
    } catch (err) {
      return res.status(500).send(generateResponse(1, `${err}`, []));
      // return res.status(501).json({ msg: err });
    }
  } else {
    return res.status(400).send(generateResponse(-2, `first log in`, []));
    // res.status(401).json({ msg: "first log in" });
  }
});

router.post("/orderHistory", async (req, res) => {
  console.log("order history");
  if (req.session.authenticated) {
    var uid = req.session.uid;
    try {
      // let sql = `Select * from orders where uid=? and status=2`,[uid];
      // let sql =  `SELECT user_id, blisting_status FROM ${bListing} WHERE b_listing_id = ?`, [ b_listing_id,]
      // console.log(sql);
      let result = await sqlQuery(
        `Select * from orders where uid=? and status=2`,
        [uid]
      );
      let obj = Object.assign({}, result);
      return res
        .status(200)
        .send(generateResponse(1, `data recieved from server`, [obj]));

      // db.con.query(sql, (error, result) => {
      //   if (error) {
      //     return res
      //       .status(501)
      //       .send(generateResponse(1, `internal error`, []));
      //     // return res.status(501).json({ msg: "internal error" });
      //   } else {
      // let obj = Object.assign({}, result);
      // return res
      //   .status(200)
      //   .send(generateResponse(1, `data recieved from server`, [obj]));
      //     // res.status(200).send(obj);
      //   }
      // });
    } catch (err) {
      console.log(err);
      return res.status(500).send(generateResponse(1, `internal error`, []));
      // return req.status(501).json({ msg: "internal error" });
    }
  } else {
    return res.status(200).send(generateResponse(1, `user not logged in`, []));
    // return res.status(401).json({ msg: "user not logged in" });
  }
});

module.exports = router;

// api
// --file
// `SELECT user_id, blisting_status FROM ${bListing} WHERE b_listing_id = ?`, [ b_listing_id,]
// let buyerDetails = await sqlQuery();
