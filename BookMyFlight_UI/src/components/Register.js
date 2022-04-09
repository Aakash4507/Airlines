import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

import Footer from './Footer';
import Header from './Header';
import planeBG from "../assets/images/pl.jpg";
import Swal from 'sweetalert2';

export default class Register extends Component {

	constructor(props){
		super(props);
		this.service=new UserService();
		this.state={
			userId:0,
			fname:"",
			email:"",
			phone:0,
			username:"",
			password:"",
			isadmin:0
		}
	}

	componentDidMount(){
		
	}

	handleInput=(event)=>{
		const name=event.target.name;
		const value=event.target.value;
		this.setState({
			[name]:value
		});
	}

	/** this method is for password confirmation */ 
	handlePass=(event)=>{
		if(event.target.value!==this.state.password){
			this.setState({cp:"Invalid Password!!"});
			this.setState({flag:false});
		}
		else{
			this.setState({cp:""});
			this.setState({flag:true});
		}
	}

	/** 
	 * this method interacts with service to register new user
	 * redirects to login page
	*/
	registerUser = () =>{
        const regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (this.state.email.length === 0) {
            alert('please enter email')
          } else if (!this.state.email || regemail.test(this.state.email) === false) {
              alert('email must contain @  ')
          } else if (this.state.password.length === 0) {
            alert('please enter password')
          } else if (this.state.fname.length === 0) {
            alert('please enter fname')
        } else if (this.state.phone.length === 0) {
            alert('please enter phone')
        } else if (this.state.username.length === 0) {
            alert('please enter username')

          } else {

       // alert(' register');
        this.service.addUser(this.state).then(response=>{
            if(response.status===200){
                console.log(response.data);
				// alert(response.data);
				Swal.fire({
					title: response.data,
					position:'center',
					showClass: {
					  popup: 'animate__animated animate__fadeInDown'
					},
					hideClass: {
					  popup: 'animate__animated animate__fadeOutUp'
					}
				  })
                this.props.history.push('/login/');
            }
        }).catch(error=>{
            console.log(error);
            alert('Registration failed');
        });
        this.setState({userId:0,
        fname:"",
        email:"",
        phone:0,
        username:"",
        password:"",
        isadmin:0
    });
}
	}
	

	render(){

    return (
        <div class='pt-5'>
            <Header />
			<div class="py-5" style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '1000px'}}>
				<div className="row mb-4">
					<div className="col-lg-8 mx-auto text-center">
					<h1 class="font-weight-bold" style={{color:'black', fontWeight:'80pt'}}>Registration</h1>
					</div>
				</div> 
				<div className="row">
				<div className="col-md-6 mx-auto">
					<div className="card ">
					<div className="card-header">
                    <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                       
                    <div className="tab-content">
                        <div className="tab-pane fade show active pt-3">
                            <form>
                                <div className="form-group"> 
									<h6><span className="form-label">Name</span></h6>
										<input type="text" name="fname" placeholder="Name" value={this.state.fname}  onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Email</span></h6>
										<input type="email" name="email" placeholder="Email" value={this.state.email}  onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Contact</span></h6>
										<input  type="tel"name="phone" placeholder="Contact Number"  maxLength="10" value={this.state.phone} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Username</span></h6>
										<input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Password</span></h6>
										<input type="password" name="password"  placeholder="Password" value={this.state.password} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Confirm Password</span></h6>
										<input type="password" name="cpasswd" placeholder="Confirm Password" onChange={this.handlePass} className="form-control" required/><div className="text-danger">{this.state.cp} </div> 
								</div>
                                
                                <div className="card-footer"> 
								<button onClick={this.registerUser}  className="subscribe btn btn-primary btn-block shadow-sm" disabled={!this.state.flag}>Register</button>
								
								</div>      
                            </form>
                            
                        </div>
                    </div>
                    <div classNameName="form-group" > 
				
                       <div ><Link className="card-link" to="/login"><button  type="button" className="btn  btn-link btn-block">Already registered? Login Now!</button></Link>  </div> 
                    </div>
                   </div>
                </div>
            </div>
        </div>
		</div>
	</div>
	<Footer />
            </div>

    );
	}
}
