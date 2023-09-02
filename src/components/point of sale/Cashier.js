/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Axios from 'axios';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import QrReader from 'react-qr-reader';
import "./Cashier.css";
import Print from "./Print";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

class Cashier extends React.Component {
    constructor(){
        super();
        this.state={
             products:[],
            dropdownOpen: false,
              lis:[],
              bill:0,
              total:0,
              tax:17,
              taxAmount:0,
              returnAmount:0,
              result:"",
              isBarcode:false, 
              isInvoice:false,      
        }
        
    }
    componentDidMount(){
      // showemployee=()=>{
        
        this.interval=setInterval(() => {
          Axios.get('http://localhost:3003/products').then((Response)=>{
          // console.log(Response);
          this.setState(()=>{return {products : Response.data}});
        })
        }, 500);
       
      //}
    }
    addtobill=(val)=>{
      const x={
        Price: val.Price,
        name: val.ProductName
      }
    
     this.setState(()=>{ this.state.lis.push(x); return [...this.state.lis]})
    }
    handleScan = data => {
      if (data) {
        this.setState({
          result: data
        })
      }
    }
    handleError = err => {
      console.error(err)
    }
  render() {

    let qr;
    if(this.state.isBarcode==true){
     qr=(<div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '30%' }}
        />
        {/* <p>{this.state.result}</p> */}
      </div>);

    }

    if(this.state.isInvoice==true){
      return(
        <div className="content">
          <Button color="warning" onClick={()=>{
             this.setState(()=>{
              return { isInvoice: false};
            });
          }} >Back</Button>
           <Print list={this.state.lis} tax={this.state.taxAmount} subtotal={this.state.bill} total={this.state.total}/>
           
          </div>
     );
    }
    else{
    return (
      <>
        <div className="content">
        
          <Row>
          <Col md="4">
          <Card>
                <CardHeader>
                  <Row>
                  <Col >
                  <CardTitle tag="h4">Items</CardTitle>
                  </Col>
                  <Col >
                  <Button 
                  onClick={()=>{
                    if(this.state.isBarcode==false){
                        this.setState(()=>{
                          return { isBarcode: true};
                        });
                    }
                    else if(this.state.isBarcode==true){
                      this.setState(()=>{
                        return { isBarcode: false};
                      });
                    }
                    }}
                  color="success"size="sm">Scan</Button>
                  </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    {this.state.lis.map((val,key)=>{
                      return <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              
                              //  src={require(picture)}
                              src="https://picsum.photos/200"
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          {val.name} <br />
                          <Row>
                              <Col className="px-1" md="5">
                          <span className="text-muted">
                            <medium>{val.price}/-</medium>
                          </span> </Col>
                          <Col className="px-1" md="5">
                          <span className="text-muted">
                            
                            <input style={{width:"100%", height:"80%"}}placeholder="quantity" type="text" 
                              onChange={(event)=>{
                                const price=(this.state.bill - val.price)+(val.price * event.target.value);
                                console.log(price);
                                this.setState(()=>{return {bill: price}});

                                const t=((price*this.state.tax)/100)+price;
                                this.setState(()=>{return {taxAmount:(price*this.state.tax)/100}})
                                this.setState(()=>{return {total: t}});
                              }}/>
                          </span> </Col>
                          </Row>
                        </Col>
                        
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                            onClick={()=>{  
                             
                              const initial=this.state.bill-val.price;
                              this.setState(()=>{return {bill:initial}})

                              const t=((initial*this.state.tax)/100)+initial;
                              this.setState(()=>{return {taxAmount:(initial*this.state.tax)/100}})
                              this.setState(()=>{return {total: t}});
                              
                              let x=this.state.lis.filter((arr,element)=>{
                                return key!=element;
                              })
                              this.setState(()=>{return {lis:x}})
                            }}
                          >
                            
                            <i className="fa fa-trash" />
                          </Button>
                        
                        </Col>
                        

                      </Row>
                    </li>
                      
                    })}
                    
                  
                  </ul>
                  <Row>
              <Col  md ="13">
                <Card >
                    <CardHeader>
                    <CardTitle tag="h4">Bill</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Row>
                        <Col md="7" xs="7">
                            
                        <p> Subtotal: {this.state.bill}/-</p>
                        </Col>
                        <Col md="5" xs="5">
                        <input style={{width:"100%"}}placeholder="amount" type="text" 
                        onChange={(event)=>{
                          if(!event.target.value){
                               this.setState(()=>{return {returnAmount:0}})
                          }
                          else{
                               const x=event.target.value-this.state.total;
                               this.setState(()=>{return {returnAmount:x}})
                          }
                        }}/>
                        </Col>
                        </Row>
                        <Row>
                        <Col  md="7" xs="7">
                        <p> Tax: {this.state.tax}% {this.state.taxAmount}/-</p>
                        </Col>
                        <Col md="5" xs="5">
                        <p>Return: {this.state.returnAmount}/-</p>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                        
                        <p> Total:{this.state.total}/-</p>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Button 
                            size="sm"
                          color="primary"  >Retrive</Button>
                        </Col>
                        <Col>
                            <Button 
                            size="sm"
                          color="primary" 
                          onClick={()=>{
                            this.setState(()=>{
                              return {
                                lis:[],
                                bill:0,
                                total:0,
                                tax:17,
                                taxAmount:0,
                                returnAmount:0,
                              }
                            })
                          }}>Cancel </Button>
                        </Col>
                        <Col>
                            <Button 
                            size="sm"
                          color="primary" >Hold </Button>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Button 
                             onClick={()=>{
                                  this.setState(()=>{
                                    return { isInvoice: true};
                                  })
                              }}
                            className="btn-round"
                          color="success" style={{width:"100%"}}
                           >PAY RS {this.state.total}
                           
                           </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
              </Col>
              <Col md="8">
                
              </Col>
          </Row>
                </CardBody>
              </Card >
              </Col>
          
            <Col md="8">
              <Card className="card-user" >
                <CardHeader>
                    <Row>
                        <Col>
                  <CardTitle tag="h5">Products</CardTitle>
                  </Col>
                  <Col>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
      <DropdownToggle caret>
        Category
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>fruits</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>cosmetics</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </Col>
    </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col style={{ marginBottom: "25px"}}>
                {qr}  
                </Col>
                </Row>         
                <Row>                
      {this.state.products.map((val,key)=>{ 
                    return  <Col md="3" xs="6" sm="4">  <a style={{ cursor: 'pointer' }} onClick={()=>{
                      const x={
                         "name":`${val.ProductName}`,
                       "price":`${val.ProductPrice}`,
                       }
                       this.setState(()=>{return {lis: this.state.lis.concat(x)}});
                       this.setState(()=>{return {bill: this.state.bill+val.ProductPrice}});
                       const y=this.state.bill+val.ProductPrice;
                       const t=((y*this.state.tax)/100)+y;
                       this.setState(()=>{return {taxAmount: (y*this.state.tax)/100}});
                       this.setState(()=>{return {total: t}});

                       console.log(this.state.lis);
                    }}>  
                    <Card  color="light" style={{height:"180px"}}>
        <CardImg  top width="100%" src="https://picsum.photos/200" alt="Card image cap" style={{height:"100px",width:"auto" }} />
        <CardBody>
          <CardTitle tag="h5">{val.ProductName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rs.{val.ProductPrice}</CardSubtitle>
        </CardBody>
      </Card>
      </a> </Col>;
            })}
   
 
              {/* </div> */}
              </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </div>
        
      </>
    );
  }
}
}
export default Cashier;
