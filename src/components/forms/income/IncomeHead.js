import React, { Component } from 'react';
import ConfigForms from "../../forms/frontOffice/SetupAndConfigurations/ConfigForms";
class IncomeHead extends Component {
    handler=()=>{
        console.log("add income head");
    }
    render() {
        return (
            <>
               <ConfigForms 
               color="#DC3545"
               name="Income"
               header="Add Income Head"
               handler={this.handler} />
                
            </>
        )
    }
}
export default IncomeHead;
