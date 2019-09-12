import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  render() {
    return (
      <div className="form-container">
          <h1 class="form-header">Suggestion Form</h1>
          <p class="message">
            Is all of the information accurate? If you think something is wrong
            or would like me to include a specific issue, please let me know!
          </p>
          <form class="contact-form" action="https://formspree.io/jamie8@vt.edu" method="POST">
              <input type="text" name="name" placeholder="First Name"></input>
              <input type="text" name="name" placeholder="Last Name"></input>
              <input type="email" name="_replyto" placeholder="Email"></input>
              <textarea cols="60" rows="5" name="message" placeholder="Enter message here"></textarea>
              <br></br>
              <input class="submit-form" type="submit" value="Submit"></input>
          </form>
      </div>
    );
  }
}

export default Form;
