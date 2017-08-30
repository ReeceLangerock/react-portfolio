import React from 'react'
import './../../style/contact.css'

export class Contact extends React.Component {
  render () {
    return (
      <section id='contact'>
        <div className='contact__container'>
          <div className='contact__form-container'>
            <span className='contact__title'>Contact Me</span>
            <form action='https://formspree.io/reece@reecelangerock.com' method='POST'>
              <input type='hidden' name='my_email' value='reece@reecelangerock.com' />

              <input type='text' name='name' placeholder='name' required />
              <input type='text' name='email' placeholder='email' required />
              <textarea name='message' rows='4' placeholder='message' required />
              <input type='submit' value='Send' />
            </form>
          </div>
        </div>
      </section>
    )
  }
}
export default Contact
