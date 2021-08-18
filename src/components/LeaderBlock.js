import React from 'react'
import { connect } from 'react-redux'
import './App.css'

function LeaderBlock(props) {

    const { questions, name, avatarURL } = props.user
    const answersArray = Object.keys(props.user.answers)
    return (
        <div>
            <img alt='avatar' src={avatarURL}
                className='questionavatar' />
            <h2>{name}</h2>
            <p>Questions Answered: {questions.length}</p>
            <p>Questions Created: {answersArray.length}</p>
            <p>Score: {answersArray.length + questions.length}</p>
            <p>_____________________________________________</p>
        </div>
    )
}

function mapStateToProps({ users }, { id }) {
    let user = users[id]

    return {
        user
    }
}

export default connect(mapStateToProps)(LeaderBlock)
