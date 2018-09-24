import * as React from 'react';

class ScrollOffset extends React.Component {
  state = {
    offset: 0,
  };

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ offset: window.scrollY });
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return this.props.children(this.state.offset);
  }
}

export default ScrollOffset;
