import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAnswerQuestion} from '../actions/shared'


class AnswerQuestion extends Component {
    handleClick=(event)=>{
        event.preventDefault()
        
        const {dispatch, authedUser, id}=this.props

        dispatch(handleAnswerQuestion({
            authedUser: authedUser,
            qid: id,
            answer: event.target.value
        }))
    }

    render() {
        const { avatarURL, name } = this.props.author

        const optionOneText = this.props.question.optionOne.text
        const optionTwoText = this.props.question.optionTwo.text

        return (
            <div>
                <img alt='avatar' src={avatarURL}
                    className='questionavatar' />
                <h2>{name} asks:</h2>
                <h3>Would you rather</h3>
                <button value='optionOne' className='btn' onClick={this.handleClick}>
                    {optionOneText}
                </button>
                <p></p>
                <button value='optionTwo' className='btn' onClick={this.handleClick}>
                   {optionTwoText}
                </button>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    let question = questions[id]
    let author = users[question.author]

    return {
        question,
        author,
        authedUser
    }

}

export default connect(mapStateToProps)(AnswerQuestion)
