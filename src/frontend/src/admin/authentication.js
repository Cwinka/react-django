import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import AdminService from './middleware/adminservice'


const service = new AdminService();
const cookies = new Cookies();
class  Authenticate  extends  Component {
    constructor(props) {
        super(props);
        this.checkToken = this.checkToken.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isAuth = props.isAuth;
        this.term = '';
        this.state = {
            redirect: false,
        }
    }   
    checkToken() {
        // Check token here
        const success = true;
        if (success){
            cookies.set('token', `${this.term}`, { path: '/' });
            this.setState({redirect: true})
        }
    }
    handleChange(event){
        this.term = event.target.value
    }
    handleEnterPress(event){
        if (event.keyCode === 13){
            this.checkToken();
        }
    }
    render(){
        if (this.state.redirect || this.isAuth){
            return(
                this.props.children
            )
        }
        return( 
            <div className="authentication-wrapper">
                <div className='authentication-panel'>
                    <div className="authentication-input">
                        <input type="text" name="auth-token" id="auth" placeholder='Token'
                            onKeyDown={this.handleEnterPress}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export  default  Authenticate;