import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Home extends Component {
    render() {

        let answeredQuestionsIds=Object.keys(this.props.users[this.props.authedUser].answers)
        let unansweredQuestionsIds=this.props.questionsIds.filter(id=> !answeredQuestionsIds.includes(id))

        return (
            <div className='center'>
                <h1>Welcome {this.props.loggedIn} to Would You Rather!</h1>
                <div className="row">
                    <div className="column">
                        <h2>Unanswered Questions</h2>
                        <ul>
                            {unansweredQuestionsIds.map((id) => (
                                <li key={id}>
                                    <Poll id={id} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="column">
                        <h2>Answered Questions</h2>
                        <ul>
                            {answeredQuestionsIds.map((id) => (
                                <li key={id}>
                                    <Poll id={id} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser, questions }) {
    const loggedIn= users[authedUser].name
    return {
        questionsIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser,
        users,
        loggedIn
    }
}

export default connect(mapStateToProps)(Home)
