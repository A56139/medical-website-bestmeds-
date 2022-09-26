var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");

/* GET users listing. */
router.post("/saveproducts", upload.single("picture"), function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  pool.query( "insert into products(categoryid,subcategoryid,brandid,productname,description,price,offerprice,offertype,stock,salesstatus,rating,picture)values(?,?,?,?,?,?,?,?,?,?,?,?)",
    [req.body.categoryid,req.body.subcategoryid,req.body.brandid,req.body.productname, req.body.description,req.body.price,req.body.offerprice,req.body.offertype,req.body.stock,req.body.salesstatus,req.body.rating,req.myfilename],
    function (error, result) {
      if (error) {
        console.log(req.query);
        console.log(error)
        res.status(500).json({ result: false });
      } else {
        res.status(200).json({ result: true });
      }
    }
  );
});


router.get("/displayallproducts", function (req, res, next) {
  pool.query("select * from products", function (error, result) {
    if (error) {
      res.status(500).json({ result: [] });
    } else {
      res.status(200).json({ result: result });
    }
  });
});


router.post("/searchproductbysalesstatus", function (req, res, next) {
  pool.query(
    "select P.*,(select C.categoryname from categories C where C.categoryid=P.categoryid)as categoryname,(select S.subcategoryname from subcategories S where S.subcategoryid=P.subcategoryid)as subcategoryname,(select B.brandname from brands B where B.brandid=P.brandid)as brandname from products P where P.salesstatus=?",[req.body.salesstatus],
    function (error, result) {
      if (error) {
        res.status(500).json({ result: [] });
      } else {
        res.status(200).json({ result: result });
      }
    }
  );
});




router.post("/displayallproductsbybrandsandsubcategory", function (req, res, next) {
  pool.query(
    "select P.*,(select C.categoryname from categories C where C.categoryid=P.categoryid)as categoryname,(select S.subcategoryname from subcategories S where S.subcategoryid=P.subcategoryid)as subcategoryname,(select B.brandname from brands B where B.brandid=P.brandid)as brandname from products P where P.brandid=? and P.subcategoryid=?",[req.body.brandid,req.body.subcategoryid],
    function (error, result) {
      if (error) {
        res.status(500).json({ result: [] });
      } else {
        res.status(200).json({ result: result });
      }
    }
  );
});







router.post('/deletedata', function(req, res, next) {
    
  pool.query("delete  from products where productid=?",[req.body.productid],function(error,result){
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



router.post('/editdata', function(req, res, next) {
  
  
  console.log(req.body)
 pool.query("update products set productname=?,description=?,price=?,offerprice=?,offertype=?,stock=?,salesstatus=?,rating=?  where productid=?",[req.body.productname,req.body.productDescription,req.body.productPrice,req.body.productOfferPrice,req.body.productOfferType,req.body.productStock,req.body.productSalesStatus,req.body.productRating,req.body.productId],function(error,result){

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




router.post('/editicon',upload.single('picture'), function(req, res, next) {   
  console.log(req.body)
  console.log(req.file)
 pool.query("update products set picture=? where productid=?",[req.myfilename,req.body.productid],function(error,result){

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




router.post("/displayallproductsbycategoryid", function (req, res, next) {
  pool.query(
    "select P.*,(select C.categoryname from categories C where C.categoryid=P.categoryid)as categoryname,(select S.subcategoryname from subcategories S where S.subcategoryid=P.subcategoryid)as subcategoryname,(select B.brandname from brands B where B.brandid=P.brandid)as brandname from products P where P.categoryid=?",[req.body.categoryid],
    function (error, result) {
      if (error) {
        res.status(500).json({ result: [] });
      } else {
        res.status(200).json({ result: result });
      }
    }
    
  );
});









module.exports = router;
