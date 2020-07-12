import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wordsArray: [],
            words: "",
            count: 0,
            keywordDensity: ""
        }
    }

    countWords = (e) => {
        //get the target value
        let word = e.target.value
        // word = word.replace(/↵/g, "hghgh");
        //split the text to get number of words
        const wordArray = word.split(" ")//returns an array of words
        const wordArrayCount = wordArray.length
        
        console.log(wordArray)
        this.setState({
            count: wordArrayCount,
            words: word,
            wordArray: wordArray
        })
    }

    keywordDensity = (e) => {
        let keyword = e.target.value

        let wordArray = this.state.wordsArray
        let count = 0;
        //console.log(wordArray[2])
        wordArray.forEach(element => {
            console.log(element)

            if (element.includes(keyword)) {
                //console.log(element)
                count += 1
            }
        });

        //calculate density
        let density = (count / wordArray.length) * 100
        this.setState({
            density: density
        })
    }

    render() {
        return (
            <div className="form-container">
                <p className="word-count">{this.state.count} Words</p> <br></br>
                <div className="word-stats">
                    <textarea rows="30" onChange={this.countWords} name="text" placeholder="enter text here"></textarea>
                    <div className="keyword-stats">
                        <p>Keyword density</p>
                        <input type="text" placeholder="enter keyword" onChange={this.keywordDensity}></input>
                        <p className="density">{this.state.density}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home