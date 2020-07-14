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

        word = word.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
        word = word.replace(/[ ]{2,}/gi, " ");//2 or more space to 1
        word = word.replace(/\n /, "\n"); // exclude newline with a start spacing

        const wordArray = word.split(" ")//returns an array of words
        let wordArrayCount = word.split(' ').filter(function (str) { return str != ""; }).length;
        wordArrayCount = word.trim().split(/\s+/).length

        try{
            //wordArrayCount = word.match(/\b\S+\b/g).length
        }catch{

        }
        
       // console.log(wordArray)
        this.setState({
            count: wordArrayCount,
            words: word,
            wordsArray: wordArray
        })
    }

    keywordDensity = (e) => {
        let keyword = e.target.value.trim()

        let words = this.state.words
        //let count = 0;
        //var count = (wordArray.match(/df/g) || []).length;

        let count = 0
        let subStr = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        if (keyword.length <= 0) {
            count = words.length + 1;
        }else{
            console.log(subStr)
            count = words.match(new RegExp(subStr, 'gi') || []).length
            console.log(count)
            console.log(words)
        }
        

        //console.log(wordArray[2])
        // wordArray.forEach(element => {
        //     console.log(element)
        //     //replace spaces in element
        //     let newElement = element.replace(" ","")
        //     let newKeyword = keyword.replace(" ","")
        //     if (newElement.includes(newKeyword)) {
        //         //console.log(element)
        //         count += 1
        //     }
        // });

        //calculate density
        let density = (count / this.state.count) * 100
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