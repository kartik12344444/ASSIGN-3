import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  submitForm = () => {
    let employeeName = document.getElementById("emp-name");
    let employeeDepartment = document.getElementById("emp-department");
    let employeeRating = document.getElementById("emp-rating");
    this.props.submitHandler(
      employeeName.value,
      employeeDepartment.value,
      employeeRating.value
    );
    employeeName.value = "";
    employeeDepartment.value = "";
    employeeRating.value = "";
  };
  render() {
    return (
      <div className="form-container">
        <form
          className="feedback-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.submitForm();
          }}
        >
          <div className='mystyle'>
            <label htmlFor="emp-name">Name :</label>
            <input className="input1" type="text" id="emp-name" required></input>
          </div>
          <div className='mystyle1'>
            <label htmlFor="emp-department">Department :</label>
            <input className="input1" type="text" id="emp-department" required></input>
          </div>
          <div className='mystyle'>
            <label htmlFor="emp-rating">Rating :</label>
            <input className="input1" type="number" id="emp-rating" required></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div></div>
        </form>
      </div>
    );
  }
}

export default Form;