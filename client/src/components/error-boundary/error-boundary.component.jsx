import React from 'react';
import {connect} from 'react-redux';	
import {createStructuredSelector} from 'reselect';
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasErrored: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
          <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
            <ErrorImageText>Diese Seite ist leider nicht verfügbar. Der Hund hat sie gefressen!</ErrorImageText>
          </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;