import React, {Component} from "react";
import Question from "./Question";
import '../App.css'

class Questions extends Component {

    render() {
        if(this.props.state.question===0) {
            return (
                <div>
                    <button onClick={()=>this.props.startQuiz()}>Start Quiz</button>
                </div>
            )
        } else if (this.props.state.question===6) {
            return(
            <h1>Your result</h1>
            )
        } else {
            return (
                <div>
                    <Question chooseAnswer = {this.props.chooseAnswer} question={this.props.state.questions[this.props.state.question-1]}/>           
                </div>
                 )}
        }
    }
export default Questions;