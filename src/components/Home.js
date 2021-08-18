import './App.css'
import React from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import { Tabs } from 'antd'

function Home(props) {
    let answeredQuestionsIds = Object.keys(props.users[props.authedUser].answers)
        .sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp)

    let unansweredQuestionsIds = props.questionsIds.filter(id => !answeredQuestionsIds.includes(id))

    const { TabPane } = Tabs

    return (
        <div>
            <h1>Welcome {props.loggedIn} to Would You Rather!</h1>

            <Tabs defaultActiveKey="unanswered">
                <TabPane tab="Unanswered Questions" key="unanswered">
                    <h1>Unanswered</h1>
                    <ul>
                        {unansweredQuestionsIds.map((id) => (
                            <li key={id}>
                                <Poll id={id} />
                            </li>
                        ))}
                    </ul>
                </TabPane>
                <TabPane tab="Answered Questions" key="answered">
                    <h1>Answered</h1>
                    <ul>
                        {answeredQuestionsIds.map((id) => (
                            <li key={id}>
                                <Poll id={id} />
                            </li>
                        ))}
                    </ul>
                </TabPane>
            </Tabs>
        </div>
    )
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




