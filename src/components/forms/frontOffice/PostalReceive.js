import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class PostalReceive extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md="4">
            <Card border="primary" >
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Add Postal Receive</Card.Header>
              <Card.Body>

                <Form>
                 
                  
                  <Form.Group controlId="username">
                    <Form.Label>From Title</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Reference No</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                    <Form.Group>

                    <Form.Group controlId="username">
                    <Form.Label>To Title</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>

                    <Form.Label>Date</Form.Label>
                    <Form.Control size="sm" type="date" placeholder="" />
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
              <Card.Header style={{ backgroundColor: "#007BFF", color: "white" }}>Postal Receive List</Card.Header>
              <Card.Body>

                <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>From Title</th>
                      <th>Ref No</th>
                      <th>To Title</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td>Nayatel</td>
                      <td>4432</td>
                      <td>Sun tech</td>
                      <td>11/1/2019</td>
                      <td><i style={{ color: "#17A2B8", paddingRight: "0.2em" }} className="fas fa-bars" />
                        <i style={{ color: "#28A745", paddingRight: "0.2em" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                   
                      <td>PTCL</td>
                      <td>4532</td>
                      <td>Mega IT solution</td>
                      <td>11/2/2019</td>
                      
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
export default PostalReceive;
