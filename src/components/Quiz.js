import React, {Component} from 'react';
import '../App.css'
import Title from './Title';

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = ({
          questions: [
            {
                question: "In which year did you escape?",
                options:[
                    {answer: "1997", code: "NY"},
                    {answer: "2013", code: "LA"}
                ],
                pick:0
            },
            {
                question: "What caused the root of all of the chaos?",
                options:[
                    {answer: "An earthquake", code: "LA"},
                    {answer: "World War 3", code: "NY"}
                ],
                pick:0
            },
            {
                question: "The president tries to stop an invasion from where?",
                options:[
                    {answer: "Cuba", code: "LA"},
                    {answer: "Soviet Union", code: "NY"}
                ],
                pick:0
            },
            {
                question: "Where was an island converted into a prison?",
                options:[
                    {answer: "LA", code: "LA"},
                    {answer: "Manhattan", code: "NY"}
                ],
                pick:0
            },
            {
                question: "Warning.. SPOILER ALERT: At the end of the movie, the main character Snake, does what?",
                options:[
                    {answer: "Puffs a cigarette while going into the darkness", code: "NY"},
                    {answer: "Picks a cigarette box labelled 'American Spirit'", code: "LA"}
                ],
                pick:0
            }
          ],
          question:0
        })
    }

    startQuiz = () => {
        this.setState({
            question:1
        })
    }

    render() {
        return (
            <div>
                <Title question={this.state.question}/>
            </div>
        )
    }


}

export default Quiz;