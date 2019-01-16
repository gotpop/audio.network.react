import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Step1 extends Component {

    state = {
      title: "Step 1",
      navigateToNextPage: false,
      firstName: "",
      lastName: "",
      email: ""
    };

    handleInputChange = (e) => {
      this.setState({ 
        [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.setNameInApp(this.state);
      this.setState({ 
        navigateToNextPage: true
      });
    }
    
    render() {
      // Redirect to next page
      if (this.state.navigateToNextPage === true) {
         return <Redirect push to="./step2/" />
      }

      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.title }</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Details</legend>
              
              <div className="field">
                <label className="field__label">This is a first name input</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="John"
                    required="required"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <svg className="field__svg"></svg>
                </div>
                <small className="field__validation">This is a validation message for first name</small>
              </div>

              <div className="field">
                <label className="field__label">This is a last name input</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="Smith"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <svg className="field__svg"></svg>
                </div>
                <small className="field__validation">This is a validation message for last name</small>
              </div>

              <div className="field">
                <label className="field__label">This is an email input</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="email@email.com"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <svg className="field__svg"></svg>
                </div>
                <small className="field__validation">This is an email validation message</small>
              </div>

              <div className="action-row">
                <button
                  className="btn btn--secondary"
                  type="reset">Cancel</button>
                <button
                  className="btn btn--primary"
                  type="submit">Continue</button>
              </div>
            </fieldset>
          </form>
        </main>
      );
    }
  }

  export default Step1;
