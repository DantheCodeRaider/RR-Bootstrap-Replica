import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreListing() {

return (
    <div>
        <h2>Browse stores in Houston</h2>
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Row>
                    <Col xs=".5" >
                        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1396/c00cf9a8-3f7d-4358-9161-b211b08c999d.jpg" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs=".5">
                        <Image src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/457/87419e93-2e92-4c73-8d48-2fc0c2cd390c.png" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5" >
                        <Image src="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/128/59adefc9-4cee-4a2b-975f-8782ef69c88a.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    </div>   
)
}

export default StoreListing;
