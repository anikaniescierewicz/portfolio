import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import { greyColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
  },
  title: {
    color: greyColor,
    paddingBottom: "0.5em",
  },
  text: {
    fontWeight: 300,
  },
}))

export default function ProjectHeader(props) {
  
  const classes = useStyles();
  
  return (
    <>
      <Grid
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle2" className={classes.title}>
            PROJECT
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            {covers[props.index].project}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} zeroMinWidth>
          <Typography variant="subtitle2" className={classes.title}>
            DETAILS
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            {covers[props.index].details}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

ProjectHeader.propTypes = {
  index: PropTypes.number.isRequired,
};