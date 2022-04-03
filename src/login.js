import React from 'react';
import './contact.css'

const Login = () => {
    return(
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>
                    Let' discuss your project
                </h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img className='c-icon' src='' alt='' />
                        +256781917299
                    </div>
                    <div className='c-info-item'>
                        <img className='c-icon' src='' alt='' />
                        Hoima Main street, Kampala Uganda
                    </div>
                    <div className='c-info-item'>
                        <img className='c-icon' src='' alt='' />
                        yesiha2001@gmail.com
                    </div>
                </div>
            </div>
            <div className='c-rignt'>
                <p className='c-desc'>
                    <b>What's your story</b> Get in touch with me through Email.
                </p>
                <form>
                   <input type='text' placeholder='Name' name='user_name'/> 
                   <input type='text' placeholder='Subject' name='user_subject'/> 
                   <input type='text' placeholder='Email' name='user_email'/> 
                   <textarea  rows='5' placeholder='Message' name='message' />
                   <button>Submit</button>
                </form>
            </div>
            </div>
           
            </div>
    )
}

export default Login;