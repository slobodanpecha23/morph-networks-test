import React, { Component } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AnimatedProgressProvider from "./components/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';

class App extends Component {
    state = {
        firstNameFilled: '',
        lastNameFilled: '',
        emailFilled: '',
        radioButtonChecked: '',
        lastNumberOfPPopulatedFields: 0,
        previousProgressStep: 0,
        nextProgressStep: 0,
    };

    handleFirstNameChange = (e) => {
        this.setState({ firstNameFilled: e.target.value }, () => {
            this.checkProgress();
        });
    };

    handleLastNameChange = e => {
        this.setState({ lastNameFilled: e.target.value }, () => {
            this.checkProgress();
        });
    }

    handleEmailChange = e => {
        this.setState({ emailFilled: e.target.value }, () => {
            this.checkProgress();
        });
    }

    handleRadioButtonChange = e => {
        this.setState({ radioButtonChecked: e.target.value }, () => {
            this.checkProgress();
        });
    }

    checkProgress = () => {
        let numberOfPopulatedFields = [!!this.state.firstNameFilled, !!this.state.lastNameFilled, !!this.state.emailFilled, !!this.state.radioButtonChecked].reduce((a, b) => b ? ++a : a, 0);
        if (this.state.lastNumberOfPPopulatedFields !== numberOfPopulatedFields) {
            switch (numberOfPopulatedFields) {
                case 1:
                    this.setState({ lastNumberOfPPopulatedFields: numberOfPopulatedFields, previousProgressStep: this.state.nextProgressStep, nextProgressStep: 25 });
                    break;

                case 2:
                    this.setState({ lastNumberOfPPopulatedFields: numberOfPopulatedFields, previousProgressStep: this.state.nextProgressStep, nextProgressStep: 50 });
                    break;

                case 3:
                    this.setState({ lastNumberOfPPopulatedFields: numberOfPopulatedFields, previousProgressStep: this.state.nextProgressStep, nextProgressStep: 75 });
                    break;

                case 4:
                    this.setState({ lastNumberOfPPopulatedFields: numberOfPopulatedFields, previousProgressStep: this.state.nextProgressStep, nextProgressStep: 100 });
                    break;

                default:
                    this.setState({ lastNumberOfPPopulatedFields: 0, previousProgressStep: 0, nextProgressStep: 0 });
                    break;
            }
        }
    }


    render() {
        return (
            <div className="mx-auto container sm:w-full">
                <form className="flex flex-col items-center">
                    <div className="flex items-center pr-5 headerContainer">
                        <div className="done flex justify-center items-center">
                            <AnimatedProgressProvider
                                valueStart={this.state.previousProgressStep}
                                valueEnd={this.state.nextProgressStep}
                                duration={1.4}
                                easingFunction={easeQuadInOut}
                            >
                                {value => {
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${this.state.nextProgressStep}%`}
                                            styles={buildStyles({ pathTransition: "none" })}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </div>
                        <div className="flex flex-col justify-center header">
                            <p>New York State</p>
                            <h1>Request for Contact</h1>
                        </div>
                    </div>
                    <div className="flex mt-7 pr-5 w-full">
                        {this.state.firstNameFilled ?
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
                            <input type="text" autoComplete="off" required name="firstName" id="firstName" onChange={e => this.handleFirstNameChange(e)} />
                            <label htmlFor="firstName" className="labelName">
                                <span className="contentName">First Name</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex mt-7 pr-5 w-full">
                        {this.state.lastNameFilled ?
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
                                <div className="insideCircle">2</div>
                            </div>}
                        <div className="inputBox">
                            <input type="text" autoComplete="off" required name="lastName" id="lastName" onChange={e => this.handleLastNameChange(e)} />
                            <label htmlFor="lastName" className="labelName">
                                <span className="contentName">Last Name</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex mt-7 pr-5 w-full">
                        {this.state.emailFilled ?
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
                                <div className="insideCircle">3</div>
                            </div>}
                        <div className="inputBox">
                            <input type="text" autoComplete="off" required name="email" id="email" onChange={e => this.handleEmailChange(e)} />
                            <label htmlFor="email" className="labelName">
                                <span className="contentName">Email</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex w-full mt-7">
                        {this.state.radioButtonChecked ?
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
                                <div className="insideCircle">4</div>
                            </div>}
                        <div className="radioButtonsBox">
                            <p>What is the best time to contact you?</p>
                            <div className="flex flex-col radioGroup">
                                <label>
                                    <input type="radio" className="option-input radio" name="example" value="monday" onChange={this.handleRadioButtonChange} />
                                    Monday 3pm
                                </label>
                                <label>
                                    <input type="radio" className="option-input radio" name="example" value="tuesday" onChange={this.handleRadioButtonChange} />
                                    Tuesday 3pm
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-6/12 text-white font-bold py-2 px-4 rounded-full h-11 mt-7 mb-7">Submit</button>
                </form>
            </div>
        )
    }
}

export default App;
