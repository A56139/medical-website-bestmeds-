var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");

/* GET users listing. */
router.post("/savesubcategories", upload.single("icon"), function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  pool.query(
    "insert into subcategories(categoryid,subcategoryname,description,icon)values(?,?,?,?)",
    [req.body.categoryid,req.body.subcategoryname, req.body.subcategorydescription, req.myfilename],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ result: false });
      } else 
      {
        res.status(200).json({ result: true });
      }
    }
  )
});




router.post('/editicon',upload.single('icon'), function(req, res, next) {   
  console.log(req.body)
  console.log(req.file)
 pool.query("update subcategories set icon=? where subcategoryid=?",[req.myfilename,req.body.subcategoryid],function(error,result){

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




router.post('/editdata', function(req, res, next) {
  
  
  console.log(req.body)
 pool.query("update subcategories set subcategoryname=? where subcategoryid=?",[req.body.subcategoryname,req.body.subcategoryid],function(error,result){

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



router.post("/getallcategorybyid", function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  pool.query("select * from subcategories where categoryid=?",[req.body.categoryid], function (error, result) {
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






router.post('/deletedata', function(req, res, next) {
    
  pool.query("delete  from subcategories where subcategoryid=?",[req.body.subcategoryid],function(error,result){
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



router.get("/displayallsubcategories", function (req, res, next) {
  console.log(req.query.categoryid)
  pool.query("select * from subcategories ", function (error, result) {
    if (error) {

      res.status(500).json({ result: [] });
    } else {
      res.status(200).json({ result: result });
    }
  });
});

module.exports = router;
