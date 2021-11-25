const express = require("express");
const process = require('process');
var fs = require('fs');

const app = express();

const router = require('./route')
const session = require("express-session");
var FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const { urlencoded } = require("body-parser");


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

app.use('/api', router);

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

process.on('uncaughtException', (error, source) => {
  console.log("something to see that is not figured");
});
 
app.get("/", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\index.html");
});

app.get("/login", (req, res) => {
  return res.sendFile(__dirname + "/public/html/login.html");
});

app.get("/scripts/selectaddress.js", (req, res) => {
  return res.sendFile(__dirname + "/public/scripts/selectaddress.js");
});

app.get("/register", (req, res) => {
  return res.sendFile(__dirname + "/public/html/register.html");
});

app.get("/profile", (req, res) => {
  return res.sendFile(__dirname + "/public/html/profile.html");
});

app.get("/logout", (req, res) => {
  return res.sendFile(__dirname+ '/public/html/logout.html')
})

app.get("/scripts/logout.js", (req, res) => {
  return res.sendFile(__dirname + '\\public\\scripts\\logout.js');
})

app.get("/admin", (req, res) => {
  return res.sendFile(__dirname + "/public/html/admin.html");
});

app.get("/pendingorders", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\pendingorders.html");
});

app.get("/orderhistory", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\orderhistory.html");
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



app.get("/additem", (req, res) => {
  return res.sendFile(__dirname + "\\public\\html\\additem.html");
});

app.get("/scripts/additem.js", (req, res) => {
  return res.sendFile(__dirname + "\\public\\scripts\\additem.js");
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

