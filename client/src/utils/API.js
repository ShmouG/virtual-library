import axios from "axios";

export default {
  // Gets all contact
  getContacts: function () {
    return axios.get("/api/contact");
  },
  // Gets the book with the given id
  getContact: function (id) {
    return axios.get("/api/contact/" + id);
  },
  // Deletes the book with the given id
  deleteContact: function (id) {
    return axios.delete("/api/contact/" + id);
  },
  // Saves a book to the database
  saveContact: function (contactData) {
    return axios.post("/api/contact", contactData);
  }
};