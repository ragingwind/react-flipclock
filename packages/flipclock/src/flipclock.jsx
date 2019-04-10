import React, {Component} from 'react';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: 'grey'
  },
  flips: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid green',
    width: '33.3%',
    height: '100%',
    backgroundColor: 'blue'
  },
  flip: {
    border: '1px solid blue',
    width: '100%',
    height: '50%',
    backgroundColor: 'red'
  },
};

const Flip = (props) => {
  return (
    <div style={styles.flip}>{props.side}</div>
  )
}

class Flips extends Component {
  render() {
    return (
      <div style={styles.flips}>
        <Flip side={"upside"}></Flip>
        <Flip side={"downside"}></Flip>
      </div>
    )
  }
}

class Flipclock extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Flips></Flips>
        <Flips></Flips>
        <Flips></Flips>
      </div>
    );
  }
}

export default Flipclock;
