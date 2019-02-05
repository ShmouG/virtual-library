import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import './style.css';


class Contact extends Component {
  state = {
    contacts: [],
    First: "",
    Last: "",
    Phone: "",
    Email: "",
    Address: ""
  };

  componentDidMount() {
    this.loadContact();
  }

  loadContact = () => {
    API.getContacts()
      .then(res =>
        this.setState({ contacts: res.data, First: "", Last: "", Phone: "", Email: "",
        Address: "" })
      )
      .catch(err => console.log(err));
  };

  deleteContact = id => {
    API.deleteContact(id)
      .then(res => this.loadContact())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.First && this.state.Last) {
      API.saveContact({
        First: this.state.First,
        Last: this.state.Last,
        Phone: this.state.Phone,
        Email: this.state.Email,
        Address: this.state.Address
      })
        .then(res => this.loadContact())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add a contact to the contact list</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.First}
                onChange={this.handleInputChange}
                name="First"
                placeholder="First name (required)"
              />
              <Input
                value={this.state.Last}
                onChange={this.handleInputChange}
                name="Last"
                placeholder="Last name (required)"
              />
              <Input
                value={this.state.Phone}
                onChange={this.handleInputChange}
                name="Phone"
                placeholder="Phone (Optional)"
              />
              <Input
                value={this.state.Email}
                onChange={this.handleInputChange}
                name="Email"
                placeholder="Email (Optional)"
              />
              <Input
                value={this.state.Address}
                onChange={this.handleInputChange}
                name="Address"
                placeholder="Address (Optional)"
              />
              <FormBtn
                disabled={!(this.state.First && this.state.Last)}
                onClick={this.handleFormSubmit}
              >
                Submit Contact
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1> Contact List </h1>
            </Jumbotron>
            {this.state.contacts.length ? (
              <List>
                {this.state.contacts.map(contacts => (
                  <ListItem key={contacts._id}>
                    <Link to={"/contact/" + contacts._id}>
                      <strong>
                        {contacts.First} {contacts.Last}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteContact(contacts._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
