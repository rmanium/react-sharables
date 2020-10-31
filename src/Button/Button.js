import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {},
  }),
);

const TestButton = (props) => {
  const classes = useStyles();
  const { text = '' } = props;
  return (
    <Button className={classes.root} variant="contained">
      {text}
    </Button>
  );
};

TestButton.propTypes = {
  text: PropTypes.string,
};

export default TestButton;
