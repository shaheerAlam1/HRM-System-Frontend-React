import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import { Container, Col, Row, Jumbotron,Form, Card,enableSalaryPageForm, Button } from "react-bootstrap";

function Employee() {
  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];
  const products = [
    { id: 1, Leavetype: 'Public holidays', Days: '3',Status:'inactive' ,Action:'Edit '},
    { id: 2, Leavetype: 'Vaction days', Days: '7' ,Status:'inactive',Action:'Edit'},
    { id: 3, Leavetype: 'Vacation days', Days: '7',Status:'inactive',Action:'Edit'},
    { id: 4, Leavetype: 'Public holidays', Days: '3',Status:'inactive',Action:'Edit' }
  ];

  const columns = [
    { dataField: 'Leavetype', text: 'Leave type' },
    { dataField: 'Days', text: 'Days' },
    { dataField: 'Status', text: 'Status' },
    {dataField: 'Action', text: 'Action'}
  ];

    return (
         <>
            <Card border="info" >
  {/* <Card.Header style={{backgroundColor:"#17A2B8",color:"white"}} as="h5">Profile</Card.Header> */}
  <Card.Body>
  <BootstrapTable keyField='id' data={products} columns={columns} defaultSorted={defaultSorted}/>


                  

           </Card.Body>
           </Card>
            </>
    );

    
  }


export default Employee;