import React,{Component} from 'react';
import logo from '../logo.svg';
import './css/login.css';

let Login =()=>{
    return(
        <>
                
            <div className="form">
                <div className="form-design">
                    <h1 id="design-title">C#</h1>
                    <h3>UI Academy</h3>
                    <br />
                    <h4>We Create . We Design</h4>
                    <h4 id="end-block">We Develop</h4>
                </div>
                <div className="form-body">
                    <h3>Sign Up</h3>
                    <h4>User Name</h4>
                    <input type="text" placeholder="Enter username..."></input>
                    <h4>Password</h4>
                    <input type="password" placeholder="Enter password..."></input>
                    <h4>Re-Enter Password</h4>
                    <input type="password" placeholder="Enter password..."></input>
                    <h4>Email</h4>
                    <input type="email" placeholder="Enter email..."></input>
                    <div id="tnc">
                    <input type='checkbox'></input>&ensp;&ensp;&ensp;
                    <label>I Agree Terms and Conditions</label>
                    </div>                    
                    <div><button>Sign Up</button></div>
                    
                </div>
            </div>
        
        </>)
    }
    
export default Login;