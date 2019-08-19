import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from './styles'

const iterations = 1;

const Flips = ({ anime, number, index, bg }) => {
  const flip = useRef(null);
  const flip2 = useRef(null);

  var keyframes = [
    { transform: 'perspective(200px) rotateX(0deg)' },
    { transform: 'perspective(200px) rotateX(-90deg)' },
    { transform: 'perspective(200px) rotateX(-180deg)' }
  ];
  var timing = {
    duration: 500,
    iterations: 1,
    easing: 'linear',
    fill: 'forwards',
    direction: 'alternate'
  };

  useEffect(() => {
    if (anime === number) {
      flip.current.animate(keyframes, timing);
      flip2.current.animate(keyframes, timing);
    }
  }, [anime, number]);

  return (
    <div style={styles.outter}>
      <div ref={flip} style={styles.front}>
        <div style={styles.letter}>{number}</div>
      </div>
      <div ref={flip2} style={styles.front2}>
        <div style={styles.letter2}>{number + 1}</div>
      </div>
    </div>
  );
};

const Flipclock = () => {
  const [anime, setFront] = useState(0);

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
      <Flips number={9} bg="black" anime={anime} index={anime == 9 ? 1 : 0} />
      <Flips number={8} bg="black" anime={anime} index={anime == 8 ? 1 : 0} />
      <Flips number={7} bg="black" anime={anime} index={anime == 7 ? 1 : 0} />
      <Flips number={6} bg="black" anime={anime} index={anime == 6 ? 1 : 0} />
      <Flips number={5} bg="black" anime={anime} index={anime == 5 ? 1 : 0} />
      <Flips number={4} bg="black" anime={anime} index={anime == 4 ? 1 : 0} />
      <Flips number={3} bg="black" anime={anime} index={anime == 3 ? 1 : 0} />
      <Flips number={2} bg="black" anime={anime} index={anime == 2 ? 1 : 0} />
      <Flips number={1} bg="black" anime={anime} index={anime == 1 ? 1 : 0} />
      <Flips number={0} bg="black" anime={anime} index={anime == 0 ? 1 : 0} />
    </div>
  );
};

export default Flipclock;
