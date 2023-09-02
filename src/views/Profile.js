import React,{useState} from 'react'
import {Form,Col,Card,Button,Row,Table, Tabs,Tab,ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Employee from '../components/forms/profile/Employee';
import Employeesalarydetails from '../components/forms/profile/Employeesalarydetails';
import Contact from '../components/forms/profile/Contact';
import { Router } from 'react-router';
const Profile = () => {
  const [key, setKey] = useState('Employee');
return (
    <div className="content-wrapper">
        <div className="container bootstrap snippet">
        <br/>
    <Row>
      <Col sm='12'><Link to='/profile/edit'><Button style={{float:'right'}}>Edit Profile</Button></Link></Col>
     </Row>
    <Row>
      <Col sm='3'>{/*left col*/}
        
        <ListGroup>
        <ListGroup.Item>  <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" style={{borderRadius:'50px'}} />
          <div className="text-center">
       <p> Name</p>
        </div><br />
        </ListGroup.Item>
          <ListGroup.Item>Activity <i className="fa fa-dashboard fa-1x" /></ListGroup.Item>
          <ListGroup.Item><strong>Staff ID</strong></ListGroup.Item>
          <ListGroup.Item><Row><Col><strong>Role</strong></Col><Col ><strong></strong></Col></Row></ListGroup.Item>
          <ListGroup.Item><strong>Designation</strong></ListGroup.Item>
          <ListGroup.Item><strong>EPF No</strong></ListGroup.Item>
          <ListGroup.Item><strong>Basic Salary</strong></ListGroup.Item>
          <ListGroup.Item><strong>Contract type</strong></ListGroup.Item>
          <ListGroup.Item><strong>Work Shift</strong></ListGroup.Item>
          <ListGroup.Item><strong>Location</strong></ListGroup.Item>
          </ListGroup> 
        {/* <div className="panel panel-default">
          <div className="panel-heading">Social Media</div>
          <div className="panel-body">
            <i className="fa fa-facebook fa-2x" /> <i className="fa fa-github fa-2x" /> <i className="fa fa-twitter fa-2x" /> <i className="fa fa-pinterest fa-2x" /> <i className="fa fa-google-plus fa-2x" />
          </div>
        </div> */}
      </Col>
      <Col sm='9'>
      <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            
            <Tab eventKey="Profile" title="Profile">
              <Employeesalarydetails />
            </Tab>
            <Tab eventKey="Employee" title="Employee">
              <Employee />
            </Tab>
            <Tab eventKey="contact" title="Contact" >
              <Contact />
            </Tab>
          </Tabs>
        </Col>{/*/tab-content*/}
    </Row>{/*/col-9*/}
  </div>{/*/row*/}
  </div>
)}
  
  
  
    


export default Profile
