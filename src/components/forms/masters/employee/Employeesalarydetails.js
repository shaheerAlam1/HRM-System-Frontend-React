import React, { Component } from 'react';
import {Form,Col,Card,Button} from 'react-bootstrap';
class Employeesalarydetails extends Component{
    render(){
        return(
            <>
            <Card border="info" >
  <Card.Header style={{backgroundColor:"#17A2B8",color:"white"}} as="h5">Add Salary Details</Card.Header>
  <Card.Body>
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Row>
          <Col>
    <Form.Label>Basic Salary</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
  </Col>
  <Col>
  <Form.Label>Housing Allowance</Form.Label>
  
  <Form.Control size="sm" type="text" placeholder="Small text" />
  </Col>
  </Form.Row>
  <Form.Row><Col>
          <Form.Label> Other Allowance</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
 
                  <Col>
          <Form.Label>Net Amount</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
          </Form.Row> 
          <Form.Row><Col>
                  
                      <Form.Label>Tranasport Allowance</Form.Label>
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
                    
   </Form.Row>
    <Form.Row>
    <Col>
        
        <Form.Label>Bank Name</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
        </Col>
        
    </Form.Row>
  </Form.Group>
  <Button variant="info" type="submit">Submit form</Button>
</Form>
  </Card.Body>
</Card>
           
            </>
        )
    }
}
export default Employeesalarydetails;