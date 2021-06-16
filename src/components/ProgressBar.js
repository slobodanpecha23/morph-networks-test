import React, { Component } from 'react'

class ProgressBar extends Component {
    numb = document.querySelector(".numb");
    counter = 0;
    // setInterval((s)=>{
    //     if(counter == 100){
    //     clearInterval();
    //     }else{
    //     counter+=1;
    //     numb.textContent = counter + "%";
    //     }
    // }, 80);

    render() {
        return (
            <div class="circular">
                <div class="inner"></div>
                <div class="outer"></div>
                <div class="numb">
                0%
                </div>
                <div class="circle">
                <div class="dot">
                    <span></span>
                </div>
                <div class="bar left">
                    <div class="progress"></div>
                </div>
                <div class="bar right">
                    <div class="progress"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;
