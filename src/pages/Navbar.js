import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img
          src="https://itviec.com/assets/logo-itviec-cbdd5aaa838496d457cf9f8f816600d9d6baf4dd353ad02ab61cce93cbbc697c.png"
          alt="logo"
        />
      </div>
      <div>
        <Form className="form-search">
          <Form.Row>
            <Col>
              <Form.Control
                className="navform"
                id="search-input"
                type="text"
                placeholder="search"
              />
            </Col>
          </Form.Row>
        </Form>
        <Button variant="danger">Search</Button>
      </div>
    </nav>
  );
};

export default Navbar;
