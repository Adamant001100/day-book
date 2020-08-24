import React  from "react";

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

class Clock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      date: ``,
    };
  }

  startTime() {
    const today = new Date();
    const h = today.getHours();
    const m = checkTime(today.getMinutes());
    const s = checkTime(today.getSeconds());

    this.setState({ date: h + ":" + m + ":" + s });
    this.timeout = setTimeout(() => this.startTime(), 500);
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    if (!this.timeout) return;
    clearTimeout(this.timeout);
  }

  render() {
    return <h1>{this.state.date}</h1>;
  }
}

export default Clock;
