import React, {Component} from "react";
import '../App.css'


class Question extends Component {

    render() {
        
            return (
                <div>
                    <h2>{this.props.question.question}</h2>
                    <div>
                        {this.props.question.options.map(option=>
                            
                            <button id={option.code} onClick={(e)=>this.props.chooseAnswer(e)}>{option.answer}</button>
                        )}
                    </div>
                </div>
            )
    }

}

export default Question;