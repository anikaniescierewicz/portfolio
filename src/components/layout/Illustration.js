import React from "react";
//import PropTypes from "prop-types";

import { useSpring, animated } from 'react-spring'
import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    //width: "500px",
    maxHeight: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    overflow: "hidden",
  },
  card: {
    position: "absolute",
    borderRadius: "5px",
    //backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    willChange: "transform",
  },
  card1: { //background
   //minWidth: "30em",
    //minHeight: "30em",
    // width: "100%",
    // height: "100%",
   // maxWidth: "100em",
    //maxHeight: "100em",
    //backgroundImage: "url(https://image.flaticon.com/icons/svg/119/119596.svg)"
  },
  card2: { //sun
    width: "15em",
    height: "15em",
    zIndex: "1",
    opacity: "0.7"
    //backgroundImage: "url(https://image.flaticon.com/icons/svg/789/789395.svg)"
  },
  card3: { //clouds
    height: "5em",
    width: "5em",
    zIndex: "1",
  },
  card4: { //hummingbird
    opacity: "0.8"
  },
  background: {
   //height: "100em",
   width: "30em"
  },
  bag: {
    height: "5em",
  },
  cup: {
    //height: "5em",
    opacity: "0.7",
  },
  sofa: {
    height: "15em"
  },

}))

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 8 + 200}px,0)` //bag
// const trans3 = (x, y) => `translate3d(${x / 6 - 90}px,${y / 6 - 0}px,0)` //cup
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)` //sofa
const trans2 = (x, y) => `translate3d(${x / 10 + 200}px,${y / 10 + 200}px,0)` //bag
const trans3 = (x, y) => `translate3d(${x / 10 - 90}px,${y / 10 - 0}px,0)` //cup
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)` //sofa

export default function Illustration() {
  const classes = useStyles();
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 150, friction: 340 } }))
    return (
      <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        {/* <animated.div className={`${classes.card} ${classes.card1}`} style={{ transform: props.xy.interpolate(trans1) }} > */}
          <SVG
            src={process.env.PUBLIC_URL + "/icons/example-blob-full.svg"} 
            className={classes.background}
            //preProcessor={code => code.replace(/width=".*?"/g, 'width="300px"').replace(/height=".*?"/g, 'height="200px"')}
          />
        {/* </animated.div> */}
        <animated.div className={`${classes.card} ${classes.card2}`} style={{ transform: props.xy.interpolate(trans2) }} >
          <SVG
            src={process.env.PUBLIC_URL + "/icons/example-bagX.svg"} 
            className={classes.bag}
          />
        </animated.div>
        <animated.div className={`${classes.card} ${classes.card3}`} style={{ transform: props.xy.interpolate(trans3) }} >
          <SVG
            src={process.env.PUBLIC_URL + "/icons/cup.svg"} 
            className={classes.cup}
            //preProcessor={code => code.replace(/width=".*?"/g, 'width="50px"').replace(/height=".*?"/g, 'height="50px"')}

          />
        </animated.div>
        <animated.div className={`${classes.card} ${classes.card4}`} style={{ transform: props.xy.interpolate(trans4) }}>
          <SVG
            src={process.env.PUBLIC_URL + "/icons/example-me.svg"} 
            className={classes.sofa}
          />
        </animated.div>
      </div>
    )
  }

