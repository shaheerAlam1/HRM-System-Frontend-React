import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return (
            <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light" >
              {/* Left navbar links */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <NavLink className="nav-link" data-widget="pushmenu" to="/"><i className="fas fa-bars" /></NavLink> */}
                  <i className="fas fa-bars " data-widget="pushmenu" style={{cursor: "pointer"}}/>
                </li>
                {/* <li className="nav-item d-none d-sm-inline-block">
                  <NavLink to="index3.html" className="nav-link">Home</NavLink>
                </li> */}
              </ul>
              {/* Right navbar links */}
              <ul className="navbar-nav ml-auto">
                
                <li className="nav-item">
                {/* data-widget="control-sidebar" data-slide="true" */}
                  <NavLink className="nav-link"  to="/profile"><i className="fas fa-user" /></NavLink>
                </li>
              </ul>
            </nav>
            {/* /.navbar */}
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-light-primary elevation-4" >
              {/* Brand Logo */}
              <NavLink to="/" className="brand-link">
                {/* <img src="dist/img/itqa.png" alt="ITQA Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
                <span className="brand-text font-weight-light">E-HRMS</span>
              </NavLink>
              {/* Sidebar */}
              <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="info">
                    <NavLink to="/" className="d-block">Admin</NavLink>
                  </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library */}
                    <li className="nav-item has-treeview menu-open">
                      <NavLink to="/" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                          HRMS
                          <i className="right fas fa-angle-left" />
                        </p>
                      </NavLink>
                      <ul className="nav nav-treeview">
                      <li className="nav-item">
                              <NavLink to="/pos" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Point of sale</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/humanresource" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>HumanResource</p>
                              </NavLink>
                      </li>
                      
                      <li className="nav-item">
                              <NavLink to="/expenses" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Expenses</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/income" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Income</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/reports" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Reports</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/frontoffice" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Front Office</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/attendance" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Attendance</p>
                              </NavLink>
                      </li>
                     
                      <li className="nav-item">
                              <NavLink to="/transport" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Transport</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/building" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Building</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/communication" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Communication</p>
                              </NavLink>
                      </li>
                      <li className="nav-item">
                              <NavLink to="/downloadcenter" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Download Center</p>
                              </NavLink>
                      </li>

    

                      </ul>
                    </li>
                    <li className="nav-item has-treeview">
                          <NavLink to="ITGOVDASH.aspx" className="nav-link">
                            <i className="nav-icon fas fa-user" />
                            <p>
                              User Managment
                              <i className="fas fa-angle-left right" />
                              
                            </p>
                          </NavLink>
                        </li>
                    <li className="nav-item has-treeview">
                          <NavLink to="ITGOVDASH.aspx" className="nav-link">
                            <i className="nav-icon fas fa-database" />
                            <p>
                              Database Managment
                              <i className="fas fa-angle-left right" />
                              
                            </p>
                          </NavLink>
                          
                        </li>
                        
                  </ul>
                </nav>
                {/* /.sidebar-menu */}
              </div>
              {/* /.sidebar */}
            </aside>
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
              {/* Control sidebar content goes here */}
            </aside>
          </div>
          
        )
    }
}