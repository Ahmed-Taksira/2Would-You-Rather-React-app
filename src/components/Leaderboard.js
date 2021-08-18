import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBlock from './LeaderBlock'

class Leaderboard extends Component {
    render() {
        const {usersIds}=this.props
        return (
            <div>
                <h1>Leaderboard</h1>
                <ul>
                {usersIds.map(id=> (
                        <LeaderBlock key={id} id={id}/>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        usersIds: Object.keys(users).sort((a,b)=>
        (users[b].questions.length+Object.keys(users[b].answers).length) - 
        (users[a].questions.length+Object.keys(users[a].answers).length))
    }
}

export default connect(mapStateToProps)(Leaderboard)

