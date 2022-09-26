var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");

/* GET users listing. */
router.post("/savebrands", upload.single("icon"), function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  pool.query("insert into brands(categoryid,subcategoryid,brandname,status,brandicon)values(?,?,?,?,?)",[req.body.categoryid,req.body.subcategoryid,req.body.brandname,req.body.brandstatus,req.myfilename], function (error, result) {
      if (error) {
        console.log(req.query);
        console.log(error)
        res.status(500).json({ result: false });
      } 
      else 
      {
        res.status(200).json({ result: true });
      }
    }
  );
});



router.post('/editdata', function(req, res, next) {
  
  
  console.log(req.body)
 pool.query("update brands set brandname=?,status=? where brandid=?",[req.body.brandname,req.body.brandstatus,req.body.brandid],function(error,result){

      if(error)
      { console.log(error)
          res.status(500).json({result:false})
      }
      else
      {
          res.status(200).json({result:true})
      }
 })

 
});











router.get("/displayallbrands", function (req, res, next) {
  pool.query("select * from brands", function (error, result) {
    if (error) {
      res.status(500).json({ result: [] });
    } else {
      res.status(200).json({ result: result });
    }
  });
});





router.post("/displayallbrandsbystatus", function (req, res, next) {
  pool.query("select * from brands where status=? group by brandname", [req.body.status],function (error, result) {
    if (error) {
      res.status(500).json({ result: [] });
    } else {
      res.status(200).json({ result: result});
    }
  });
});



router.get("/displayalltrendingbrands", function (req, res, next) {
  pool.query("select * from brands where status='Trending' group by brandname", function (error, result) {
    if (error) {
      res.status(500).json({ result: [] });
    } else {
      res.status(200).json({ result: result });
    }
  });
});







router.post("/getallsubcategorybyid", function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  pool.query("select * from brands where subcategoryid=?",[req.body.subcategoryid], function (error, result) {
      if (error) {
        // console.log(req.query);
        console.log(error)
        res.status(500).json({ result: false });
      } 
      else 
      {
        res.status(200).json({ result: result });
      }
    }
  );
});








router.post('/editicon',upload.single('brandicon'), function(req, res, next) {   
  console.log(req.body)
  console.log(req.file)
 pool.query("update brands set brandicon=? where brandid=?",[req.myfilename,req.body.brandid],function(error,result){

      if(error)
      { console.log(error)
          res.status(500).json({result:false})
      }
      else
      {
          res.status(200).json({result:true})
      }
 })

 
});


router.post('/deletedata', function(req, res, next) {
    
  pool.query("delete  from brands where brandid=?",[req.body.brandid],function(error,result){
   if(error)
   { console.log(error)
       res.status(500).json({result:false})
   }
   else
   {   console.log(result)
       res.status(200).json({result:true})
   }


  })

   
});













module.exports = router;
