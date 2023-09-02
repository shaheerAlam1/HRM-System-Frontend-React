import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReportData from "./services/ReportData";

//bg color #545CD8
export default class Reports extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <Row>
            {ReportData.map((element, index) => {
              return <Col key={index} md="3" xs="12" sm="4"><div >
                {/* <div className="col-12 col-sm-6 col-md-3"> */}
                <div style={{ cursor: "pointer" }} className="info-box" onClick={() => {
                  console.log("hello from card")
                }}>
                  <span className="info-box-icon  elevation-1" style={{ backgroundColor: "#545CD8", color: "white" }}><i className={element.icon}></i></span>
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