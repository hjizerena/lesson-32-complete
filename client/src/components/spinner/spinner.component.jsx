import React from 'react';
import {connect} from 'react-redux';	
import {createStructuredSelector} from 'reselect';
import {SpinnerContainer, SpinnerOverlay} from "./spinner.styles";

const Spinner = () => (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
);

export default Spinner;