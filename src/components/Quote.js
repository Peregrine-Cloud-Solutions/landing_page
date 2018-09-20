import React from 'react';

const Quote = () => {
  const postQuote=(event)=>{
    event.preventDefault();
    fetch('https://n7k1ws4i2h.execute-api.us-east-1.amazonaws.com/prod/quote', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
    body: JSON.stringify({
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    phoneNumber: event.target.phoneNumber.value,
    service: event.target.service.value,
    start: event.target.start.value,
    company: event.target.company.value,
    detail: event.target.detail.value
  }),
});
  }
  return (
    <section id="quote">
      <div className="container">
        <div className="row">
        <form onSubmit={postQuote} id="quote-form">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="firstName" type="text" className="validate" name="firstName" required="" aria-required="true"/>
                <label for="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="lastName" type="text" className="validate" name="lastName" required="" aria-required="true"/>
                <label for="lastName">Last Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="phoneNumber" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="validate" name="phoneNumber"/>
                <label for="phoneNumber" className="active">Telephone</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" name="email"/>
                <label for="email">Email</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">work</i>
                <input id="service" type="text" className="validate" name="service"/>
                <label for="service">Type of Service</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <input id="start" type="date" className="validate" name="start"/>
                <label for="start" className="active">Start Date</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">business_center</i>
                <input id="company" type="text" className="validate" name="company"/>
                <label for="company">Company Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">description</i>
                <input id="detail" type="text" className="validate" name="detail"/>
                <label for="detail">Detailed Description</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" >Get a Quote.<i className="material-icons right">send</i></button>
            </form>
        </div>
      </div> 
    </section>
  );
};

export default Quote;

