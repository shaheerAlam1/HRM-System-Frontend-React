import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class Complaints extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md="4">
            <Card border="primary" >
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Add Complaints</Card.Header>
              <Card.Body>

                <Form>
                <Form.Group >
                    <Form.Label>Complain Type</Form.Label>
                    <Form.Control as="select" size="sm">
                      <option>Late Coming</option>
                      <option>Attendace</option>
                      <option>About Employee</option>

                    </Form.Control>
                  </Form.Group>
                  
                  <Form.Group >
                    <Form.Label>Source</Form.Label>
                    <Form.Control as="select" size="sm">
                      <option>Call</option>
                      <option>Email</option>
                      <option>Sms</option>

                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="username">
                    <Form.Label>Complain By</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control size="sm" type="date" placeholder="" />
                    </Form.Group>
                  <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group controlId="username">
                    <Form.Label>Action Taken</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group controlId="username">
                    <Form.Label>Assigned</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group >
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                   
                    <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Attach Document" />
                  </Form.Group>
                  
                  <Button type="submit" variant="primary">Submit form</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card border="primary" >
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Complaints List</Card.Header>
              <Card.Body>

                <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>Complaint#</th>
                      <th>Complain Type</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td>10</td>
                      <td>Attendace</td>
                      <td>Administrator</td>
                      <td>0300-000000</td>
                      <td>11/2/2019</td>
                      <td><i style={{ color: "#17A2B8", paddingRight: "0.2em" }} className="fas fa-bars" />
                        <i style={{ color: "#28A745", paddingRight: "0.2em" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                      
                      <td>5</td>
                      <td>About Employee</td>
                      <td>Ahmad Naseem</td>
                      <td>0300-004000</td>
                      <td>12/2/2019</td>
                      <td><i style={{ color: "#17A2B8", paddingRight: "0.2em" }} className="fas fa-bars" />
                        <i style={{ color: "#28A745", paddingRight: "0.2em" }} className="fas fa-edit" />
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
export default Complaints;
