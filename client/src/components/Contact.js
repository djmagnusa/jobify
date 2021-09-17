import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [userData, setUserData] = useState({name: "", email: "", phone: "", message: ""});

    const userContact = async () => {
        try{
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "applicatin/json"
                },
            })

            const data = await res.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone  });

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userContact();
    }, []);

    //storing data in state

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]: value})


    }

    //sending data to backend

    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = userData;
    
        const res = await fetch('/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        })

        const data = await res.json();

        if(!data) {
            console.log("message not sent");
        } else {
            alert("Message sent");
            setUserData({ ...userData, message: ""});
        }
    }


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

                                <form method="POST" id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                          <input type="text" id="contact_form_name" className="contact_form_name input_field"
                                          onChange={handleInputs}
                                         
                                          name="name"
                                          value={userData.name}
                                          placeholder="Your name" required="true" />

                                          <input type="email" id="contact_form_email" className="contact_form_email input_field"
                                          onChange={handleInputs}
                                          name="email"
                                          value={userData.email}
                                          placeholder="Your email" required="true" />

                                          <input type="number" id="contact_form_phone" className="contact_form_phone input_field"
                                          onChange={handleInputs}
                                          name="phone"
                                          value={userData.phone}
                                          placeholder="Your phone number" required="true" />
                                    </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_message"
                                        onChange={handleInputs}
                                        name="message"
                                        value={userData.message}
                                        placeholder="Your message" cols="30" rows="10"></textarea>
                                    </div>

                                    <div className="contact_form_button">
                                        <button type="submit" className="button contact_submit_button"
                                        onClick={contactForm}>Send message</button>
                                    
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