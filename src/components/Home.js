import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import { Tabs, Tab, ListGroup, ListGroupItem } from 'react-bootstrap'

class Home extends Component {
    render() {

        let answeredQuestionsIds = Object.keys(this.props.users[this.props.authedUser].answers)
        .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)

        let unansweredQuestionsIds = this.props.questionsIds.filter(id => !answeredQuestionsIds.includes(id))

        return (
            <div>
                <h1>Welcome {this.props.loggedIn} to Would You Rather!</h1>
                <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey='unanswered' title='Unanswered Questions'>
                        <ListGroup>
                            {unansweredQuestionsIds.map((id) => (
                                <ListGroupItem key={id}>
                                    <Poll id={id} />
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Tab>
                    <Tab eventKey='answered' title='Answered Questions'>
                        <ListGroup>
                        {answeredQuestionsIds.map((id) => (
                                <ListGroupItem key={id}>
                                    <Poll id={id} />
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser, questions }) {
    const loggedIn = users[authedUser].name
    return {
        questionsIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser,
        users,
        loggedIn,
        questions
    }
}

export default connect(mapStateToProps)(Home)
