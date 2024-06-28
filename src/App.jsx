import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Main from "./Component/Main.jsx";
import Category from "./Component/Category/Category.jsx";
import Singleproduct from "./Component/Singleproduct/Singleproduct.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import { Provider } from "react-redux";
import appStore from "./ulits/appStore.jsx";
import Cart from "./Component/Cart/Cart.jsx";


const App=()=>{

    
    return(
        
        <>
        <ToastContainer className="react-roast"/>
        <Header/> 
        <Outlet/>
       <Footer/>
      
       </>
      
    );
};

const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Main/>
            },
            {

                path:"/Product",
                element:<Category/>
            },
            {
                path:"/products/:productId",
                element:<Singleproduct/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/Shopping-cart",
                element:<Cart/>
            }]

        }
    
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render( 
<Provider store={appStore}>
<RouterProvider router={appRoute} />
</Provider>
);


