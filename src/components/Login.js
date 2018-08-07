import React, { Component } from 'react'
import firebase from '../firebase';

class Signup extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h2>Login</h2>
                <input name="email" placeholder="Email" onChange={this.handleInputChange} />
                <input name="password" type="password" placeholder="Password" onChange={this.handleInputChange} />
                <button type="submit">Login</button>
            </form>
        )
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.signup(email, password);
    }

    signup = (email, password) => {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                console.log(err);
            });
    }
}


export default Signup;