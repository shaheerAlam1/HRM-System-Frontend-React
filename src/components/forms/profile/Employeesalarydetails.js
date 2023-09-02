import React, { Component } from 'react';
import {Form,Col,Card,Table,Row,Button} from 'react-bootstrap';
class Employeesalarydetails extends Component{
    render(){
        return(
            <>
           
            <Card border="info" >
  {/* <Card.Header style={{backgroundColor:"#17A2B8",color:"white"}} as="h5">Profile</Card.Header> */}
  <Card.Body>

  <Card border="info" >
  <Card.Body>
  <Row>
  
    <Col md='12'>
  <Table responsive hover size="sm"  >
    <tr>
      <th>Phone</th>
      <td>123456789</td>
    </tr>
    <tr>
    <th>Emergency Contact Number</th>
      <td></td>
    </tr>
    <tr>
    <th>Email</th>
      <td ></td>

    </tr>
    <tr>
    <th>Gender</th>
      <td >male</td>
    </tr>
    <tr>
    <th>Marital Status</th>
      <td ></td>
    </tr>
    <tr>
    <th>Father Name</th>
      <td ></td>
    </tr>
    <tr>
    <th>Mother name</th>
      <td ></td>
    </tr>
    <tr>
    <th>Qualification</th>
      <td ></td>
    </tr>
    <tr>
    <th>Work Experience</th>
      <td ></td>
    </tr>
    <tr>
    <th>Note</th>
      <td ></td>
    </tr>
  
 
  
  
   
 </Table>
 
 </Col>
 </Row> 
</Card.Body>
</Card>
 
<Card>
    <Card.Header style={{backgroundColor:"#17A2B8",color:"white"}} as="h5">Address</Card.Header>
<Card.Body>
<Row>
  <Col md='12'>

<Table responsive hover size="sm"  >
    <tr>
      <th>Current Address</th>
      <td></td>
    </tr>
    <tr>
    <th>Permanent Address</th>
      <td></td>
    </tr>


  
  
   

 </Table>
 </Col >
</Row>      


</Card.Body>
</Card>

<Card>
    <Card.Header style={{backgroundColor:"#17A2B8",color:"white"}} as="h5">Social Media link</Card.Header>
<Card.Body>
<Row>
  <Col md='12'>

<Table responsive hover size="sm"  >
    <tr>
      <th>Facebook URL</th>
      <td></td>
    </tr>
    <tr>
    <th>Twitter URL</th>
      <td></td>
    </tr>
    <tr>
    <th>Linked in URL</th>
      <td></td>
    </tr>



  
  
   

 </Table>
 </Col >
</Row>      


</Card.Body>
</Card>

</Card.Body>
  </Card>
            </>
        )
    }
}
export default Employeesalarydetails;