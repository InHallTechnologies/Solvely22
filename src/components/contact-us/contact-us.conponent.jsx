import React from "react";

import "./contact-us.styles.scss";
import { database } from "../../firebaseHandlers/firebaseHanlers";
import { Snackbar } from '@material-ui/core'

class ContactUs extends React.Component {
  constructor(props) {
    super();
    const key = database.ref("ALL_REQUESTS").push().key;
    this.state = {
      key: key,
      phoneNumber: "",
      message: "",
      alertMessage:'',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await database.ref("ALL_REQUESTS").child(this.state.key).set(this.state);
    // alert("Thank you for your request. Our Team will contact you soon");
    const key = database.ref("ALL_REQUESTS").push().key;
    this.setState({
      key: key,
      phoneNumber: "",
      message: "",
      alertMessage:'Thank you. We have received your message and we will reach out to you within 48 Hrs'
    });

    setTimeout(() => {
      this.setState({
        key: key,
        phoneNumber: "",
        message: "",
        alertMessage:""
      });
    },3000)
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });

    console.log(value, name);
  };

  render() {
    return (
      <div className="contact-us" ref={this.props.theref}>
        <h2 className="section-title">
          <span className="brown">Contact</span>{" "}
          <span className="blue">Us</span>
        </h2>
        <div className="section-content">
          <div className="text-and-social">
            <span className="office-address">Solvely.22 Pvt. Ltd.</span>
            <span className="office-address">
              E802, Goyalco Orchid Lakeview Apartments,
            </span>
            <span className="office-address">
              Bellandur, Bengaluru - 560103
            </span>

            <div className="social-links">
              <a href="https://www.linkedin.com/company/solvely22" className="social-icon fa fa-linkedin"></a>
              <a
                href="mailto:info@solvely22.com"
                className="social-icon fa fa-envelope"
                aria-hidden="true"
              ></a>
            </div>
          </div>

          <form className="contact-us-form" onSubmit={this.handleSubmit}>
            <input
              className="input"
              name="phoneNumber"
              placeholder="Enter your phone number..."
              required
              type="tel"
              onChange={this.handleChange}
              value={this.state.phoneNumber}
            />
            <textarea
              className="input message"
              name="message"
              placeholder="Enter your message..."
              type="text"
              onChange={this.handleChange}
              value={this.state.message}
            />
            <input className="submt-button" type="submit" value="SUBMIT" />
          </form>
        </div>

        <footer className="footer-notes">
          &copy; Copyright 2021 Solvely.22 Private Limited. All rights
          reserved.
        </footer>
        <Snackbar open={this.state.alertMessage?true:false} message={this.state.alertMessage} />
      </div>
    );
  }
}

export default ContactUs;
