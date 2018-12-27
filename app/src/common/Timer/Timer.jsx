// @flow

import React, { Component } from 'react';

import './Timer.css';

type PropsType = {
    timestamp: number
};

type StateType = {
    left: number,
    intervalID: number
};

class Timer extends Component<PropsType, StateType> {
    state = {
        left: this.props.start - +new Date(),
        intervalID: null
    };

    static getDerivedStateFromProps(props, state) {
        return {
            left: props.start - +new Date(),
        };
    };

    componentDidMount() {
        const intervalID = setInterval(this.incrementTimer, 1000);

        this.setState({
            intervalID
        });
    };

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    };

    incrementTimer = () => {
        const { left } = this.state;

        if (left > 0 ) { 
            this.setState({
                left: left - 1000
            });
        } else {
            clearInterval(this.state.intervalID);
        }
    };

    getTimer = (timer: number) => ({
        sec: Math.floor(timer /= 1000) % 60,
        min: Math.floor(timer /= 60) % 60,
        hours: Math.floor(timer /= 60) % 24,
        days: Math.floor(timer / 24)
    });

    render () {
        const timer = this.getTimer(this.state.left);

        return(
            <div className='Timer'>
                {`${timer.days} dni ${timer.hours}h ${timer.min}m ${timer.sec}s`}
            </div>
        )
    };
}

export default Timer;
