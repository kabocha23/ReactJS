import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 5,
      isPlaying: false
    };
    
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  tick() {
    const currentDate = new Date();
    switch (!this.state.date) {
      case true:
        this.setState({
          date: currentDate
        });
        break;
      default:
        this.setState((prevState, props) => ({
          date: currentDate,
          timeLeft: prevState.timeLeft - Math.round((currentDate - prevState.date) / 1000)
        }));
    }
  }

  startTimer() {
    if(this.state.timeLeft < 1) {
      this.setState((prevState, props) => ({
        timeLeft: 5
      }));
      this.tick();
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.setState({
      isPlaying: true
    });
  }
  
  stopTimer() {
    clearInterval(this.timerID);
      this.setState({
        isPlaying: false,
        date: null
      });
  }

  componentWillUpdate() {
    if(this.state.timeLeft === 1){
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const isPlaying = this.state.isPlaying;

    return (
      <div className="countdown">
        <h1 className="header1">Jason's Awe Inspiring Timer App</h1>
        <h2 className='timeLeft'>{this.state.timeLeft}</h2>
        <button className={isPlaying ? 'pauseButton' : 'startButton'} onClick={isPlaying ? this.stopTimer : this.startTimer}>{isPlaying ? "Pause the Timer..." : "Start the Timer!"}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);

export default Timer;
