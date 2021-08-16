import { getInitialData, saveQuestion, saveQuestionAnswer } from '../util/api';
import { addQuestionToUser, receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading';
import { answerQuestion, addQuestion } from './questions';
import { addAnswerToUser } from './users';

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then( ({users,questions}) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestion(info){
    return (dispatch)=>{
        dispatch(answerQuestion(info))
        dispatch(addAnswerToUser(info))

        return saveQuestionAnswer(info)
    }
}

export function handleAddQuestion(question){
    return (dispatch, getState)=>{

        dispatch(showLoading())

        return saveQuestion(question).then((formattedQuestion)=>{
            dispatch(addQuestion(formattedQuestion))
            dispatch(addQuestionToUser(formattedQuestion))
        })
        .then(()=>dispatch(hideLoading()))
    }
}