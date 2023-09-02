import React, { Component } from 'react';
export default class Legends extends Component {
    render(){
        return (
            <>
            
      {/* Info boxes */}
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">     
            <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
            <div className="info-box-content">
              <span className="info-box-text">  abc </span>
              <span className="info-box-number">
                999
              </span>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
            <div className="info-box-content">
              <span className="info-box-text">abc</span>
              <span className="info-box-number">
                123
              </span></div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        {/* fix for small devices only */}
        <div className="clearfix hidden-md-up" />
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-danger"><i className="far fa-star" /></span>
            <div className="info-box-content">
              <span className="info-box-text">abc</span>
              <span className="info-box-number" >
              0
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
            <div className="info-box-content">
              <span className="info-box-text">abc</span>
              <span className="info-box-number" >
              4
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
   

            </>
        )
    }
}

