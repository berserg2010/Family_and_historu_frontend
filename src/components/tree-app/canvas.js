import React, { Fragment, useCallback, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import RenderTree from './render-tree';


const styles = (theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit * 2,
    marginLeft: 0,
  },
});

const Canvas = () => {

  const [viewPort, setViewPort] = useState({ width: 0, height: 0 });
  const [viewBox, setViewBox] = useState([0, 0, 0, 0]);

  const getRef = useCallback((node) => {
    if (node !== null) {
      let currentWidth = node.getBoundingClientRect().width;

      setViewPort({ width: currentWidth, height: currentWidth * 0.75 });
      setViewBox([0, 0, currentWidth, currentWidth * 0.75]);
    }
  }, []);

  const handleResize = (element) => () => {
    let currentWidth = element.getBoundingClientRect().width;

    setViewPort({ width: currentWidth, height: currentWidth * 0.75 });
    setViewBox([0, 0, currentWidth, currentWidth * 0.75]);
  };

  window.onload = handleResize(document.getElementById('tree-element'));

  useEffect(() => {

    const element = document.getElementById('tree-element');
    window.addEventListener('resize', handleResize(element));

    return () => {
      window.removeEventListener('resize', handleResize(element));
    }
  }, []);

  const svgStyle = {
    border: '1px solid crimson',
  };

  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Tree {viewPort.width} {viewPort.height} {viewBox.toString()}
      </Typography>

      {/*<div id="tree-element" ref={(node) => getRef(node)}>*/}
      <div id="tree-element" ref={getRef}>
        <Paper>
          <svg
            id="tree-family"
            width={viewPort.width} height={viewPort.height}
            viewBox={viewBox}
            baseProfile="full"
            style={svgStyle}
          >
            <title>Tree family</title>

            <desc>Tree family</desc>

            <defs></defs>

            <RenderTree sizeBlock={viewPort} setSizeBlock={setViewPort} id={1} viewBox={viewBox}/>

          </svg>
        </Paper>
      </div>
    </Fragment>
  )
};

Canvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  withStyles(styles)(Canvas)
);
