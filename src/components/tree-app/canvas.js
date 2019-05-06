import React, { Fragment, useCallback, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import RenderPerson from './render-person';
import RenderFamily from './render-family';


const mockTree = {
  person: {
    __typename: 'PersonType',
    id: 1,
    birthSet: [
      {
        gender: 'M',
        surname: "Пушкин",
        givname: "Александр",
        childBirthSet: [
          {
            family: {
              __typename: 'FamilyType',
              id: 1
            }
          }
        ]
      }
    ],
    marriageHusbandSet: [
      {
        family: {
          __typename: 'FamilyType',
          id: 2
        }
      }
    ],
    marriageWifeSet: []
  }
};

const stepDown = (item) => {
  if (item.__typename === 'PersonType') {
    const { birthSet } = item;
    const { gender } = birthSet[0];

    if (gender === 'F'){
      const { marriageWifeSet } = item;
      const { family: { id } } = marriageWifeSet[0];

    } else {
      const { marriageHusbandSet } = item;
      const { family: { id } } = marriageHusbandSet[0];
    }

  // get query family
  }

  if (item.__typename === 'FamilyType'){

  }

  // get query person
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

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = document.getElementById('tree-element');

    const handleResize = () => {
      setWidth(element.getBoundingClientRect().width);
      setHeight(width * 0.75)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [width]);

  const getRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
      setHeight(width * 0.75)
    }
  }, [width]);


  const svgStyle = {
    border: '1px solid crimson',
  };

  const viewBox = [0, 0, width, height];

  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Tree {width}
      </Typography>

      <div ref={(node) => getRef(node)}>
        <Paper id="tree-element">
          <svg
            id="tree-family"
            width={width} height={height}
            viewBox={viewBox}
            baseProfile="full"
            style={svgStyle}
          >
            <title>Tree family</title>

            <desc>Tree family</desc>

            <defs></defs>

            <RenderPerson data={mockTree} width={width} height={height}/>

            {/*<RenderFamily/>*/}

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
