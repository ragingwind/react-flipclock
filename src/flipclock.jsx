import React, { useRef, useEffect, useState } from 'react';

const iterations = 1;

const Flips = ({ anime, number, index, vis }) => {
  useEffect(() => {
    var keyframes = [
      {
        transform: 'perspective(200px) rotateX(0deg)',
        // zIndex: 3
        // opacity: '1',
        // offset: 0
      },
      {
        transform: 'perspective(200px) rotateX(-90deg)'
        // offset: 0.4
      },
      {
        transform: 'perspective(200px) rotateX(-180deg)',
        // zIndex: 0
        
      }
    ];
    var keyframes2 = [
      // {
      //   transform: 'perspective(200px) rotateX(180deg)',
      //   // zIndex: 3,
      //   // opacity: '1',
      //   // offset: 0
      // },
      {
        transform: 'perspective(200px) rotateX(90deg)'
        // offset: 0.4
      },
      {
        transform: 'perspective(200px) rotateX(0deg)',
        // zIndex: 0,
        // opacity: 0.0,
        // offset: 0
      }
    ];
    var timing = {
      duration: 1000,
      iterations: iterations,
      easing: 'linear',
      fill: 'forwards',
      direction: 'alternate'
    };
    if (anime === 'both') {
      flip.current.animate(keyframes, timing);
    }

    if (anime === 'bottom' || anime === 'both') {
      setTimeout(() => {
        timing.fill = 'both';
        flip2.current.animate(keyframes2, timing);
      }, 500);
    }
  }, [flip, flip2]);

  const flip = useRef(null);
  const flip2 = useRef(null);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '37px',
        height: '50px',
        lineHeight: '50px',
        color: '#0d0d0d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: index
      }}
    >
      <div
        ref={flip}
        className="up"
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          transformOrigin: '50% 100%',
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '50%',
          backfaceVisibility: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <div
          className="inn"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '200%',
            color: 'white'
          }}
        >
          {number}
        </div>
      </div>
      <div
        ref={flip2}
        className="down"
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          transformOrigin: '50% 0',
          bottom: 0,
          textAlign: 'center',
          width: '100%',
          height: '50%',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        <div
          className="inn"
          style={{
            display: 'flex',
            position: 'absolute',
            left: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            // textAlign: 'center',
            width: '100%',
            height: '200%',
            color: 'white'
          }}
        >
          {number}
        </div>
      </div>
    </div>
  );
};

const Flipclock = () => {
  const [front, setFront] = useState(2)
  const [backAnime, setBackAnime] = useState('none');
  const style = {
    height: '116px',
    width: '460px',
    position: 'relative'
  };

  const numbers = [...Array(10).keys()];
  console.log(numbers);

  setTimeout(() => {
    setBackAnime('bottom');
  }, 1000)
  return (
    <div style={style}>
      <Flips number={1} anime={backAnime} index={0} />
      <Flips number={0} anime={'both'} />
      {/* <Flips number={2} index={1} />
      <Flips number={3} index={1} />
      <Flips number={4} index={1} />
      <Flips number={5} index={1} />
      <Flips number={6} index={1} />
      <Flips number={7} index={1} />
      <Flips number={8} index={1} />
      <Flips number={9} index={1} /> */}
    </div>
  );
};

export default Flipclock;
