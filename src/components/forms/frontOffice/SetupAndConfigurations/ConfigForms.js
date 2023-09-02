import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class ConfigForms extends Component {
    
    
    submition=()=>{
            this.props.handler();
    }
    
    render() {
        return (
            <>
                <Row>
                    <Col md="4">
                        <Card style={{borderColor: this.props.color}} >
                            <Card.Header style={{ backgroundColor: this.props.color , color: "white" }}>{this.props.header}</Card.Header>
                            <Card.Body>

                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>{this.props.name}</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Small text" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Button  onClick={this.submition} style={{backgroundColor: this.props.color,color:"white"}}>Submit form</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card style={{borderColor: this.props.color}} >
                            <Card.Header style={{ backgroundColor: this.props.color, color: "white" }}>{this.props.name} List</Card.Header>
                            <Card.Body>


                                <Table responsive hover size="sm" >
                                    <thead>
                                        <tr>
                                            <th>{this.props.name} Head</th>


                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>Mark</td>


                                            <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                                                <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>Jacob</td>

                                            <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                                                <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                                            </td>
                                        </tr>
                                        <tr>

                                            <td >Larry the Bird</td>

                                            <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                                                <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </>
        )
    }
}
export default ConfigForms;
