import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from "react-bootstrap";
import { useSelector, useStore } from 'react-redux';
import CartList from './CartList';
import ProductList from './ProductList';

function PLP() {
    const [category, setcategory] = useState([]);
    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

    const store = useStore();

    useEffect(() => {
        ProductLists();
        Categorys();
    }, []);

    const ProductLists = () => {
        axios.get('https://fakestoreapi.com/products/1')
            .then(res => {
                console.log(res.data, "res.data")
                store.dispatch({
                    type: 'PRODUCT_LIST',
                    ProductList: res.data
                })
                setproducts(Products)
            })
            .catch(err => {
                console.log(err);
            });
    }
    const Categorys = () => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                setcategory(res.data);
                categoryList(category)
            })
            .catch(err => {
                console.log(err);
            });
    }
    const categoryList = (category) => {
        category.map((li, i) => {
            <div key={i}>
                {li}
            </div>
        })
    }
    const handleClickAdd = (add) => {
        setcart(add)
    }
    const MyCart = () => {
        window.open("/CartList", "_self")
    }
    let Products = useSelector(state => state && state.ProductList ? state.ProductList.ProductList : "");
    return (

        <div className="container">
            <h1>Shopping</h1>
            <Row>
                <Col>
                <h2>categories</h2>
                    {categoryList}
                </Col>

                <Col>
                <h2>ProductList</h2>
                    <ProductList List={products} handleClick={(e) => handleClickAdd(e)} />
                </Col>

                <Col>
                <h2><span onClick={MyCart}>MyCart</span></h2>
                    <CartList List={cart} />
                </Col>

            </Row>

        </div>
    );
}

export default PLP;