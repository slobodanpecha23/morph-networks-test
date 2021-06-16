import React, { Component } from 'react';
class App extends Component {
    state = {
        stringValue: '',
    };

    handleFirstNameChange = (e) => {
        this.setState({stringValue: e.target.value});
    };


    render() {    
        return (
            <div className="mx-auto container sm:w-full">
                <form className="flex flex-col items-center">
                    <div className="flex items-center justify-center headerContainer">
                        <div className="flex flex-col justify-center header">
                            <h1>Task 2a - Logic</h1>
                        </div>
                    </div>
                    <div className="flex mt-7 pr-5 w-full">
                        {this.state.stringValue ? 
                        <div className="done flex justify-center items-center">
                            <svg width="30px" height="30px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <circle id="filled-circle" fill="#2196f3" cx="66.5" cy="66.5" r="54.5"></circle>
                                    <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle>
                                    <circle id="outline" stroke="#2196f3" stroke-width="4" cx="66.5" cy="66.5" r="54.5"></circle>
                                    <polyline id="check" stroke="#FFFFFF" stroke-width="4" points="41 70 56 85 92 49"></polyline>
                                </g>
                            </svg>
                        </div> : 
                        <div className="number flex justify-center items-center">
                            <div className="insideCircle">1</div>
                        </div>}
                        <div className="inputBox">
                            <input type="text" autoComplete="off" required name="firstName" id="firstName" onChange={e => this.handleFirstNameChange(e)}/>
                            <label htmlFor="firstName" className="labelName">
                                <span className="contentName">Enter a string with parentheses</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-6/12 text-white font-bold py-2 px-4 rounded-full h-11 mt-7">Submit</button>
                    <div className="result mt-7 flex items-center justify-center animate__fadeInUp">
                        <p>{this.state.stringValue}</p> 
                    </div>
                </form>
            </div>
        )
    }
}

export default App;
