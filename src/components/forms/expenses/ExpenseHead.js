import React, { Component } from 'react';
import ConfigForms from "../../forms/frontOffice/SetupAndConfigurations/ConfigForms";
class ExpenseHead extends Component {
    handler=()=>{
        console.log("add income head");
    }
    render() {
        return (
            <>
               <ConfigForms 
               color="#FFC107"
               name="Expense"
               header="Add Expense Head"
               handler={this.handler} />
                
            </>
        )
    }
}
export default ExpenseHead;
