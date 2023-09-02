import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
class AddBuilding extends Component {
  
  render() {
    
    return (
      <>
        <Row>
          <Col md="4">
            <Card style={{borderColor: "#545CD8"}} >
              <Card.Header style={{ backgroundColor: "#545CD8", color: "white" }}>Add Building</Card.Header>
              <Card.Body>

                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Building Name</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Small text" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Building Type</Form.Label>
                    <Form.Control as="select" size="sm">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  
                
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>intake</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="" />
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
            <Card style={{borderColor: "#545CD8"}}  >
              <Card.Header style={{ backgroundColor: "#545CD8", color: "white" }}>Building List</Card.Header>
              <Card.Body>


                <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>Building Name</th>
                      <th>Type</th>
                      <th>Address</th>
                      <th>Intake</th>
                   

                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>

                      <td>Otto</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                    
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>

                      <td>Thornton</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                    
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                     
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                    
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                    
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Jacob</td>

                      <td>@fat</td>
                      <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                        <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                      </td>
                    </tr>
                    <tr>
                  
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
export default AddBuilding;
