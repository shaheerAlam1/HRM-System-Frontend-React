import React, { Component } from 'react';
import Legends from "../components/Legends";
import Graph from "../components/Graph";
class Home extends Component{
    render(){
        return(
            <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
            <Legends/>
            </div>
            </section>
            <section ClassName="content">
            <div className="container-fluid">
            <Graph/>
            </div>
            </section>
            </div>
        )
    }
}
export default Home;