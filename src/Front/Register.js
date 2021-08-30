import React, { Component } from 'react'
import axios from 'axios'
import './Css/Regis.css'
class Register extends Component {
	constructor(props) {
        super(props)
        
		this.state = {
			username: '',
			password:'',
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/sreg', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
			this.setState({
				success: "Registered Successfully.."
			})
	}

	render() {
		const { username, password } = this.state
		return (
			<div>
				<h1>Registration</h1>
                <div  class="row">
                    <div className="col-sm-3"></div>
					<div className="col-sm-6 csshobe">
				<form onSubmit={this.submitHandler}>
					<div className="form-group">
					<div className="form-group">  <label for="username">User Name</label>
						<input className="form-control"
							type="text"
							name="username"
							value={username}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-group"> <label for="password">Password</label>
						<input className="form-control"
							type="password"
							name="password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit" class="btn btn-primary">Register</button>
					</div>
				</form>
				<h6>{this.state.success}</h6> 
				</div>
			</div>
			</div>
		)
	}
}

export default Register;
