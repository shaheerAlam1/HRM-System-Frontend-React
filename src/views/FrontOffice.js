import React, { Component } from 'react';
import { Button,Row,Col } from 'react-bootstrap';
import FrontOfficeData from "./services/FrontOfficeData";


export default class FrontOffice extends Component {
  constructor(){
    super();
    this.state={
      comp:null,
      istrue:false
    }
  }
    render(){
      if (this.state.istrue===true){
        const Tag=this.state.comp;
        return(
          <>
          <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
            <Button variant="outline-primary"
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
      }
      else{
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                  <Row>
                    {FrontOfficeData.map((element,index)=>{
                      const Demo=element.TagName;
                        return <Col key={index} md="3" xs="12" sm="4"><div >
                        <div style={{cursor: "pointer"}} className="info-box"onClick={()=>{
                          this.setState(()=>{
                            return {istrue:true};
                          })
                          this.setState(()=>{
                            return {comp:Demo};
                          })
                        }}>
                          <span className="info-box-icon bg-primary elevation-1"><i className={element.icon}></i></span>
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
    }
    }
}


// import React, { Component } from 'react';
// import { Button,Row,Col } from 'react-bootstrap';
// import ExpensesData from "./services/ExpensesData";



// export default class Expenses extends Component {
//   constructor(){
//     super();
//     this.state={
//       comp:null,
//       istrue:false
//     }
//   }


//     render(){

//       if (this.state.istrue==true){
//         const Tag=this.state.comp;
//         return(
//           <>
//           <div className="content-wrapper">
//             <section className="content-header">
//             <div className="container-fluid">
//             <Button variant="outline-warning"
//            onClick={()=>{ this.setState(()=>{
//                             return {istrue:false};})}}>Back</Button>
//             </div>
//             </section>
//           <section className="content">
//             <div className="container-fluid">
           
//             <Tag/>
//             </div>
//             </section>

//             </div>
//           </>
//         )
//       }else{
//         return ( 
//             <div className="content-wrapper">
//                 <section className="content-header">
//                   <Row>
//                     {ExpensesData.map((element,index)=>{
//                        const Demo=element.TagName;
//                         return <Col md="3" xs="12" sm="4"><div >
//                           {/* <div className="col-12 col-sm-6 col-md-3"> */}
//                           <div style={{cursor: "pointer"}} className="info-box" onClick={()=>{
//                           this.setState(()=>{
//                             return {istrue:true};
//                           })
//                           this.setState(()=>{
//                             return {comp:Demo};
//                           })
//                         }}>
//                           <span className="info-box-icon bg-warning elevation-1"><i className={element.icon}></i></span>
//                           <div className="info-box-content">
                           
//                             <span className="info-box-content">
//                             {element.text}
//                             </span>
//                           </div>                          
//                         </div>
                                             
//                       </div>
//                       </Col>                
//                     })}
//                 </Row>
//                 </section>
//             </div>
//         )
//     }}
// }