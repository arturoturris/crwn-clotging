import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.compoment'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'',password:''})
        }catch(error){
            console.error(error)
        }

        
    }

    handleChange = event => {
        const {value,name} = event.target

        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I alredy have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} autoComplete='off'>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn