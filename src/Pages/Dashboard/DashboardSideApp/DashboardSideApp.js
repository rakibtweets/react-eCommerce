import React, { useState } from 'react';
import './DashboardSideApp.css';
import 'react-bootstrap-drawer/lib/style.css';
import { Collapse, Nav } from 'react-bootstrap';
import { Drawer } from 'react-bootstrap-drawer';
import { Link } from 'react-router-dom';

const DashboardSideApp = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  return (
    <Drawer>
      <div className=" d-flex justify-content-between align-content-center">
        <h5 className="pt-4 text-info fw-bold">Dashboard</h5>
        <Drawer.Toggle onClick={handleToggle} />
      </div>

      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC className="dashboard-drawer fw-bold">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Drawer.Nav>
              <Nav className=" user__dashboard d-flex flex-column justify-content-center fw-bold">
                <Nav.Link as={Link} to={`/dashboard/addProducts`}>
                  Add Products
                </Nav.Link>
                <Nav.Link as={Link} to={`/dashboard`}>
                  Manage All Products
                </Nav.Link>
                <Nav.Link as={Link} to={`/dashboard/makeAdmin`}>
                  Make Admin
                </Nav.Link>
                <Nav.Link as={Link} to={`/payment`}>
                  Payment
                </Nav.Link>
              </Nav>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};

export default DashboardSideApp;
