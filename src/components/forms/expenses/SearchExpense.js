import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class SearchExpense extends Component {
    render() {
        return (
            <>  
                
                <Card border="warning" >
                    <Card.Header style={{ backgroundColor: "#FFC107", color: "white" }}>Add Expense</Card.Header>
                    <Card.Body>
                        <Row>
                        <Col>
                        <Form>
                            <Row>
                                <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                
                                <Form.Label>Expense Head</Form.Label>
                                <Form.Control size="sm" type="date" placeholder="Small text" />

                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                
                                <Form.Label>Expense Head</Form.Label>
                                <Form.Control size="sm" type="date" placeholder="Small text" />
                                
                            </Form.Group>
                            </Col>
                            </Row>
                            <Button type="submit" variant="warning">Search</Button>
                        </Form>
                        </Col>
                        <Col>
                        <Form>
                           
                            <Form.Group controlId="exampleForm.ControlInput1">
                                
                                <Form.Label>Search By Expense</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Small text" />

                            </Form.Group>
                            
                            <Button type="submit" variant="warning">Search</Button>
                        </Form>
                        </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header style={{ backgroundColor: "#FFC107", color: "white" }}>Expense Result</Card.Header>

                    <Card.Body>
                    <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Invoice Number</th>
                      <th>Date</th>
                      <th>Expense Head</th>
                      <th>Amount</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>

                      <td>Otto</td>
                     
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>

                      <td>Thornton</td>
                     
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                     
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                     
                    </tr>
                 
                   


                  </tbody>
                </Table>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default SearchExpense;
