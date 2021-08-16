import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/shared'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component {
    state={
        text1:'',
        text2:'',
        toHome:false
    }

    handleText1= (e)=>{
        const text= e.target.value

        this.setState(()=> ({
            text1:text
        }))
    }

    handleText2= (e)=>{
        const text= e.target.value

        this.setState(()=> ({
            text2:text
        }))
    }

    handleSubmit= (e)=>{
        e.preventDefault()
         const {text1, text2}=this.state

         const {dispatch, authedUser}=this.props

         dispatch(handleAddQuestion({
            optionOneText: text1,
            optionTwoText: text2, 
            author: authedUser
         }))

         this.setState(()=> ({
            text1:'',
            text2:'',
            toHome: true
        }))
    }

    render() {
        const {text1, text2, toHome}=this.state
        
        if(toHome){
            return <Redirect to={'/home'}/>
        }

        return (
            <div>
                <h1>Create New Question</h1>
                <h2>Would You Rather</h2>
                <form onSubmit={this.handleSubmit}>
                    <textarea placeholder='Option One'
                              value={text1}
                              onChange={this.handleText1}
                              maxLength={100} />
                    <h2>OR</h2>
                    <textarea placeholder='Option Two'
                              value={text2}
                              onChange={this.handleText2}
                              maxLength={100} />
                    <p></p>
                    <button className='btn'
                            type='submit'
                            disabled={text1==='' || text2===''}>
                                Submit
                            </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(NewQuestion)
