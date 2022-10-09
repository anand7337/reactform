import React from "react";
import ReactFormValidation from "react-form-input-validation";
import "./Form.css";

class ValidationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        customer_name: "",
        email_address: "",
        phone_number: "",
        pickup_time: "",
        taxi: "",
        pickup_place: "",
        pickup_place1: "",
        comments: "",
        dropoff_place: "",
        extras: []
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      customer_name: "required|username_available",
      email_address: "required|email",
      phone_number: "required|numeric|digits_between:10,12",
      country: "required",
      state: "required",
      comments: "required|max:20",
      city: "required",
     
    });

    this.form.onformsubmit = (fields) => {
      console.log(fields);
    }

    ReactFormValidation.registerAsync('username_available', function(username, attribute, req, passes) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, 'Username has already been taken.'); 
        else
          passes();
      }, 1000);
    });
   
  }

  render() {
    return (
        <div className='main' style={{maxWidth: "600px", margin: "0px auto"}}>
         <div className="SignUp-form">
          <form
            className="myForm"
            noValidate
            autoComplete="off"
            onSubmit={this.form.handleSubmit}
          >
             <h2>Registration Form</h2>
           
           
              <label>
                
                <input
                  type="text"
                  placeholder="Name..."
                  name="customer_name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.customer_name}
                  data-attribute-name="Customer Name"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.customer_name
                  ? this.state.errors.customer_name
                  : ""}
              </label>
         

           
             
               
                <input
                  type="tel"
                  name="phone_number"
                placeholder='Mobile Number...'
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
            
              <label className="error">
                {this.state.errors.phone_number
                  ? this.state.errors.phone_number
                  : ""}
              </label>
           

           
            
                <input
                  type="email"
                  name="email_address"
                  placeholder='Email...'
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email_address}
                />
             
              <label className="error">
                {this.state.errors.email_address
                  ? this.state.errors.email_address
                  : ""}
              </label>
           


           

          
             
                <select
                  id="country"
                  name="country"
                  placeholder='Select'
                  value={this.state.fields.country}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                >
                       
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="Thiland">Thiland</option>
                  <option value="Italy">Italy</option>
                  <option value="America">America</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Spain">Spain</option>
                </select>
             
              <label className="error">
                {this.state.errors.country
                  ? this.state.errors.country
                  : ""}
              </label>
           

              <select
                  id="state"
                  name="state"
                  placeholder='State'
                  value={this.state.fields.state}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                >
                       
                  <option value="">Select State</option>
                  <option value="India">Tamilnadu</option>
                  <option value="Thiland">Kerala</option>
                  <option value="Italy">Andhra Pradesh</option>
                  <option value="America">Karnataka</option>
                 
                </select>
             
              <label className="error">
                {this.state.errors.state
                  ? this.state.errors.state
                  : ""}
              </label>
            


           
            
                <input
                  type="text"
                  name="city"
                  placeholder='City'
                  value={this.state.fields.city}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                  list="destinations"
                />
           

              <datalist id="destinations">
                <option value="Chennai" />
                <option value="Coimbatore" />
                <option value="Madurai" />
                <option value="Kanchipuram" />
                <option value="Thiruvannamalai" />
               
              </datalist>
              <label className="error">
                {this.state.errors.city
                  ? this.state.errors.city
                  : ""}
              </label>
         


             

              
         

       
             
                <textarea
                  name="comments"
                  maxLength="20"
                  id='textarea'
                  placeholder='Message'
                  value={this.state.fields.comments}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                ></textarea>
             
              <label className="error">
                {this.state.errors.comments
                  ? this.state.errors.comments
                  : ""}
              </label>


              
             
           

           
              <input type="submit" value="Submit" />
         
          </form>
        </div>
       
        </div>
    );
  }
}

export default ValidationForm;
