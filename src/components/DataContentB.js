import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";

function DataContentB(props){
    return (
        <div className="App">
            <h1>FUTURE</h1> 
            <Container>
                <Row>
                    <Col><b>Asset/Contract:</b> </Col>
                    <Col><b>Bid: </b></Col>
                    <Col><b>Ask: </b></Col>
                    <Col><b>Price: </b></Col>
                    <Col><b>Underlying: </b></Col>
                    <Col><b>VolumnUsd24h: </b></Col>
                </Row>
                {props.data.map(each =>
                    <Row>
                        <Col>{each.name}</Col>
                        <Col>{each.bid}</Col>
                        <Col>{each.ask}</Col>
                        <Col>{each.price}</Col>
                        <Col>{each.underlying}</Col>
                        <Col>{each.volumeUsd24h}</Col>
                    </Row>)}
            </Container>
        </div>
    )
}

export default DataContentB;