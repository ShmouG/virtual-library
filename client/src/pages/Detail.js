import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import './style.css';

class Detail extends Component {
  state = {
    contact: {}
  };
  // When this component mounts, grab the address with the _id of this.props.match.params.id
  // e.g. localhost:3000/address/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getContact(this.props.match.params.id)
      .then(res => this.setState({ contact: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.contact.First} {this.state.contact.Last}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Contact Details</h1>
              <p>
              <strong>Phone:</strong> {this.state.contact.Phone }
              <br/>
              <strong>Email:</strong> {this.state.contact.Email }
              <br/>
              <strong>Address:</strong> {this.state.contact.Address}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Contacts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
