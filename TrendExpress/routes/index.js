const express = require('express');
const router = express.Router();
const mysql = require("mysql");   // mysql 모듈 require

// 커넥션 연결
let client = mysql.createConnection({
  user: "root",
  password: "Gachon123!@",
  database: "MYTMAP"
})

module.exports = router;

//review insert (페이지 만들어지면 주소 지정)
router.post('/', function(req, res, next) {
  var body = req.body;

  client.query("INSERT INTO users (uid, content, score) VALUES (?, ?, ?)", [
    body.uid, body.content, body.score
  ], function(){
    res.redirect("/");
  });
});

router.get('', function(req, res, next) {
  client.query("SELECT * FROM users;", function(err, result, fields){
    if(err){
      console.log(err);
      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      res.render('', {
        results: result
      });
    }
  });
});

/*
//place id insert
router.post('/pinsert', function(req, res, next) {
  var body = req.body;

  client.query("INSERT INTO place (pid,uid) VALUES (?, ?)", [
    body.pid, body.uid
  ], function(){
    res.redirect("/pinsert");
  });
});

//review read (페이지 만들어지면 주소 지정)
router.get('/read', function(req, res, next) {
  client.query("SELECT * FROM users;", function(err, result, fields){
    if(err){
      console.log(err);
      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      res.render('/read', {
        results: result
      });
    }
  });
});

//review update
router.get('/update', function (req, res, next) {
  var body = req.body;

  //업뎃 쿼리 보충
  client.query("UPDATE * FROM users where (content, score) VALUES (?, ?)", [
    body.content, body.score
  ], function(){
    res.redirect("/update");
  });
});

//review delete
router.get('/delete', function (req, res, next) {
  var body = req.body;

  client.query("DELETE * FROM users WHERE (uid, pid);", function(err, result, fields){
    body.uid, body.pid
    if(err){
      console.log(err);
      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      res.render('/delete', {
        results: result
      });
    }
  });
});

 */