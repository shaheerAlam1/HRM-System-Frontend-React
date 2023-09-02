import React from "react";
import { Container, Col, Row, Jumbotron,Form, Card,enableSalaryPageForm, Button } from "react-bootstrap";

class Employee extends React.Component {
 
  render() {
    return (
         <>
        
                  
            <Card border="info" >
  <Card.Header style={{backgroundColor:"#17A2B8",color:"white",}} as="h5">Add New Employee</Card.Header>
  <Card.Body>
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Row>
          <Col>
    <Form.Label>Employee ID</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
  </Col>
  <Col>
  <Form.Label>Employee name</Form.Label>
  
  <Form.Control size="sm" type="text" placeholder="Small text" />
  </Col>
  </Form.Row>
  <Form.Row><Col>
          <Form.Label> Salary</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
 
                  <Col>
          <Form.Label>Designation</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
          </Form.Row> 
          <Form.Row><Col>
                  
                      <Form.Label>Job ID</Form.Label>
                      <Form.Control
                        as="select"
                        value=''
                        // onChange={}
                      >
                        <option>Choose Job Id</option>
                        <option>Example1</option>
                        <option>Example2</option>
                        <option>Example3</option>
                        <option>Example4</option>
                      </Form.Control>
                      </Col>     
                      <Col>
  <Form.Group controlId="formBirth">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  </Col>
   </Form.Row>
    <Form.Row>
    <Col> <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                // value={image}
                // onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                // onChange={uploadFileHandler}
              ></Form.File>
              {/* {uploading && <Loader />} */}
            </Form.Group>
        </Col>
        <Col>
        
        <Form.Label>Dept Id</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
        </Col>
        
    </Form.Row>
  </Form.Group>
  <Button variant="info" type="submit">Submit form</Button>
</Form>
  </Card.Body>
</Card>
           
            </>
    );

    
  }
}

export default Employee;