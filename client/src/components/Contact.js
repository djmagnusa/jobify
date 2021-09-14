import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            
                            {/*phone number*/}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />

                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>

                                    <div className="contact_info_title">
                                        +91 2318912
                                    </div>
                                </div>
                            </div>

                             {/*email number*/}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />

                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>

                                    <div className="contact_info_title">
                                        pratush@bh.com
                                    </div>
                                </div>
                            </div>

                             {/*phone number*/}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />

                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>

                                    <div className="contact_info_title">
                                        Delhi, India
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
        
            </div>

            {/* contact us form */}

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">

                                <div className="contact_form_title">
                                    Get in Touch
                                </div>

                                <form id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                          <input type="text" id="contact_form_name" className="contact_form_name input_field"
                                          placeholder="Your name" required="true" />

                                          <input type="email" id="contact_form_email" className="contact_form_email input_field"
                                          placeholder="Your email" required="true" />

                                          <input type="number" id="contact_form_phone" className="contact_form_phone input_field"
                                          placeholder="Your phone number" required="true" />
                                    </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_message" placeholder="Your message" cols="30" rows="10"></textarea>
                                    </div>

                                    <div className="contact_form_button">
                                        <button type="submit" className="button contact_submit_button">Send message</button>
                                    
                                    </div>

                                </form>
                            
                            </div>
                        
                        </div>

                    </div>

                
                </div>
            
            </div>
        
        </>
    )
}

export default Contact;