import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class CallLog extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md="4">
            <Card border="primary" >
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Add Call Log</Card.Header>
              <Card.Body>

                <Form>
                 
                  
                  <Form.Group controlId="username">
                    <Form.Label>Name</Form.Label>
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

                  <Form.Group>
                    <Form.Label>Next Follow Up Date</Form.Label>
                    <Form.Control size="sm" type="date" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Call Duration</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                 < Form.Group >
                    <Form.Label>Call Type</Form.Label>
                    <Form.Control as="select" size="sm">
                      <option>Incoming</option>
                      <option>Outgoing</option>
                    </Form.Control>
                  </Form.Group>
                  
                  <Button type="submit" variant="primary">Submit form</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card border="primary" >
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Call Log List</Card.Header>
              <Card.Body>

                <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Date</th>
                      <th>Next Follow Up Date</th>
                      <th>Call Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td>Abdul Rehman</td>
                      <td>0321-000000</td>
                      <td>10/18/2019</td>
                      <td>11/1/2019</td>
                      <td>Incoming</td>
                      <td><i style={{ color: "#17A2B8", paddingRight: "0.2em" }} className="fas fa-bars" />
                        <i style={{ color: "#28A745", paddingRight: "0.2em" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                   
                      <td>Ali Husnain</td>
                      <td>0321-000000</td>
                      <td>10/14/2019</td>
                      <td>11/2/2019</td>
                      <td>Incoming</td>
                      <td><i style={{ color: "#17A2B8", paddingRight: "0.2em" }} className="fas fa-bars" />
                        <i style={{ color: "#28A745", paddingRight: "0.2em" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />

                      </td>
                    </tr>
                    <tr>
                      
                      <td>Usman Mehmood</td>
                      <td>0322-000000</td>
                      <td>9/20/2019</td>
                      <td>9/26/2019</td>
                      <td>Outcoming</td>
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
export default CallLog;
