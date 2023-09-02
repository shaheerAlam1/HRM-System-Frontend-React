import React from 'react'
import {Form,Col,Card,Button} from 'react-bootstrap';

const Contact = () => {
    return (
       
                    <>
                    <Card border="info" >
          <Card.Header style={{backgroundColor:"#17A2B8",color:"white"}} as="h5">Contact</Card.Header>
          <Card.Body>
          <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Row>
                  <Col>
            <Form.Label>Local Address</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
          <Col>
          <Form.Label>Res Phone</Form.Label>
          
          <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
          </Form.Row>
          <Form.Row>
                  <Col>
                  <Form.Label>Home Phone </Form.Label><Form.Control size="sm" type="text" placeholder="Small text"></Form.Control>
                  </Col>
                  <Col>
                  <Form.Label>Mobile</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Small text" />
                  </Col>
           </Form.Row>
            <Form.Row>
                <Col>
                <Form.Label>Contact Tel</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Small text" />
                </Col>
                <Col>
                <Form.Label>Contact Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
                <Col>
                <Form.Label>Contact Address</Form.Label>
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

export default Contact
