import React, { Component } from 'react'

class QuizQuestion extends Component {
    render() {
        return (
            <div>
                <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{this.props.quiz_question.instruction_text}</li>
          </ul>
        </section>
      </main>
            </div>
        )
    }
}
export default QuizQuestion;