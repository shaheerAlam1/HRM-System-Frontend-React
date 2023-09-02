import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class VisitorBook extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md="4">
            <Card border="primary" >
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Add Visitor</Card.Header>
              <Card.Body>

                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Purpose</Form.Label>
                    <Form.Control as="select" size="sm">
                      <option>Call A Meeting</option>
                      <option>Session</option>

                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="username">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>ID Card</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>No of Person</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="" />
                    <Form.Label>Date</Form.Label>
                    <Form.Control size="sm" type="date" placeholder="" />
                    <Form.Label>In Time</Form.Label>
                    <Form.Control size="sm" type="time" placeholder="" />
                    <Form.Label>Out Time</Form.Label>
                    <Form.Control size="sm" type="time" placeholder="" />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Amount</Form.Label>

                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Attach Document" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button type="submit" variant="primary">Submit form</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card border="primary" >
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Visitor List</Card.Header>
              <Card.Body>

                <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>Purpose</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Date</th>
                      <th>In Time</th>
                      <th>Out Time</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Call a Meeting</td>
                      <td>Abdul Rehman</td>
                      <td>0321-000000</td>
                      <td>10/18/2019</td>
                      <td>10:30 AM</td>
                      <td>11:15 AM</td>
                      <td><i style={{ color: "#17A2B8", paddingRight: "0.2em" }} className="fas fa-bars" />
                        <i style={{ color: "#28A745", paddingRight: "0.2em" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />

                      </td>
                    </tr>
                    <tr>
                      <td>Session</td>
                      <td>Ali Husnain</td>
                      <td>0321-000000</td>
                      <td>10/18/2019</td>
                      <td>10:30 AM</td>
                      <td>11:15 AM</td>
                      <td><i style={{ color: "#17A2B8", paddingRight: "0.2em" }} className="fas fa-bars" />
                        <i style={{ color: "#28A745", paddingRight: "0.2em" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />

                      </td>
                    </tr>
                    <tr>
                      <td>Session</td>
                      <td>Usman Mehmood</td>
                      <td>0321-000000</td>
                      <td>10/20/2019</td>
                      <td>11:30 AM</td>
                      <td>2:15 PM</td>
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
export default VisitorBook;
