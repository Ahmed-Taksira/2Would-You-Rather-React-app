import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultQuestion from './ResultQuestion'
import AnswerQuestion from './AnswerQuestion'

//Viewed after pressing view poll
class Question extends Component {
    render() {
        const { id, questionsIds } = this.props
        if (!questionsIds.includes(id)) {
            return (<h1>Error 404 Page Not Found</h1>)
        }
        else {
            return (
                <div>
                    {this.props.answeredQuestionsIds.includes(id) ?
                        <ResultQuestion id={id} /> : <AnswerQuestion id={id} />}
                </div>
            )
        }
    }
}
function mapStateToProps({ authedUser, users, questions }, props) {
    let answeredQuestionsIds = Object.keys(users[authedUser].answers)
    let { id } = props.match.params
    return {
        answeredQuestionsIds,
        id,
        questionsIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Question)
