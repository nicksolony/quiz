import React, {Component} from "react";
import '../App.css'

class Title extends Component {

    render() {
        if(this.props.question===0) {
            return (
                <div>
                    <h1>Did You Escape From NY or LA?</h1>
                </div>
            )
        } else if (this.props.question===6) {
            return (
                <h1>Your result</h1>
                )
        } else {
            return (
                <h1>Question #{this.props.question}</h1>
            )
        }
    }
}

export default Title;