

import React, { Component } from 'react';
import './Contact.css'
import Form from './Form'
class Contact extends Component{
    render()
    {
        return(<>
                      
                    <div className='contactstyle'>
                    <h3>welcome to contact page</h3><br/>
                     <br></br>
                    <Form/>
                   </div>
                  
        </>)
}
}
export default Contact;
