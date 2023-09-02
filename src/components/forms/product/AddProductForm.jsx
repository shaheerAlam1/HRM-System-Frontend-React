import React, { Component } from 'react';
import { Form, Col, Card, Button, Row, Table } from 'react-bootstrap';
import Axios from 'axios';
import { element } from 'prop-types';

const apiEndpoint="http://localhost:3003/products";
class AddProductForm extends Component {
    state={
        productName:"",
        productDescription:"",
        productDate:"",
        productCategory:"",
        productImg:"",
        productBarcode:"",
        products:[],
    }
    async componentDidMount() {
        const response= await Axios.get(apiEndpoint);
        const {data:products}=response;
        this.setState({products});
      }

  handleChange=(event)=>{
      const nam=event.target.name;
      const val=event.target.value;
      this.setState({[nam]: val});
  }  

  handleSubmit=async (event)=>{
    event.preventDefault();
    const data = {
        productName:this.state.productName,
        productDescription:this.state.productDescription,
        productDate:this.state.productDate,
        productImg:this.state.productImg,
        productBarcode:this.state.productBarcode,
    }
    // const  {data:product}=await Axios.post(apiEndpoint,data);
        const res=await Axios.post(apiEndpoint,data);
    console.log(res.status)
        if (res.status===200){
            const products= [data,...this.state.products]
            this.setState({products})
        }
    // const products=[product,...this.state.products]
    // this.setState({products})
  }
  render() {

    return (
      <>
        <Row>
          <Col md="4" className="pl-0 pr-0" >
            <Card style={{borderColor: "#545CD8"}} >
              <Card.Header style={{ backgroundColor: "#545CD8", color: "white" }}>Add Product</Card.Header>
              <Card.Body>

                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Small text" name="productName" onChange={this.handleChange}/>
                  </Form.Group>
                  
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control size="sm" type="text" name="productDescription" placeholder="" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Date</Form.Label>
                    <Form.Control size="sm" type="date" name="productDate"  placeholder="" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Category</Form.Label>
                    <Form.Control size="sm" type="text" name="productCategory" placeholder="" onChange={this.handleChange} />
                  </Form.Group>
                   
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Product image</Form.Label>
                    <Form.Control size="sm" type="text" name="productImg" placeholder="" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Barcode</Form.Label>
                    <Form.Control size="sm" type="text" name="productBarcode" placeholder="" onChange={this.handleChange} />
                  </Form.Group>
                  
                  <Button type="submit" style={{backgroundColor:"#545CD8",}}>Submit form</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" className="pl-0 pr-0">
            <Card style={{borderColor: "#545CD8"}}  >
              <Card.Header style={{ backgroundColor: "#545CD8", color: "white" }}>Product List</Card.Header>
              <Card.Body>


                <Table responsive hover size="sm" >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th> Date</th>
                      <th> Img</th>
                      <th> Barcode</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.state.products.map((item,id)=>{
                          return <tr key={id}>
                          <td>{item.productName}</td>
                          <td>{item.productDescription}</td>
                          <td>{item.ProductDate}</td>
                        
                          <td>{item.productImg}</td>
                          <td>{item.productBarcode}</td>
                          <td><i style={{ color: "#28A745" }} className="fas fa-edit" />
                            <i style={{ color: "#FFC107" }} className="fas fa-trash" />
                          </td>
                        </tr>
                      })}
                    
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
export default AddProductForm;
