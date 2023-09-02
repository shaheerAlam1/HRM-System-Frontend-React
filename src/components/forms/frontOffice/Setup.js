import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ConfigForms from './SetupAndConfigurations/ConfigForms';
class Setup extends Component {
    
    purposeHandler=()=>{
        console.log(" purposeHandler")
    }
    complainHandler=()=>{
        console.log("complainHandler")
    }
    sourceHandler=()=>{
        console.log("sourceHandler")
    }
    refrenceHandler=()=>{
        console.log("refrenceHandler")
    }
    render() {
        return (
            <>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="profile" title="Add Purpose">
                        <ConfigForms header="Add Purpose"
                         name="Purpose"
                         handler={this.purposeHandler}
                         color="#007BFF"
                         variant="primary"/>
                    </Tab>
                    <Tab eventKey="addComplain" title="Add Complain">
                        <ConfigForms header="Add Complain" 
                        name="Complain Type"
                        handler={this.complainHandler}
                        color="#007BFF"
                        variant="primary"/>
                    </Tab>
                    <Tab eventKey="addSource" title="Add Source" >
                        <ConfigForms header="Add Source" 
                        name="Source"
                        handler={this.sourceHandler}
                        color="#007BFF"
                        variant="primary"/>
                    </Tab>
                    <Tab eventKey="addRefrence" title="Add Refrence" >
                        <ConfigForms header="Add Refrence"
                         name="Refrence"
                         handler={this.refrenceHandler}
                         color="#007BFF"
                         variant="primary"/>
                    </Tab>
                </Tabs>

            </>
        )
    }
}
export default Setup;
