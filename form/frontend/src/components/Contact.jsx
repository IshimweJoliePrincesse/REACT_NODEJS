import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Exam() {
  const [Title, setTitle] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Position, setPosition] = useState("");
  const [Company, setCompany] = useState("");
  const [BusinessArena, setBusinessArena] = useState("");
  const [Employees, setEmployees] = useState("");

  const [StreetNr, setStreetNr] = useState("");
  const [AdditionalInformation, setAdditionalInformation] = useState("");
  const [ZipCode, setZipCode] = useState("");
  const [Place, setPlace] = useState("");
  const [Country, setCountry] = useState("");
  const [Code, setCode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [YourEmail, setYourEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/contact", {
        Title,
        FirstName,
        LastName,
        Position,
        Company,
        BusinessArena,
        Employees,
        StreetNr,
        AdditionalInformation,
        ZipCode,
        Place,
        Country,
        Code,
        PhoneNumber,
        YourEmail,
      });
      alert(response.data.message);
      console.log(response);
    } catch (error) {
      alert("Register failed");
      console.error("There was an error!", error);
    }
  };

  return (
    <>
      <link rel="stylesheet" type="text/css" href="css/montserrat-font.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="fonts/material-design-iconic-font/css/material-design-iconic-font.min.css"
      />
      <link rel="stylesheet" href="style.css" />
      <meta name="robots" content="noindex, follow" />
      <body className="form-v10">
        <div className="page-content">
          <div className="form-v10-content">
            <form className="form-detail" onSubmit={handleSubmit} id="myform">
              <div className="form-left">
                <h2>General Information</h2>
                <div className="form-row">
                  <select
                    name="title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                  >
                    <option className="option" value="title">
                      Title
                    </option>
                    <option className="option" value="businessman">
                      Businessman
                    </option>
                    <option className="option" value="reporter">
                      Reporter
                    </option>
                    <option className="option" value="secretary">
                      Secretary
                    </option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="input-text"
                      placeholder="First Name"
                      required
                      value={FirstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="input-text"
                      placeholder="Last Name"
                      required
                      value={LastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <select
                    name="position"
                    value={Position}
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <option value="position">Position</option>
                    <option value="director">Director</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="company"
                    className="company"
                    id="company"
                    placeholder="Company"
                    required
                    value={Company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="form-row form-row-3">
                    <input
                      type="text"
                      name="business"
                      className="business"
                      id="business"
                      placeholder="Business Arena"
                      required
                      value={BusinessArena}
                      onChange={(e) => setBusinessArena(e.target.value)}
                    />
                  </div>
                  <div className="form-row form-row-4">
                    <select
                      name="employees"
                      value={Employees}
                      onChange={(e) => setEmployees(e.target.value)}
                    >
                      <option value="employees">Employees</option>
                      <option value="trainee">Trainee</option>
                      <option value="colleague">Colleague</option>
                      <option value="associate">Associate</option>
                    </select>
                    <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-right">
                <h2>Contact Details</h2>
                <div className="form-row">
                  <input
                    type="text"
                    name="street"
                    className="street"
                    id="street"
                    placeholder="Street + Nr"
                    required
                    value={StreetNr}
                    onChange={(e) => setStreetNr(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="additional"
                    className="additional"
                    id="additional"
                    placeholder="Additional Information"
                    required
                    value={AdditionalInformation}
                    onChange={(e) => setAdditionalInformation(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="zip"
                      className="zip"
                      id="zip"
                      placeholder="Zip Code"
                      required
                      value={ZipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <select
                      name="place"
                      value={Place}
                      onChange={(e) => setPlace(e.target.value)}
                    >
                      <option value="place">Place</option>
                      <option value="Street">Street</option>
                      <option value="District">District</option>
                      <option value="City">City</option>
                    </select>
                    <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>
                <div className="form-row">
                  <select
                    name="country"
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="country">Country</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="India">India</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="code"
                      className="code"
                      id="code"
                      placeholder="Code +"
                      required
                      value={Code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      name="phone"
                      className="phone"
                      id="phone"
                      placeholder="Phone Number"
                      required
                      value={PhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="your_email"
                    id="your_email"
                    className="input-text"
                    required
                    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                    placeholder="Your Email"
                    value={YourEmail}
                    onChange={(e) => setYourEmail(e.target.value)}
                  />
                </div>
                <div className="form-checkbox">
                  <label className="container">
                    <p>
                      I do accept the{" "}
                      <a href="#" className="text">
                        Terms and Conditions
                      </a>{" "}
                      of your site.
                    </p>
                    <input type="checkbox" name="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="form-row-last">
                  <input
                    type="submit"
                    name="register"
                    className="register"
                    value="Register Badge"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
        ></script>
      </body>
    </>
  );
}

export default Exam;
