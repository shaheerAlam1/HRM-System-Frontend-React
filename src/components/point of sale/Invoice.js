import React, { Component } from 'react';
// import "./Invoice.scss";
class Invoice extends Component{
    constructor(props){
        super(props);
      
    }
    render(){
        return <>
            
  <div id="invoice-POS">
    
    <center id="top">
      <div className="logo"></div>
      <div className="info"> 
        <h2>Shaheer POS</h2>
      </div>
    </center>
    
    <div id="mid">
      <div className="info">
        <h2>Contact Info</h2>
        <p> 
            Address : street city, state 0000<br></br>
            Email   : JohnDoe@gmail.com<br></br>
            Phone   : 555-555-5555<br></br>
        </p>
      </div>
    </div>
    
    <div id="bot">

					<div id="table">
						<table>
							<tr className="tabletitle">
								<td className="item"><h2>Item</h2></td>
								<td className="Hours"><h2>Qty</h2></td>
								<td className="Rate"><h2>Sub Total</h2></td>
							</tr>
                            {this.props.list.map((val,key)=>{
                                return <tr className="service">
								<td className="tableitem"><p className="itemtext">{val.name}</p></td>
								<td className="tableitem"><p className="itemtext">1</p></td>
								<td className="tableitem"><p className="itemtext">{val.price}</p></td>
							</tr>
                            })}
                            <tr className="tabletitle">
								<td></td>
								<td className="Rate"><h2>SubTotal</h2></td>
								<td className="payment"><h2>{this.props.subtotal}</h2></td>
							</tr>
							<tr className="tabletitle">
								<td></td>
								<td className="Rate"><h2>tax</h2></td>
								<td className="payment"><h2>{this.props.tax}</h2></td>
							</tr>

							<tr className="tabletitle">
								<td></td>
								<td className="Rate"><h2>Total</h2></td>
								<td className="payment"><h2>{this.props.total}</h2></td>
							</tr>

						</table>
					</div>

					<div id="legalcopy">
						<p className="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. 
						</p>
					</div>

				</div>
  </div>

        </>
    }
}
export default Invoice;