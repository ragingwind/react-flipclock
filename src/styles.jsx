const flex = {
  display: 'flex',
  justifyContent: 'center'
};

const fullWidth = height => {
  return {
    width: '100%',
    height: height
  };
};

const font = {
  lineHeight: '50px',
  fontSize: '150px',
  color: '#efefef'
};

const position = pos => {
  const figures = pos.split(' ');
  const position = {
    position: 'absolute'
  };

  figures[0] && figures[0] !== 'null' && (position['top'] = figures[0]);
  figures[1] && figures[1] !== 'null' && (position['bottom'] = figures[1]);
  figures[2] && figures[2] !== 'null' && (position['left'] = figures[2]);

  return position;
};

export default {
  container: {
    ...fullWidth('100%'),
    position: 'relative',
    willChange: 'transform'
  },
  outter: {
    ...flex,
    ...fullWidth('100%'),
    ...font,
    ...position('0 null 0')
  },
  upper: {
    ...flex,
    ...fullWidth('50%'),
    ...position('0'),
    alignContent: 'center',
    zIndex: 2,
    overflow: 'hidden',
    transformOrigin: '50% 100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'black',
    borderBottom: 'solid 1px white'
  },
  reverse: {
    ...fullWidth('50%'),
    ...position('0 0'),
    zIndex: 1,
    overflow: 'hidden',
    transformOrigin: '50% 100%',
    backgroundColor: 'black',
    borderBottom: 'solid 1px white'
  },
  bottom: {
    ...fullWidth('50%'),
    ...position('0 0'),
    zIndex: 0,
    transformOrigin: '50% 100%',
    transform: 'rotateX(-180deg)',
    overflow: 'hidden',
    backgroundColor: 'black',
    borderBottom: 'solid 1px white'
  },
  content: {
    ...flex,
    ...fullWidth('200%'),
    alignItems: 'center'
  },
  reverseContent: {
    ...flex,
    ...fullWidth('200%'),
    ...position('0 0 0'),
    alignItems: 'center',
    transform: 'rotate3d(1, 0, 0, 180deg)'
  }
};
