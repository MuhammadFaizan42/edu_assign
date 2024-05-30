import React from 'react'

const ContactUs = () => {
    return (
        
    <div className="outer_contact">
        <div className="page_width">
            <div className="inner_contact">
                        <h2>CONTACT US</h2>
                        <div className="contact_cards">
                            
                              <div className="contact_fields">
                              <p>Leave us a message</p>
                                <input type="text" className='name_input' placeholder='Your name' label='Name' />
                                <input type="text" className='email_input' placeholder='Email Address' />
                                <textarea type="text" className='text_input' placeholder='Your message' />
                              </div>
                        </div>
             </div>
        </div>
             
    </div>
       
    )
}

export default ContactUs