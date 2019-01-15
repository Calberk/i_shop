import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../../general/form/input';


const SignInForm = props => {
    const {handleSubmit, onSubmit} = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <Field name='email' size='s12 m8 offset-m2' label='email' component={Input}/>
            </div>
            <div className='row'>
                <Field name='password' size='s12 m8 offset-m2' label='password' type='password' component={Input}/>
            </div>
            <div className='row'>
                <div className='col s8 offset-m2 right-align'>
                    <button className='black white-text btn'>Sign In</button>
                </div>
            </div>
            
        </form>
    )
}

export default reduxForm({
    form: 'sign-in-form'
})(SignInForm)