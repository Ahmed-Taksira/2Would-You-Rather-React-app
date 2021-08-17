import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../components/App.css'
import {Link} from 'react-router-dom'


class Poll extends Component {
    render() {
        const {name, avatarURL}=this.props.author
        const {id}= this.props
        return (
            <div>
                <img alt='avatar' src={avatarURL}
                    className='questionavatar'/>
                <h2>{name}</h2>
                <Link to={`/questions/${id}`} className='btn' 
                        type='submit'>
                    View Poll
                </Link>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    let question=questions[id]
    let author=users[question.author]
    
    return {
        authedUser,
        author
    }
}

export default connect(mapStateToProps)(Poll)
