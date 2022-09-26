
import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Categories from './Administrator/Categories';
import DisplayAllCategories from './Administrator/DisplayAllCategories';
import SubCategories from './Administrator/Subcategories';
import DisplayAllSubCategories from './Administrator/DisplayAllSubCategories';
import Brands from './Administrator/Brands';
import DisplayAllBrands from './Administrator/DisplayAllBrands';
import Products from './Administrator/Products';
import DisplayAllProducts from './Administrator/DisplayAllProducts';
import AdminDashboard from './Administrator/AdminDashboard';
import AdminListItems from './Administrator/AdminListItems';
import AdminLogin from './Administrator/AdminLogin';
import ProductImages from './Administrator/ProductImages';
import Header from './userinterface/Header';
import Footer from './userinterface/Footer';
import CartButton from './userinterface/CartButton';
import Home from './userinterface/Home';
import Banner from './Administrator/Banner';
import DisplayAllBanner from './Administrator/DisplayAllBanner';
import ProductList from './userinterface/ProductList';
import Productview from './userinterface/Productview';
import Showcart from './userinterface/showcart';
import SignIn from './userinterface/SignIn';
import SignUp from './userinterface/SignUp'
import ShowCartReview from './userinterface/ShowCartReview';
import FinalCartReview from './userinterface/FinalCartReview';
import PaymentGateway from './userinterface/PaymentGateway';






function App(props) {
  return (
    <div >
      <BrowserRouter>
     
       <Routes>
         <Route history={props.history} element={<Categories/>} path="/categories"/>
         <Route history={props.history} element={<DisplayAllCategories/>} path="/displayallcategories"/>
         <Route history={props.history} element={<SubCategories/>} path="/subcategories"/>
         <Route history={props.history} element={<DisplayAllSubCategories/>} path="/displayallsubcategories"/>
         <Route history={props.history} element={<Brands/>} path="/brands"/>
         <Route history={props.history} element={<DisplayAllBrands/>} path="/displayallbrands"/>
         <Route history={props.history} element={<Products/>} path="/products"/>
         <Route history={props.history} element={<AdminLogin/>} path="/adminlogin"/>
         <Route history={props.history} element={<AdminDashboard/>} path="/admindashboard"/>
         <Route history={props.history} element={<AdminListItems/>} path="/adminlistitems"/>
         <Route history={props.history} element={<ProductImages/>} path="/productimages"/>
         <Route history={props.history} element={<Header/>} path="/header"/>
         <Route history={props.history} element={<Footer/>} path="/footer"/>
         <Route history={props.history} element={<Home/>} path="/home"/>
         <Route history={props.history} element={<Banner/>} path="/banner"/>
         <Route history={props.history} element={<CartButton/>} path="/cartbutton"/>
         <Route history={props.history} element={<ProductList/>} path="/productlist"/>
         <Route history={props.history} element={<Productview/>} path="/productview"/>
         <Route history={props.history} element={<Showcart/>} path="/showcart"/>
         <Route history={props.history} element={<SignIn/>} path="/signin"/>
         <Route history={props.history} element={<SignUp/>} path="/signup"/>
         <Route history={props.history} element={<ShowCartReview/>} path="/showcartreview"/>
         <Route history={props.history} element={<FinalCartReview/>} path="/finalcartreview"/>
         <Route history={props.history} element={<PaymentGateway/>} path="/paymentgateway"/>
        
         
         
        
         <Route history={props.history} element={<DisplayAllBanner/>} path="/displayallbanner"/>
        
         <Route history={props.history} element={<DisplayAllProducts/>} path="/displayallproducts"/>
         
       </Routes>
     
   
     </BrowserRouter>

    </div>
  );
}


export default App;
