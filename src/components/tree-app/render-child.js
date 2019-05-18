import React, { useState } from 'react';
import { graphql } from "react-apollo";

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import PersonElemnt from './person-element'
import {getPositionFamily, getPositionHusband} from "./formulas";


const RenderChild = ({ position, childSet }) => {

  return (
    <PersonElemnt position={position} id={childSet[0].birth.person.id}/>
  )
};

export default RenderChild;
