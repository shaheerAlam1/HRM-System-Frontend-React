import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class AddExpense extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md="4">
            <Card border="warning" >
              <Card.Header style={{ backgroundColor: "#FFC107", color: "white" }}>Add Expense</Card.Header>
              <Card.Body>

                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Small text" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Expense Head</Form.Label>
                    <Form.Control as="select" size="sm">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Expense Number</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Small text" />
                  </Form.Group>

                  <Form.Group >
                    <Form.Label>Amount</Form.Label>

                    <Form.Control size="sm" type="text" placeholder="Small text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Attach Document" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button type="submit" variant="Warning">Submit form</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card border="warning" >
              <Card.Header style={{ backgroundColor: "#FFC107", color: "white" }}>Expense List</Card.Header>
              <Card.Body>


                <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Invoice Number</th>
                      <th>Date</th>
                      <th>Expense Head</th>
                      <th>Amount</th>

                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>

                      <td>Otto</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>

                      <td>Thornton</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
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
export default AddExpense;
