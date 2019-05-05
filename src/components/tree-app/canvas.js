import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import RenderPerson from './render-person';
import RenderFamily from './render-family';


const mockTree = {
  person: {
    id: 1,
    birthSet: [
      {
        gender: 'M',
        surname: "Пушкин",
        givname: "Александр",
        childBirthSet: [
          {
            family: {
              id: 1
            }
          }
        ]
      }
    ],
    marriageHusbandSet: [
      {
        family: {
          id: 2
        }
      }
    ],
    marriageWifeSet: []
  }
};

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

  // const gameHeight = 1200;
  // const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  const viewBox = [0, 0, 400, 400];

  const svgStyle = {
    border: '1px solid crimson',
  };

  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Tree
      </Typography>

      <svg
        id="tree-family"
        width={400} height={400}
        viewBox={viewBox}
        baseProfile="full"
        style={svgStyle}
      >
        <title>Tree family</title>

        <desc>
          Tree family
        </desc>

        <defs></defs>

        <RenderPerson data={mockTree}/>

        <RenderFamily/>

      </svg>

    </Fragment>
  )
};

Canvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  withStyles(styles)(Canvas)
);
