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

const Flips = ({ anime, number }) => {
  const upper = useRef(null);
  const reverse = useRef(null);

  useEffect(() => {
    if (anime === number) {
      upper.current && upper.current.animate(keyframes, timing);
      reverse.current && reverse.current.animate(keyframes, timing);
    }
  }, [anime]);

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
  const [anime, setFront] = useState(-1);
  const isAnimate = number => anime === number || anime === number -1

  useEffect(() => {
    setTimeout(() => {
      setFront(anime < 9 ? anime + 1 : 0);
    }, 1000);
  }, [anime]);
  
  return (
    <div style={styles.container}>
      {isAnimate(9) && <Flips number={9} anime={anime} />}
      {isAnimate(8) && <Flips number={8} anime={anime} />}
      {isAnimate(7) && <Flips number={7} anime={anime} />}
      {isAnimate(6) && <Flips number={6} anime={anime} />}
      {isAnimate(5) && <Flips number={5} anime={anime} />}
      {isAnimate(4) && <Flips number={4} anime={anime} />}
      {isAnimate(3) && <Flips number={3} anime={anime} />}
      {isAnimate(2) && <Flips number={2} anime={anime} />}
      {isAnimate(1) && <Flips number={1} anime={anime} />}
      {(isAnimate(0) || anime === 9) && <Flips number={0} anime={anime} />}
    </div>
  );
};

export default Flipclock;
