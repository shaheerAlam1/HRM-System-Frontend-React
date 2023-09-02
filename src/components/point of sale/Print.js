import { Button } from 'bootstrap';
import React, { Component } from 'react';
// import { ComponntToPrint } from './ComponentToPrint';
import ReactToPrint from 'react-to-print';
import Invoice from "./Invoice";
  class Print extends Component {
      constructor(props){
          super(props);
      }
    // componentDidMount(){
    //     document.body.style.zoom = "150%";
    // }
    render() {
        
      return (
        <div>
          <ReactToPrint 
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
          <Invoice 
          list={this.props.list} tax={this.props.tax} subtotal={this.props.subtotal} total={this.props.total}
           ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
export default Print;