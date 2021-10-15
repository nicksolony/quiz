import React, {Component} from "react";
import '../App.css'

class Questions extends Component {

    render() {
        if(this.props.state.question===0) {
            return (
                <div>
                    <button onClick={()=>this.props.startQuiz()}>Start Quiz</button>
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.state.questions[this.props.state.question-1].question}                       
                </div>
                 )}
        }
    }
export default Questions;