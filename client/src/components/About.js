import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

const About = () => {

    const history = useHistory();

    const callAboutPage = async () => {
        try{
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
            
        } catch (err){
            console.log(err);
            history.push("/login")
        }
    }

    useEffect(() => {
        callAboutPage();
    },[])

    return (
        <>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                 <img alt="photo" />
                            </div>
                            
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Pratush Bhandari</h5>
                                <h6>Full-Stack Developer</h6>
                                <p className="profile-rating pt-3 mb-5">RANKINGS: <span> 1/10 </span></p>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>

                    </div>

                    <div className="row">
                        {/*left side url*/}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="#" target="_blank">Youtube</a><br />
                                <a href="#" target="_blank">Twitter</a><br />
                                <a href="#" target="_blank">Linkedin</a><br />
                                <a href="#" target="_blank">Github</a><br />
                            
                            </div>
                        </div>

                        {/*right side url*/}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>

                                        <div className="col-md-6">
                                            <p>785467655</p>
                                        </div>

                                        
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>

                                        <div className="col-md-6">
                                            <p>Pratush Bhandari</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>

                                        <div className="col-md-6">
                                            <p>pratush.bh@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>

                                        <div className="col-md-6">
                                            <p>9867645213</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>

                                        <div className="col-md-6">
                                            <p>Full Stack Developer</p>
                                        </div>

                                    
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>

                        </div>
                    
                    </div>

                
                </form>

            </div>
        </>
    )
}

export default About;