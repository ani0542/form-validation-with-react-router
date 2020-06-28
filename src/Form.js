import React, { Component } from 'react';
import './Form.css'
class Form extends Component{
    constructor(props)
    {
        super(props)
        {
            this.state={
                fullname:'',
                email:'',
                number:'',
                textarea:''
            }
        }
    }
//these all can be done in one by specifying name to all input
// handle=(e)=>{
//      this.setState({fullname:e.target.value})
    
// }

// handleemail=(e)=>{
//      this.setState({email:e.target.value})
    
// }

// handlenumber=(e)=>{
//      this.setState({number:e.target.value})
    
// }

// handlemessage=(e)=>{
//      this.setState({textarea:e.target.value})
    
// }
//like this 
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}
handleSubmit=(e)=>{
    e.preventDefault()
    // alert(`my name is ${this.state.fullname} my email id is ${this.state.email} my mobile number is ${this.state.number} please come and visit this page${this.state.textarea}`)
    //this alert can also be written as 
    //json.stringify convert convert javascript object into string
    alert(JSON.stringify(this.state))
}
    render()
    {
        return(<>
                  <form onSubmit={this.handleSubmit}>
                        <label>Full Name</label><br/>
                        <input type='text' name='fullname' value={this.state.fullname} onChange={this.handleChange}/><br/>

                        <label>Email</label><br/>
                        <input type='email' name='email' value={this.state.email} onChange={this.handleChange}/><br/>

                        <label>Mobile</label><br/>
                        <input type='number' name='number' value={this.state.number} onChange={this.handleChange}/><br/>

                        <label>Message</label><br/>
                        <textarea  name='textarea' value={this.state.textarea} onChange={this.handleChange}/>  <br/>

                        <input type='submit' value='button'/>
                  </form>
        </>)
    }
}

export default Form;