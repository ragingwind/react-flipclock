import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from './styles';

var keyframes = [
  { transform: 'perspective(200px) rotateX(0deg)' },
  { transform: 'perspective(200px) rotateX(-90deg)' },
  { transform: 'perspective(200px) rotateX(-180deg)' }
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
      flip.current.animate(keyframes, timing);
      flip2.current.animate(keyframes, timing);
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

  useEffect(() => {
    setTimeout(() => {
      if (anime === 9) {
        setFront(0);
        return;
      }
      setFront(anime + 1);
    }, 2000);
  }, [anime]);

  console.log('anime', anime);
  return (
    <div style={styles.container}>
      {(anime === 9 || anime === 9 - 1) && <Flips number={9} anime={anime} />}
      {(anime === 8 || anime === 8 - 1) && <Flips number={8} anime={anime} />}
      {(anime === 7 || anime === 7 - 1) && <Flips number={7} anime={anime} />}
      {(anime === 6 || anime === 6 - 1) && <Flips number={6} anime={anime} />}
      {(anime === 5 || anime === 5 - 1) && <Flips number={5} anime={anime} />}
      {(anime === 4 || anime === 4 - 1) && <Flips number={4} anime={anime} />}
      {(anime === 3 || anime === 3 - 1) && <Flips number={3} anime={anime} />}
      {(anime === 2 || anime === 2 - 1) && <Flips number={2} anime={anime} />}
      {(anime === 1 || anime === 1 - 1) && <Flips number={1} anime={anime} />}
      {(anime === 0 || anime === -1 || anime === 9) && <Flips number={0} anime={anime} />}
    </div>
  );
};

export default Flipclock;
