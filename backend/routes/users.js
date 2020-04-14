const express = require("express");
const router = express.Router();

module.exports = ({
  getUsers,
  getUserInfo,
  registerUser,
  // validateUserLogin,
  userLoginValidation,
  getUserInfoByEmail
}) => {
  router.get("/", function(req, res) {
    getUsers()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  });

  router.get("/:users_id", function(req, res) {
    console.log("userid", req.params.users_id);
    getUserInfo(req.params.users_id).then(result => res.json(result));
  });

  // from rabbithole
  router.post("/registration", function(req, res) {
    console.log("router: /register", req.body);
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    registerUser(first_name, last_name, email, password)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  // from rabbithole
  // router.post("/login", function(req, res) {
  //   console.log(req.body);
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   validateUserLogin(email, password).then(response => {
  //     res.json(response);
  //   });
  // });

  router.post("/login", function(req, res) {
    console.log("route /login", req.body);
    const email = req.body.email;
    const password = req.body.password;
    userLoginValidation(email, password).then(response => {
      res.json(response);
    });
  });

  // get userId by email 4.13.20
  router.get("/email/:email", function(req, res) {
    console.log("/:email", req.params.email);
    getUserInfoByEmail(req.params.email).then(result => res.json(result));
  });

  return router;
};
