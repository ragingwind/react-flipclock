import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from './styles';

var keyframes = [
  { transform: 'perspective(800px) rotateX(0deg)' },
  { transform: 'perspective(800px) rotateX(-90deg)' },
  { transform: 'perspective(800px) rotateX(-180deg)' }
];

var timing = {
  duration: 1000,
  iterations: 1,
  easing: 'linear',
  fill: 'forwards',
  direction: 'alternate'
};

const Flips = ({ animate, number }) => {
  const upper = useRef(null);
  const reverse = useRef(null);

  useEffect(() => {
    if (animate === number) {
      upper.current && upper.current.animate(keyframes, timing);
      reverse.current && reverse.current.animate(keyframes, timing);
    }
  }, [animate]);

  return (
    <div style={{ ...styles.outter, zIndex: anime === number ? 1 : 0 }}>
      <div ref={upper} style={styles.upper}>
        <div style={styles.content}>{number}</div>
      </div>
      <div ref={reverse} style={styles.reverse}>
        <div style={styles.reverseContent}>{number < 9 ? number + 1 : 0}</div>
      </div>
      <div style={styles.bottom}>
        <div style={styles.reverseContent}>{number}</div>
      </div>
    </div>
  );
};

const Flipclock = () => {
  const [animate, setAnimate] = useState(-1);
  const isAnimate = number => animate === number || animate === number -1

  useEffect(() => {
    setTimeout(() => {
      setAnimate(animate < 9 ? animate + 1 : 0);
    }, 1000);
  }, [animate]);
  
  return (
    <div style={styles.container}>
      {isAnimate(9) && <Flips number={9} animate={animate} />}
      {isAnimate(8) && <Flips number={8} animate={animate} />}
      {isAnimate(7) && <Flips number={7} animate={animate} />}
      {isAnimate(6) && <Flips number={6} animate={animate} />}
      {isAnimate(5) && <Flips number={5} animate={animate} />}
      {isAnimate(4) && <Flips number={4} animate={animate} />}
      {isAnimate(3) && <Flips number={3} animate={animate} />}
      {isAnimate(2) && <Flips number={2} animate={animate} />}
      {isAnimate(1) && <Flips number={1} animate={animate} />}
      {(isAnimate(0) || animate === 9) && <Flips number={0} animate={animate} />}
    </div>
  );
};

export default Flipclock;
