import React, { Component } from 'react';
class App extends Component {
    state = {
        stringValue: '',
        passwordStrength: ''
    };

    passwordChecker = () => {
        if (/[A-Z]/g.test(this.state.stringValue) && /[a-z]/g.test(this.state.stringValue) && /[!@#$%^&*(),.?":{}|<>]/g.test(this.state.stringValue) && this.state.stringValue.length > 5) {
            if (/\d/g.test(this.state.stringValue)) {
                if (this.state.stringValue.length > 7) {
                    this.setState({ passwordStrength: "STRONG" });
                } else {
                    this.setState({ passwordStrength: "MEDIUM" });
                }
            } else if (this.state.stringValue.length > 7) {
                this.setState({ passwordStrength: "MEDIUM" });
            } else {
                this.setState({ passwordStrength: "WEAK" });
            }
        } else {
            this.setState({ passwordStrength: "WEAK" });
        }
    }

    handleChange = (e) => {
        this.setState({ stringValue: e.target.value, passwordStrength: '' });
    };


    render() {
        return (
            <div className="mx-auto container sm:w-full">
                <form className="flex flex-col items-center" onSubmit={e => { this.passwordChecker(); e.preventDefault() }}>
                    <div className="flex items-center justify-center headerContainer">
                        <div className="flex flex-col justify-center header">
                            <h1>Task 2b - Logic</h1>
                        </div>
                    </div>
                    <div className="flex mt-7 pr-5 pl-5 w-full">
                        <div className="inputBox">
                            <input type="text" autoComplete="off" required name="firstName" id="firstName" onChange={e => this.handleChange(e)} />
                            <label htmlFor="firstName" className="labelName">
                                <span className="contentName">Password</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-6/12 text-white font-bold py-2 px-4 rounded-full h-11 mt-7 buttonStyle">Check Password</button>
                    <div className="result mt-7 flex items-center justify-center">
                        <p className="animate__fadeInUp">{this.state.passwordStrength}</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;
