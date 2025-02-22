import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addcart } from "../redux/action/Index1";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const BuyPage = () => {



    const { id } = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false);

    const dispatch=useDispatch();
  const addProduct=(product)=>{
    dispatch(addcart(product));
  }
   
    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const response = await fetch(`https://65dd8ec9e7edadead7ee3cd0.mockapi.io/clothing1/${id}`);
            setproduct(await response.json());
            setloading(false);
            console.log(response);
        };
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                </div>
            </>
        )
    };
    
    const ShowProduct = () => {
        const cartItems = useSelector((state) => state.HandleCart);
        const isProductInCart = cartItems.some((item) => item.id === product.id);
        return (
            <>
                                <div className="col-md-6" >
                    <img src={product.image1} alt={product.category} style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="col-md-6 py-5">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.className}</h1>
                    {/* <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                    </p> */}
                    <h3 className="display-6 fw-bolder" > $ {product.new_price}</h3>
                    <p className="lead">{product.description}</p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center">
                {isProductInCart ? (
                    <button className="btn btn-dark px-4 py-2 mb-2 mb-sm-0 me-sm-2" disabled>Already in Cart</button>
                ) : (
                    <NavLink className="btn btn-dark px-4 py-2 mb-2 mb-sm-0 me-sm-2" onClick={() => addProduct(product)}>Add to Cart</NavLink>
                )}
                <NavLink to={'/EverydayStyle/cart'} className="btn btn-outline-dark px-4 py-2">Go to Cart</NavLink>
            </div></div>
            </>
        )
    };
    
    
    return (
        <div  style={{border:"1px solid gray",borderRadius:"0.5rem"}} className ="p-4 m-5 ">
            <div className="container">
                <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
            </div>
        </div>
    );
};

export default BuyPage;