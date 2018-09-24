import * as React from 'react';

const breakpoints = {
  mobile: 512,
  tablet: 768,
};

// Media query in react - note that this should be used as a last resort
// and is not a great option as SSR does not really work with it
// TODO: test this
class Media extends React.Component {
  state = {
    width: 1000,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  get screenType() {
    const { width } = this.state;
    if (width <= breakpoints.mobile) return 'mobile';
    else if (width <= breakpoints.tablet) return 'tablet';
    return 'desktop';
  }

  render() {
    const { width } = this.state;
    return this.props.children({ width, type: this.screenType });
  }
}

export default Media;
