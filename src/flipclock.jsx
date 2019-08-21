import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from './styles';

var keyframes = [
  { transform: 'perspective(800px) rotateX(0deg)' },
  { transform: 'perspective(800px) rotateX(-90deg)' },
  { transform: 'perspective(800px) rotateX(-180deg)' }
];

var timing = {
  duration: 2000,
  iterations: 1,
  easing: 'linear',
  fill: 'forwards',
  direction: 'alternate'
};

const Flips = ({ anime, number }) => {
  const flip = useRef(null);
  const flip2 = useRef(null);

  useEffect(() => {
    if (anime === number) {
      flip.current && flip.current.animate(keyframes, timing);
      flip2.current && flip2.current.animate(keyframes, timing);
    }
  }, [anime]);

  return (
    <div style={{ ...styles.outter, zIndex: anime === number ? 1 : 0 }}>
      <div ref={flip} style={styles.upper}>
        <div style={styles.letter}>{number}</div>
      </div>
      <div ref={flip2} style={styles.bottom}>
        <div style={styles.letter2}>{number < 9 ? number + 1 : 0}</div>
      </div>
      <div style={styles.bottom2}>
        <div style={styles.letter2}>{number}</div>
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
    }, 2000);
  }, [anime]);

  console.log('anime', anime);
  
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
