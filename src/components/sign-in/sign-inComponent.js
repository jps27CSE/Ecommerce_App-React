import React from 'react'
import './sign-in.Style.scss'
import FormInput from '../form-input/form-inputComponent'
import CustomButton from '../custom-button/custom-buttonComponent'
import { auth, singInWithGoogle } from '../../firebase/firebase.utils.js'
class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
         const {email,password} = this.state

       try{
           await auth.signInWithEmailAndPassword(email,password)
           this.setState({ email: '', password: '' })
       }catch(error){
           console.log(error)
       }
    }

    handleChange = (event) => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have and Account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn