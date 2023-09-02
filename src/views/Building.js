import React, { Component } from 'react';
import { Button,Row,Col } from 'react-bootstrap';
import BuildingData from "./services/BuildingData";



export default class Building extends Component {
  constructor(){
    super();
    this.state={
      comp:null,
      istrue:false
    }
  }
  stylesheet={borderColor: "#545CD8", color: "#545CD8" , backgroundColor:"#f7f7f7"}

    render(){

      if (this.state.istrue===true){
        const Tag=this.state.comp;
        return(
          <>
          <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
            <Button  style={this.stylesheet}
           onClick={()=>{ this.setState(()=>{
                            return {istrue:false};})}}>Back</Button>
            </div>
            </section>
          <section className="content">
            <div className="container-fluid">
           
            <Tag/>
            </div>
            </section>

            </div>
          </>
        )
      }else{
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                  <Row>
                    {BuildingData.map((element,index)=>{
                       const Demo=element.TagName;
                        return <Col key={index} md="3" xs="12" sm="4"><div >
                          {/* <div className="col-12 col-sm-6 col-md-3"> */}
                          <div style={{cursor: "pointer"}} className="info-box" onClick={()=>{
                          this.setState(()=>{
                            return {istrue:true};
                          })
                          this.setState(()=>{
                            return {comp:Demo};
                          })
                        }}>
                          <span className="info-box-icon elevation-1" style={{ backgroundColor: "#545CD8", color: "white" }}><i className={element.icon}></i></span>
                          <div className="info-box-content">
                           
                            <span className="info-box-content">
                            {element.text}
                            </span>
                          </div>                          
                        </div>
                                             
                      </div>
                      </Col>                
                    })}
                </Row>
                </section>
            </div>
        )
    }}
}