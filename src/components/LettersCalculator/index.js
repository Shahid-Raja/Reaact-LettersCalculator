/* eslint-disable react/no-unescaped-entities */
// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {inputPhrase: ''}

  onChangeInputElement = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="card1">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input">Enter the phrase</label>
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              id="input"
              onChange={this.onChangeInputElement}
              value={inputPhrase}
            />
            <p className="paragraph">No.of letters: {inputPhrase.length}</p>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
