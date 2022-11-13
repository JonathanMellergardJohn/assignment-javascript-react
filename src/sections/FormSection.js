import React, { useState } from 'react'

const FormSection = () => {

  const [contactForm, setContactForm] = useState({ name: '', email: '', comment: ''});
  const [formErrors, setFormErrors] = useState({});
  const [canSubmit, setCanSubmit] = useState(false)
  const validate = (values) => {
    const errors = {};
    const regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!values.name) {
      errors.name = "You must enter a name"
    }

    if(!values.email) {
      errors.email = "You must enter an email adress"
    }else if(!regex_email.test(values.email)) {
      errors.email = "You must enter a valid email adress (e.g. name@domain.com)"
    }

    if(!values.comment) {
      errors.comment = "You must enter a comment"
    } 

    if(Object.keys(errors).length === 0) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }

    return errors;
  }
  const handleChange = (e) => {
    const {id, value} = e.target
    setContactForm({...contactForm, [id]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(contactForm))

  }

  return (
    <section className="form-section">
      {
        canSubmit ? 
          (<div>!!!Thank you for your comment!!!</div>)
        :
        (<form onSubmit={handleSubmit} className="form" noValidate>
            <h2 className="form__header">Come in Contact with Us</h2>
            <div className="form__container">
                <input id="name" className="form__name-input" type="name" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                <div className="form__error-msg form__error-msg--name">{formErrors.name}</div>
                <input id="email" type="email" className="form__email-input" placeholder="Your Mail" value={contactForm.email} onChange={handleChange}/>
                <div className="form__error-msg form__error-msg--email">{formErrors.email} </div>
            </div>
            <textarea id="comment" className="form__text-input" name="" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
            <div className="form__error-msg form__error-msg--text">{formErrors.comment} </div>
            <button className="form__btn btn btn--theme"  type="submit">Post Comment</button>
        </form>)
      }
    </section>
  )
}

export default FormSection