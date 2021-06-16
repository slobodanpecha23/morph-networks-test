import React, { Component } from 'react';
class App extends Component {
    state = {
        stringValue: "",
        checkResult: ""
    };

    handleChange = (e) => {
        this.setState({ stringValue: e.target.value, checkResult: "" });
    };

    checkStringForParentheses = () => {
        let checkObj = this.state.stringValue.split("").reduce((validityObj, arrElement) => {
            if (validityObj.validity === "error") {
                return validityObj;
            } else if (arrElement === ")") {
                validityObj.closeParentheses = ++validityObj.closeParentheses;
                if (validityObj.closeParentheses > validityObj.openParentheses) validityObj.validity = "error";
                return validityObj;
            } else if (arrElement === "(") {
                validityObj.openParentheses = ++validityObj.openParentheses;
                return validityObj;
            } else {
                return validityObj;
            }
        }, { openParentheses: 0, closeParentheses: 0, validity: "" });

        if (!!checkObj.openParentheses || !!checkObj.closeParentheses) {
            if (checkObj.validity === 'error') {
                this.setState({ checkResult: "String has parentheses, but with wrong order!" });
            } else if (checkObj.openParentheses > checkObj.closeParentheses) {
                this.setState({ checkResult: `String has parentheses, but ${checkObj.openParentheses - checkObj.closeParentheses} need to be closed!` });
            } else {
                this.setState({ checkResult: `String has parentheses and all are right placed!` });
            }
        } else {
            this.setState({ checkResult: `String do not contain parentheses!` });
        }
    }


    render() {
        return (
            <div className="mx-auto container sm:w-full">
                <form className="flex flex-col items-center" onSubmit={e => { this.checkStringForParentheses(); e.preventDefault() }}>
                    <div className="flex items-center justify-center headerContainer">
                        <div className="flex flex-col justify-center header">
                            <h1>Task 2a - Logic</h1>
                        </div>
                    </div>
                    <div className="flex mt-7 pr-5 w-full">
                        {this.state.stringValue ?
                            <div className="done flex justify-center items-center">
                                <svg width="30px" height="30px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="check-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <circle id="filled-circle" fill="#2196f3" cx="66.5" cy="66.5" r="54.5"></circle>
                                        <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle>
                                        <circle id="outline" stroke="#2196f3" strokeWidth="4" cx="66.5" cy="66.5" r="54.5"></circle>
                                        <polyline id="check" stroke="#FFFFFF" strokeWidth="4" points="41 70 56 85 92 49"></polyline>
                                    </g>
                                </svg>
                            </div> :
                            <div className="number flex justify-center items-center">
                                <div className="insideCircle">1</div>
                            </div>}
                        <div className="inputBox">
                            <input type="text" autoComplete="off" required name="firstName" id="firstName" onChange={e => this.handleChange(e)} />
                            <label htmlFor="firstName" className="labelName">
                                <span className="contentName">Enter a string</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-6/12 text-white font-bold py-2 px-4 rounded-full h-11 mt-7">Check</button>
                    <div className="result mt-7 flex items-center justify-center px-4">
                        <p>{this.state.checkResult}</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;
