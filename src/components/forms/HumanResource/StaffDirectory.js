import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
class StaffDirectory extends Component {
  render() {
    return (
      <>

        <Card style={{ borderColor: "#545CD8" }} >
          <Card.Header style={{ backgroundColor: "#545CD8", color: "white" }}> Select Criteria <Button varinat="primary" onClick={()=>{
            return <Redirect to ="/Profile/edit"/>
          }}>Add Staff</Button></Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">

                        <Form.Label>Role</Form.Label>
                        <Form.Control as="select" size="sm">
                          <option>Admin</option>
                          <option>Staff</option>
                          <option>Super Admin</option>
                          <option>HR</option>
                        </Form.Control>

                      </Form.Group>
                    </Col>

                  </Row>
                  <Button type="submit" style={{ backgroundColor: "#545CD8", borderColor: "#545CD8" }}>Search</Button>
                </Form>
              </Col>
              <Col>
                <Form>

                  <Form.Group controlId="exampleForm.ControlInput1">

                    <Form.Label>Search By Keyword</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Search by staff id,name,role,etc" />

                  </Form.Group>

                  <Button type="submit" style={{ backgroundColor: "#545CD8", borderColor: "#545CD8" }}>Search</Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header style={{ backgroundColor: "#545CD8", color: "white" }}>Income Result</Card.Header>

          <Card.Body>
            <Table responsive hover size="sm" >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Invoice Number</th>
                  <th>Date</th>
                  <th>Income Head</th>
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
export default StaffDirectory;
