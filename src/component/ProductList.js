import React from 'react';
import { Col, Row } from "react-bootstrap";
const ProductList = (props) => {
    return (
        <div className="">
            <Row className="marg0">
                {props.List ? props.List.map((item, id) => (
                    <Col key={id}>
                        <div><strong>{item.title}</strong></div>
                        <div>{item.description}</div>
                        <div>{item.category}</div>
                        <div><img src={item.image} /></div>
                        <div>{item.price + "/-"}</div>
                        <div><button onClick={() => props.handleClick(item)}>Add</button></div>
                    </Col>)) : ""}
            </Row>
        </div>
    );
}

export default ProductList;
