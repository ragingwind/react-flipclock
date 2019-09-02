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

const Flip = ({ animate, number, max = 9 }) => {
  const upper = useRef(null);
  const reverse = useRef(null);

  useEffect(() => {
    if (animate === number) {
      upper.current && upper.current.animate(keyframes, timing);
      reverse.current && reverse.current.animate(keyframes, timing);
    }
  }, [animate]);

  return (
    <div style={{ ...styles.outter, zIndex: animate === number ? 1 : 0 }}>
      <div ref={upper} style={styles.upper}>
        <div style={styles.content}>{number}</div>
      </div>
      <div ref={reverse} style={styles.reverse}>
        <div style={styles.reverseContent}>{number < max ? number + 1 : 0}</div>
      </div>
      <div style={styles.bottom}>
        <div style={styles.reverseContent}>{number}</div>
      </div>
    </div>
  );
};

const FlipFront = ({ animate }) => {
  const visible = number => animate === number || animate === number - 1;
  return (
    <div style={styles.container}>
      {visible(5) && <Flip max={5} number={5} animate={animate} />}
      {visible(4) && <Flip max={5} number={4} animate={animate} />}
      {visible(3) && <Flip max={5} number={3} animate={animate} />}
      {visible(2) && <Flip max={5} number={2} animate={animate} />}
      {visible(1) && <Flip max={5} number={1} animate={animate} />}
      {(visible(0) || animate === 5) && <Flip max={5} number={0} animate={animate} />}
    </div>
  );
};

const FlipBack = ({ animate }) => {
  const visible = number => animate === number || animate === number - 1;
  return (
    <div style={styles.container}>
      {visible(9) && <Flip number={9} animate={animate} />}
      {visible(8) && <Flip number={8} animate={animate} />}
      {visible(7) && <Flip number={7} animate={animate} />}
      {visible(6) && <Flip number={6} animate={animate} />}
      {visible(5) && <Flip number={5} animate={animate} />}
      {visible(4) && <Flip number={4} animate={animate} />}
      {visible(3) && <Flip number={3} animate={animate} />}
      {visible(2) && <Flip number={2} animate={animate} />}
      {visible(1) && <Flip number={1} animate={animate} />}
      {(visible(0) || animate === 9) && <Flip number={0} animate={animate} />}
    </div>
  );
};

const getDateTime = () => {
  const split = t => {
    const a = Math.max(Math.floor(t / 10), 0)
    const b = Math.max(t % 10, 0)
    return [a, b]
  };
  const datetime = new Date();
  const h = datetime.getHours();
  const m = datetime.getMinutes();
  const s = datetime.getSeconds();
  return [...split(h), ...split(m), ...split(s)];
};

const Flipclock = () => {
  const [datetime, setDateTime] = useState(getDateTime());
  const sec = t => t - 1 < 0 ? 9 : t - 1
  const sec2 = t => t - 1 < 0 ? 5 : t - 1
  const time = (t, t2) => t === 9 ? (t2 + 1 <= 6 ? t2 + 1 : 0) : t2
  useEffect(() => {
    setTimeout(() => {
      setDateTime(getDateTime());
    }, 1000);
  }, [datetime]);

  return (
    <div style={{ display: 'flex', height: '200px', width: '900px' }}>
      <FlipFront animate={time(datetime[1] - 1, sec2(datetime[0]))} />
      <FlipBack animate={datetime[1] - 1} />
      <FlipFront animate={time(datetime[3] - 1, sec2(datetime[2]))} />
      <FlipBack animate={datetime[3] - 1} />
      <FlipFront animate={time(datetime[5] - 1, sec2(datetime[4]))} />
      <FlipBack animate={sec(datetime[5])} />
    </div>
  );
};

export default Flipclock;
