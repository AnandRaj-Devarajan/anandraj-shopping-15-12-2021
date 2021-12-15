import React from 'react';
import { Col, Row } from "react-bootstrap";
const CartList = (props) => {
    return (
        <div >
            <Row>
                {props.List ? props.List.map((item, id) => (
                    <Col key={id}>
                        <div><strong>{item.title}</strong></div>
                        <div>{item.description}</div>
                        <div>{item.category}</div>
                        <div><img src={item.image} /></div>
                        <div>{item.price + "/-"}</div>
                    </Col>)) : ""}
            </Row>
        </div>
    );
}

export default CartList;
