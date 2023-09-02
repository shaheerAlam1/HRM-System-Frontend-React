import React, { Component } from 'react';
import {Form,Col,Card,Button,Row,Table} from 'react-bootstrap';

class EditProfile extends Component{
    render(){
        return(
            <>
             <div className="content-wrapper">
        <div className="container bootstrap snippet">
   
             <Card border="info" >
  <Card.Body>
 
            <Row>
                <Col md = "12">
                <Card border="danger" >
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}}>Basic Info</Card.Header>
    <Card.Body>
     
  <Form>
  <Row><Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Staff Id</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col> <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Role</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>Manager</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col> <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Designation</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>Chief of opertaions</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col> <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Department</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>CS</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </Col>
  </Row>

  <Row><Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>First Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col> <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Last Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Father Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Mother Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  </Row>
  <Row>
  <Col> <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Gender</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>Select</option>
      <option>Male</option>
      <option>Female</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col> <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Marital Status</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>Single</option>
      <option>Married</option>
      <option>Divorced</option>
      <option>Separated</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="dob">
  <Form.Label>Date of Birth</Form.Label>
  <Form.Control type="date" name="dob" placeholder="Date of Birth" />
  </Form.Group>
  </Col>
  <Col>                      <Form.Group controlId="Dateofjoining">
                            <Form.Label>Date of joining</Form.Label>
                            <Form.Control type="date" name="Dateofjoining" placeholder="Date of Joining" />
                        </Form.Group></Col>
  </Row>

  <Row><Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Phone</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col> <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Mobile</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Email</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  </Row>
  


  <Row>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Current Address</Form.Label>
    <Form.Control size="sm" as="textarea" rows={3} placeholder="Small text" />
  </Form.Group>
  </Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Permenant Address</Form.Label>
    <Form.Control size="sm" as="textarea" rows={3} placeholder="Small text" />
  </Form.Group>
  </Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Qualification</Form.Label>
    <Form.Control size="sm" as="textarea" rows={3} placeholder="Small text" />
  </Form.Group>
  </Col>
  </Row>

  <Row>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Work Experience</Form.Label>
    <Form.Control size="sm" as="textarea" rows={3} placeholder="Small text" />
  </Form.Group>
  </Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Note</Form.Label>
    <Form.Control size="sm" as="textarea" rows={3} placeholder="Small text" />
  </Form.Group>
  </Col>
 </Row>
 

</Form>

</Card.Body>
</Card> 
</Col>

</Row>   

<Card>
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}} as="h5">Payroll</Card.Header>
<Card.Body>

<Row>
  <Col md='12'>
  <Form>
  <Row><Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Basic Salary</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Contract Type</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>Permenant</option>
      <option>Probation</option>
      
    </Form.Control>
  </Form.Group></Col>  </Row>
  <Row>

  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Location</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Work Shift</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>

  </Row>
  </Form>

  </Col >
</Row>
</Card.Body>
</Card>


<Card>
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}} as="h5">Leaves</Card.Header>
<Card.Body>
<Row>
  <Col md='12'>
  <Form>
  <Row><Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Casual</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Medical</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col> 
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Urgent</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col> </Row>
  <Row>

  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Other</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Annual</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>

  </Row>
  </Form>
  </Col >
</Row>
</Card.Body>
</Card>


<Card>
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}} as="h5">Bank Account Details</Card.Header>
<Card.Body>
<Row>
  <Col md='12'>
  <Form>
  <Row><Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Account Title</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Bank Account Number</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col> 
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Bank Name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col> </Row>
  <Row>

  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>IFSC Code</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Bank Branch Name </Form.Label>    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>

  </Row>
  </Form>

  </Col >
</Row>
</Card.Body>
</Card>

<Card>
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}} as="h5">Social Media Links</Card.Header>
<Card.Body>
<Row>
  <Col md='12'>
  <Form>
  <Row>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Twitter URL</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col> 
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Facebook URL</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col> </Row>
  <Row>

  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Linked in URL</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>
  <Col><Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Instagram URL</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group></Col>

  </Row>
  </Form>

  </Col >
</Row>
</Card.Body>
</Card>
<Button type="submit" variant="danger">Save</Button> 

  </Card.Body>
  </Card>
</div>
</div>         
   </>
        )
    }
}

export default EditProfile

