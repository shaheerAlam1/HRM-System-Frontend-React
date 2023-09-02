import ConfigForms from '../frontOffice/SetupAndConfigurations/ConfigForms';
import React, { Component } from 'react';
class RoomType extends Component{
    handler=()=>{
        console.log("room type handler")
    }
    render(){
        return(
            <>
            <ConfigForms
            header="Add Room type"
            name="Room"
            handler={this.handler}
            color="#545CD8"
            variant="primary"
            />
            </>
        )
    }
}
export default RoomType;