const express = require("express");
const db = require("./database");
const bcrypt = require("bcrypt");
const app = express();
var validator = require("email-validator");

const session = require("express-session");
var FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const { urlencoded } = require("body-parser");
const f = require("session-file-store");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    secret: "thisisdemoproject",
    cookie: {
      maxAge: 1000 * 60 * 50, // 50mins
    },
    store: new FileStore({ logFn: function () {} }),
    saveUninitialized: false,
  })
);

const encryptPassword = async (req, res, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (err) {
    res.status(501).json({ msg: `${err}` });
  }
};

const decryptPassword = async (req, res, password, hashedPassword) => {
  try {
    const encodedPassword = await bcrypt.compare(password, hashedPassword);
    return encodedPassword;
  } catch (err) {
    res.status(501).json({ msg: `${err}` });
  }
};

const validEmail = (email) => {
  return validator.validate(email);
};

// const dbCheckItem = (item) => {
//     return new Promise((res,rej) => {
//         mySqlConnection.query(`SELECT * from items where name = '${item}' ` , (e , r , f) =>{
//             if(!e){
//                 var obj = Object.assign({} , r[0]);
//                 res(obj)
//             }
//             rej({});
//         })
//     })
// };

// const dbInsertOrder = (address,username,item,quantity) => {
//     return new Promise((res,rej) => {
//         mySqlConnection.query(`INSERT into items(address,username,item,cost,status) values ('${address}' , '${username}' , '${item}' , '${quantity}' , 0) ` , (e , r , f) =>{
//             if(!e){
//                 res();
//             }
//             rej();
//         })
//     })
// };

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\index.html");
});

app.get("/login", (req, res) => {
  return res.sendFile(__dirname + "/public/html/login.html");
});

app.get("/register", (req, res) => {
  return res.sendFile(__dirname + "/public/html/register.html");
});

app.get("/profile", (req, res) => {
  return res.sendFile(__dirname + "/public/html/profile.html");
});

app.get("/admin", (req, res) => {
  return res.sendFile(__dirname + "/public/html/admin.html");
});

app.get("/pendingorders", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\pendingorders.html");
});

app.get("/scripts/login.js", (req, res) => {
  return res.sendFile(__dirname + "\\public\\scripts\\login.js");
});

app.get("/scripts/register.js", (req, res) => {
  return res.sendFile(__dirname + "\\public\\scripts\\register.js");
});

app.get("/scripts/menu.js", (req, res) => {
  return res.sendFile(__dirname + "\\public\\scripts\\menu.js");
});

app.get("/scripts/orderhistory.js", (req, res) => {
  return res.sendFile(__dirname + "\\public\\scripts\\orderhistory.js");
});

app.get("/scripts/pendingorders.js", (req, res) => {
  return res.sendFile(__dirname + "\\public\\scripts\\pendingorders.js");
});

app.get("/menu", (req, res) => {
  try {
    let sql = "SELECT * from items";
    db.con.query(sql, (error, result) => {
      let menu = Object.assign({}, result);
      if (error) throw error;
      return res.status(200).send(menu);
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Problem on our side :( " });
  }
});

app.get("/orderhistory", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\orderhistory.html");
});

app.post("/logout", (req, res) => {
  if (req.session.authenticated) {
    req.session.destroy();
    res.clearCookie();
    res.status(200).json({ msg: "logout" });
  } else {
    res.status(401).json({ msg: "not a loggedin user" });
  }
});

app.post("/login", (req, res) => {
  var { username, password } = req.body;
  console.log("here", { username, password });
  try {
    if (
      req.session.authenticated &&
      req.session.username == username &&
      req.session.password == password
    ) {
      if (req.session.isadmin) return res.status(200).json({ msg: 1, yes: 2 });
      else return res.status(200).json({ msg: 1, yes: 1 });
    }
    let sql = `Select * from user where username="${username}"`;
    db.con.query(sql, async (error, result) => {
      let obj = Object.assign({}, result);

      if (Object.keys(obj).length === 1) {
        let flag = await decryptPassword(req, res, password, obj[0].password);
        // console.log(flag);
        if (!flag) return res.status(400).json({ msg: "password not match" });
        req.session.authenticated = true;
        req.session.username = username;
        req.session.password = password;
        // console.log(obj[);
        console.log("I WAS HERE !");
        if (obj[0].isadmin === 1) {
          console.log("I WAS HERE");
          req.session.isadmin = 1;
        } else req.session.isadmin = 0;
        if (req.session.isadmin)
          return res.status(200).json({ msg: 1, yes: 2 });
        else return res.status(200).json({ msg: 1, yes: 1 });
      } else {
        return res.status(400).json({ msg: "invalid user" });
      }
    });
  } catch (err) {
    return res.status(500).json({ msg: `${err}` });
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

app.post("/pendingOrders", (req, res) => {
  if (req.session.authenticated && req.session.isadmin == 1) {
    try {
      let sql = "SELECT * from orders where status = 0";
      db.con.query(sql, (err, r) => {
        if (err) throw err;
        let obj = Object.assign({}, r);
        return res.status(200).send(obj);
      });
    } catch (err) {
      console.log(err);
      return res.status(501).json({ msg: "internal error" });
    }
  } else {
    return res.status(401).json({ msg: "not an admin" });
  }
});

app.get("/additem", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\additem.html");
});

app.get("/scripts/additem.js", (req, res) => {
  return res.sendFile(__dirname + "\\public\\scripts\\additem.js");
});

app.post("/additem", (req, res) => {
  console.log(req.body);
  var { name, cost } = req.body;
  try {
    let sql = `Select * from items where name = "${name}"`;
    db.con.query(sql, (e, re) => {
      if (e) {
        return res.status(501).json({
          msg: "internal error",
        });
      }
      let obj = Object.assign({}, re);
      console.log("object", obj);
      if (Object.keys(obj).length == 0) {
        let sql1 = `Insert into items (name,cost) values ("${name}","${cost}") `;
        console.log(sql1);
        db.con.query(sql1, (error, result) => {
          if (error) throw error;
          return res.status(200).json({ msg: "inserted successfully" });
        });
      } else {
        let sql1 = `Update items set cost= "${cost}" where name = "${name}" `;
        db.con.query(sql1, (error, result) => {
          if (error) throw error;
          return res.status(200).json({ msg: "updated successfully" });
        });
      }
    });
  } catch (err) {
    return res.status(501).json({ msg: "internal error" });
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

app.post("/confirmOrder", async (req, res) => {
  try {
    let sz = Object.keys(req.body).length;
    for (let i = 0; i < sz; ++i) {
      await update_stats(req.body[i].orderid, req.body[i].status);
    }
    return res.status(200).json({ msg: "done" });
  } catch (e) {
    console.log(e);
    return res.status(501).json({ msg: "internal error" });
  }
});

app.post("/register", async (req, res) => {
  var { username, password } = req.body;
  try {
    if (!validEmail(username)) {
      console.log("HERE", username);
      return res.status(400).json({ msg: "enter email correctly" });
    }
    let sql = `Select * from user where username="${username}"`;
    db.con.query(sql, async (error, result) => {
      if (error) res.status(501).json({ msg: `${error}` });

      let obj = Object.assign({}, result);

      if (Object.keys(obj).length === 0) {
        password = await encryptPassword(req, res, password);
        var sql = `INSERT into user (username,password) values ("${username}","${password}")`;
        try {
          db.con.query(sql, (er, result) => {
            if (er) throw res.status(501).json({ msg: `${er}` });
            return res.status(400).json({ msg: "valid request" });
          });
        } catch (err) {
          res.status(501).json({ msg: `${er}` });
        }
      } else {
        return res.status(400).json({ msg: "existing user" });
      }
    });
  } catch (err) {
    res.status(500).json({ msg: `${err}` });
  }
});

// app.post("/placeOrder", (req, res) => {
//     if (req.session.authenticated) {
//       try {
//         var { address } = req.body.address;
//         if (address === null || address === "")
//           res.status(401).json({ msg: "enter address cannot be empty" });

//         for (var key in req.body.order) {
//           {
//             let sql = `INSERT INTO pendingorders (address,item,quantity,username) values("${address}","${key}","${req.body.order[key]}","${req.session.username}")`;
//             db.con.query(sql, (error, result) => {
//               if (error) {
//                 res.status(501).json({ msg: `${error}` });
//               }
//             });
//           }
//           res.status(200).json({ msg: "waiting for confirmation" });
//         }
//       } catch (err) {
//         res.status(501).json({ msg: `${err}` });
//       }
//     } else {
//       res.status(401).json({ msg: "first log in" });
//     }
//   });

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});

const dbInsertItem = (sql) => {
  console.log(sql, "in insert");
  db.con.query(sql, (error, result) => {
    if (error) throw error;
  });
};

let ff = (req) => {
  return new Promise(async (res, rej) => {
    var address = req.body.address;
    console.log(req.body);
    for (var key in req.body) {
      if (key === "address") continue;
      let sql = `INSERT INTO orders(address,item,quantity,username,status) values("${address}","${key}","${req.body[key]}","${req.session.username}","0")`;
      console.log(sql);
      let x = await dbInsertItem(sql);
      if (!x) rej(0);
    }
    res(1);
  }).catch((error) => {
    rej(error);
  });
};

//xxx
app.post("/placeOrder", async (req, res) => {
  if (req.session.authenticated) {
    try {
      var address = req.body.address;
      //console.log(address);
      if (address === null || address === "")
        res.status(401).json({ msg: "enter address cannot be empty" });
      //console.log(req.body, "in lower function");
      let x_x = await ff(req);
      if (x_x) return res.status(200).json({ msg: "waiting for confirmation" });
    } catch (err) {
      return res.status(501).json({ msg: err });
    }
  } else {
    res.status(401).json({ msg: "first log in" });
  }
});

app.post("/orderHistory", (req, res) => {
  console.log("order history");
  if (req.session.authenticated) {
    var username = req.session.username;
    try {
      let sql = `Select * from orders where username="${username}" and status=2`;
      console.log(sql);
      db.con.query(sql, (error, result) => {
        if (error) {
          return res.status(501).json({ msg: "internal error" });
        } else {
          let obj = Object.assign({}, result);
          res.status(200).send(obj);
        }
      });
    } catch (err) {
      return req.status(501).json({ msg: "internal error" });
    }
  } else {
    return res.status(401).json({ msg: "user not logged in" });
  }
});
