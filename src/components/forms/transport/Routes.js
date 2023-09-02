import React, { Component } from 'react';
import {Form,Col,Card,Button,Row,Table} from 'react-bootstrap';
class Routes extends Component{
    
    
    render(){
        return(
            <>
            <Row>
                <Col md = "4">
                <Card border="danger" >
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}}>Create Route</Card.Header>
    <Card.Body>
     
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Route Title</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Fare</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group>
  
          <Button type="submit" variant="danger" >Submit form</Button>
</Form>
</Card.Body>
  </Card> 
</Col>
<Col md="8">
<Card border="danger" >
    <Card.Header style={{backgroundColor:"#DC3545",color:"white"}}>Vehicle Route List</Card.Header>
    <Card.Body>
  
     
<Table responsive hover size="sm" >
  <thead>
    <tr>
      <th>Route Title</th>
      <th>Fare</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Islamabad</td>
      <td>3000</td>
     <td><i  style={{color:"#28A745"}}className="fas fa-edit" />
      <i  style={{color:"#FFC107"}}className="fas fa-trash" />
      </td>
    </tr>
    <tr>
      <td>Rawalpindi</td>
      <td>3500</td>
     <td><i  style={{color:"#28A745"}}className="fas fa-edit" />
      <i  style={{color:"#FFC107"}}className="fas fa-trash" />
      </td>
    </tr>
    <tr>
      <td>Kahuta</td>
      <td >4500</td>
     <td><i  style={{color:"#28A745"}}className="fas fa-edit" />
      <i  style={{color:"#FFC107"}}className="fas fa-trash" />
      </td>
    </tr>
    <tr>
      <td>Rawat</td>
      <td >3500</td>
     <td><i  style={{color:"#28A745"}}className="fas fa-edit" />
      <i  style={{color:"#FFC107"}}className="fas fa-trash" />
      </td>
    </tr>
    <tr>
      <td>Fateh jang</td>
      <td >6000</td>
      <td><i  style={{color:"#28A745"}}className="fas fa-edit" />
      <i  style={{color:"#FFC107"}}className="fas fa-trash" />
      </td>
    </tr>
    <tr>
      <td>Airport</td>
      <td >5000</td>
     <td><i  style={{color:"#28A745"}}className="fas fa-edit" />
      <i  style={{color:"#FFC107"}}className="fas fa-trash" />
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
export default Routes;
