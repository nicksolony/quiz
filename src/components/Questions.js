import React, {Component} from "react";
import Question from "./Question";
// import StatusBar from './StatusBar'
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
            
            if (this.props.state.ny > this.props.state.la) {
                return(
                    <div>    
                        <h2>Congrats, you are a survivor!  You just escaped from New York!</h2>
                        <button onClick={()=>this.props.startQuiz()}>Restart Quiz</button>
                    </div>
                )
        } else {
            return (
                <div>
                    <h2>Congrats, you are a survivor!  You just escaped from Los Angeles!</h2>
                    <button onClick={()=>this.props.startQuiz()}>Restart Quiz</button>
                </div>
            )
        }} else {
            return (
                <div>
                    <Question chooseAnswer = {this.props.chooseAnswer} question={this.props.state.questions[this.props.state.question-1]}/>    
                    {/* <StatusBar question={this.state.question}/>        */}
                </div>
                 )}
        }
    }
export default Questions;