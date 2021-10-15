import React, {Component} from 'react';
import '../App.css'
import Title from './Title';
import Questions from './Questions';

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
                ]
                // ,
                // pick:0
            },
            {
                question: "What caused the root of all of the chaos?",
                options:[
                    {answer: "An earthquake", code: "LA"},
                    {answer: "World War 3", code: "NY"}
                ]
                // ,
                // pick:0
            },
            {
                question: "The president tries to stop an invasion from where?",
                options:[
                    {answer: "Cuba", code: "LA"},
                    {answer: "Soviet Union", code: "NY"}
                ]
                // ,
                // pick:0
            },
            {
                question: "Where was an island converted into a prison?",
                options:[
                    {answer: "LA", code: "LA"},
                    {answer: "Manhattan", code: "NY"}
                ]
                // ,
                // pick:0
            },
            {
                question: "Warning.. SPOILER ALERT: At the end of the movie, the main character Snake, does what?",
                options:[
                    {answer: "Puffs a cigarette while going into the darkness", code: "NY"},
                    {answer: "Picks a cigarette box labelled 'American Spirit'", code: "LA"}
                ]
                // ,
                // pick:0
            }
          ],
          question:0,
          ny:0,
          la:0

        })
    }

    startQuiz = () => {
        this.setState({
            question:1,
            ny:0,
            la:0

        })
    }

    chooseAnswer = (e) => {
        
        if (e.target.id==="NY") {
            this.setState({
                ny:this.state.ny+1
            })
        } else {
            this.setState({
                la:this.state.la+1
            })
        }

        // this.setState(prevState => {
        //     // questions: {
        //     //     ...prevState.questions,
        //     //     [prevState.questions[0].pick]: e.target.id,
        //     // },
        //     const newQs = [...prevState.questions];
        //     newQs[this.state.question-1].pick = e.target.id;
        //     return {questions: newQs};
        // });
         this.setState({
            question:this.state.question+1
        })
    };

    render() {
        return (
            <div>
                <Title question={this.state.question}/>
                <Questions startQuiz={this.startQuiz} chooseAnswer = {this.chooseAnswer} state={this.state}/>
            </div>
        )
    }


}

export default Quiz;