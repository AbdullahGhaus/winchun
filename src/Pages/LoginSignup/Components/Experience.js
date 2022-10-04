import React from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import {Link} from "react-router-dom"
import "../LoginSignup.css";
import addexp from "../../../Assets/img/addexp.png"
function Experience() {

  return (
<div className="Signup">
      <SignupHeader />
      <div className="Signup_cont">
        <CompHead
          h1="if you have"
          span="relevant"
          h2="work"
          span2="experience"
          h3="add it here"
          desc="Freelancers who add their experience are twice as likely to win work. But if you're just starting out,
          you can still create a great profile. Just head on to the next page. "
        />
        <div className="Experience_inner">
        <label for="files" className="addexperiencebtn">
            Add Experience 
            <img src={addexp} />
        </label>
    <input id="files" style={{display:"none"}} type="file" />
    <div className="files_checkbox_cont">
    <label for="files_checkbox">Nothing to add? Check the box and keep going</label>
    <input type={'checkbox'} id="files_checkbox"/>
    </div>
        </div>

        <div className="exp_third_div">
          <Link to="/liketowork"><p>Back</p></Link>
          <Link to="/question2">
            <button className="btn_image" style={{ display: "inline" }}>
              Next, Add Your Experience
            </button>
            
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Experience