import React, { Component } from 'react';
import {Form,Col,Card,Button,Row,Table} from 'react-bootstrap';
class TransportReport extends Component{
    render(){
        return(
            <>
            <Row>
                <Col md = "12">
                <Card border="danger" >
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}}>Select Criteria</Card.Header>
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
    <Form.Label>Route Title</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>rawalpindi</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Vehicle Number</Form.Label>
    <Form.Control as="select" size ="sm">
      <option>ilm 2013</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  
</Col>
  </Row>
          <Button type="submit" variant="danger">Search</Button>
</Form>
</Card.Body>
  </Card> 
</Col>
</Row> 
<Row>
    <Col md="12">
<Card border="danger" >
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}}>Transport Report</Card.Header>
    <Card.Body>
 
<Table responsive hover size="sm" >
  <thead>
    <tr>
      <th>Class Section</th>
      <th>Admission Number</th>
      <th>Employee Name</th>
      <th>Mobile Number</th>
      <th>Route Title</th>
      <th>Vehicle Number</th>
      <th>Driver Name</th>
      <th>Driver Contact</th>
      
      <th>Fare(Rs.)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1221</td>
      <td>Mark</td>
      <td>xxxxx</td>
      
      <td>Rawalpindi</td>
      <td>ilm 2013</td>
      <td>daniyal</td>
      <td>xxxxx</td>
     <td>3000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1222</td>
      <td>Mark</td>
      <td>xxxxx</td>
      
      <td>Islamabad</td>
      <td>hw 202</td>
      <td>ahmed</td>
      <td>xxxxx</td>    
     <td>3000</td>
    </tr>
    <tr>
      <td>3</td>
      <td >1221</td>
      <td>Larry</td>
      <td>xxxxx</td>
      
      <td>Rawat</td>
      <td>rlf 202</td>
      <td>daniyal</td>
      <td>xxxxx</td>
     <td>3000</td>
    </tr>
    <tr>
      <td>4</td>
      <td >1221</td>
      <td>Ahmed</td>
      <td>xxxxx</td>
      
      <td>Rawat</td>
      <td>rlf 202</td>
      <td>daniyal</td>
      <td>xxxxx</td>
     <td>3000</td>
    </tr>
    <tr>
      <td>5</td>
      <td >1223</td>
      <td>Mark</td>
      <td>xxxxx</td>
      
      <td>Airport</td>
      <td>ilm 143</td>
      <td>kareem</td>
      <td>xxxxx</td>
      <td>5000</td>
    </tr>
    <tr>
      <td>6</td><td>1223</td>
      <td >Malik tanver</td>
      <td>Larry</td>
      <td>xxxxx</td>
      <td>Kahuta</td>
      <td>ahmed</td>
      <td>xxxxx</td>
      <td>6000</td>
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

export default TransportReport
