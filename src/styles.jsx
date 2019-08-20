export default {
  container: {
    height: '116px',
    width: '460px',
    position: 'relative'
  },
  outter: {
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
    zIndex: 1 // index
  },
  upper: {
    position: 'absolute',
    backgroundColor: 'black',
    transformOrigin: '50% 100%',
    top: 0,
    width: '100%',
    height: '50%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 2,
    overflow: 'hidden',
  },
  letter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '200%',
    color: 'white'
  },
  bottom: {
    position: 'absolute',
    backgroundColor: 'black',
    // transformOrigin: '50% 0',
    transformOrigin: '50% 100%',
    bottom: 0,
    top: 0,
    textAlign: 'center',
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    zIndex: 1
  },
  bottom2: {
    position: 'absolute',
    backgroundColor: 'black',
    transformOrigin: '50% 100%',
    transform: 'rotateX(-180deg)',
    bottom: 0,
    top: 0,
    textAlign: 'center',
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    zIndex: 0
  },
  letter2: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    // transformOrigin: 'bottom',
    transform: 'rotate3d(1, 0, 0, 180deg)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '200%',
    color: 'white'
  }
};
