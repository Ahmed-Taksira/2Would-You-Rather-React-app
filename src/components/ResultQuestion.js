import React, { Component } from 'react'
import { connect } from 'react-redux'

class ResultQuestion extends Component {
    render() {
        const {avatarURL, name}=this.props.author

        const optionOneText=this.props.question.optionOne.text
        const optionTwoText=this.props.question.optionTwo.text

        const optionOneVotes=this.props.question.optionOne.votes.length
        const optionTwoVotes=this.props.question.optionTwo.votes.length
        const totalVotes=optionOneVotes+optionTwoVotes

        let optionOneClass=''
        let optionTwoClass=''

        if(this.props.authedUserAnswer==='optionOne'){
             optionOneClass='answrbtn'
             optionTwoClass='btn'
        }
        else{
             optionTwoClass='answrbtn'
             optionOneClass='btn'
        }

        return (
            <div>
                <img alt='avatar' src={avatarURL}
                    className='questionavatar'/>
                    <h2>Asked by {name}</h2>
                    <h2>Results:</h2>
                <button className={optionOneClass}>
                  Would you rather {optionOneText}?
                </button>
                <p>{Math.round((optionOneVotes/totalVotes)*100)}%</p>
                <p>{optionOneVotes} out of {totalVotes} votes.</p>
                <button className={optionTwoClass}>
                    Would you rather {optionTwoText}?
                </button>
                <p>{Math.round((optionTwoVotes/totalVotes)*100)}%</p>
                <p>{optionTwoVotes} out of {totalVotes} votes.</p>
            </div>
        )
    }
}
function mapStateToProps({users, questions, authedUser}, {id}){
    let question=questions[id]
    let author=users[question.author]
    let authedUserAnswer=users[authedUser].answers[id]

    return {
        question,
        author,
        authedUserAnswer
    }

}

export default connect(mapStateToProps)(ResultQuestion)
