import React, { Component } from 'react';
class App extends Component {
    state = {
        stringValue: '',
    };

    passwordChecker = (password) => {
        if (password.length > 8 && /\d/.test(password) ) {

        }
    }

    handleFirstNameChange = (e) => {
        this.setState({stringValue: e.target.value});
    };


    render() {    
        return (
            <div className="mx-auto container sm:w-full">
                <form className="flex flex-col items-center">
                    <div className="flex items-center justify-center headerContainer">
                        <div className="flex flex-col justify-center header">
                            <h1>Task 2b - Logic</h1>
                        </div>
                    </div>
                    <div className="flex mt-7 pr-5 pl-5 w-full">
                        <div className="inputBox">
                            <input type="text" autoComplete="off" required name="firstName" id="firstName" onChange={e => this.handleFirstNameChange(e)}/>
                            <label htmlFor="firstName" className="labelName">
                                <span className="contentName">Password</span>
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
