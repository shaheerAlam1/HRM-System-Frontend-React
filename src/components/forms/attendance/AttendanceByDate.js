import React, { Component } from 'react';
import {Form,Col,Card,Button,Row,Table} from 'react-bootstrap';
class AttendanceByDate extends Component{
    state={
        curTime : new Date().toLocaleString(),
      }
    render(){
        return(
            <>
            <Row>
                <Col md = "12">
                <Card border="warning" >
    <Card.Header style={{backgroundColor:"#FFC107",color:"white"}}>Select Criteria</Card.Header>
    <Card.Body>
 
  <Form><Row><Col>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Class </Form.Label>
    <Form.Control as="select" size ="sm">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group></Col>
 <Col> <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Section</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group></Col>
  
  <Col>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Attendance Date</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text"  value={this.state.curTime} disabled/>
  </Form.Group>
  </Col>
  
  </Row>
          <Button type="submit" variant="warning">Search</Button>
</Form>
</Card.Body>
  </Card> 
</Col>
</Row> 
           
            </>
        )
    }
}


export default AttendanceByDate