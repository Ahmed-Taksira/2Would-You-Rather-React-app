import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
//import Dropdown from 'react-dropdown'
import { connect } from 'react-redux'
import './App.css';
import {setAuthedUser} from '../actions/authedUser'
import {Link} from 'react-router-dom'

class SignIn extends Component {

        authedUser=null
        flag= false
     
    handleDropDownSelect= (event, data)=>{
        this.authedUser=data.value
    }

    signAuthedUser = ()=>{
        if(this.authedUser===null){
            if(this.flag===false){
            this.props.dispatch(setAuthedUser(null))
            this.flag=true
        }
            alert("Choose an account.")
        }

        else{
            this.props.dispatch(setAuthedUser(this.authedUser))
            this.authedUser=null
        }                    
    }

    render() {
        let usersOptions = []
        this.props.usersIds.map(id => usersOptions.push({
            key: this.props.users[id].id,
            text: this.props.users[id].name,
            value: this.props.users[id].id,
            image: { avatar: true, src: this.props.users[id].avatarURL },
        }))

        return (
            <div>
                <h3>Welcome to Would You Rather App!</h3>
                <h4>Please Sign in to continue</h4>
                <Dropdown
                    placeholder='Select Friend'
                    fluid
                    selection
                    options={usersOptions}
                    onChange={this.handleDropDownSelect}
                />
                <p></p>
                <Link to={'/home'} className='btn' onClick={this.signAuthedUser}>
                    Sign in
                </Link>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
        usersIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(SignIn)
