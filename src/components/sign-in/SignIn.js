import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButtom from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.scss";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <div className="buttons">
                        <CustomButtom type="submit">Sign in</CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButtom>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
