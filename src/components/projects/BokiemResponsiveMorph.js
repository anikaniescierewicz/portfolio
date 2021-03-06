import React, { useState } from "react";
import PropTypes from "prop-types";

import { useMorph } from 'react-morph';
import { isMobileOnly } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";
import MySwitch from "./MySwitch";

const useStyles = makeStyles(() => ({
  morphDiv: {
    display: "flex",
    justifyContent: "center",
    overflow: 'hidden',
  },
}))

export default function BokiemResponsiveMorph(props) {
  const classes = useStyles();
  const morph = useMorph();
  const [toggle, setToggle] = useState(true);
  const name = props.name;

  const toggleSwitch = () => setToggle(!toggle);
  
  return (
    <>
      <FadeIn>
        <div>
          <Grid item xs={12} className={classes.morphDiv}>
            {toggle && 
              <img
                {...morph}
                src={process.env.PUBLIC_URL + '/projects/bokiem/' + covers[name].url3}
                alt="mobile"
                height={isMobileOnly ? "150" : "300"}
              />
            }
            {!toggle && 
              <img
                {...morph}
                src={process.env.PUBLIC_URL + '/projects/bokiem/' + covers[name].url2}
                alt="desktop"
                height={isMobileOnly ? "150" : "300"}
              />
            }
          </Grid>
          <Grid container justify="center">
            <MySwitch toggle={toggle} toggleSwitch={toggleSwitch} />
          </Grid>
        </div>
      </FadeIn>
    </>
  )
}

BokiemResponsiveMorph.propTypes = {
  name: PropTypes.string.isRequired,
};