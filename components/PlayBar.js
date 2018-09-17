import * as React from 'react';
import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';

/**
 * Wrapper component that allows playing and pausing of content
 */

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      state: props.states[props.initialIndex || 0],
    };
  }

  onBack = () => {
    if (this.state.index === 0) {
      clearInterval(this.interval);
      return;
    }
    const index = this.state.index - 1;
    this.setNewState(index);
  };

  onForward = () => {
    if (this.state.index >= this.props.states.length - 1) {
      clearInterval(this.interval);
      return;
    }
    const index = this.state.index + 1;
    this.setNewState(index);
  };

  onAutoPlay = () => {
    if (this.interval) return;
    this.interval = setInterval(() => {
      this.onForward();
    }, this.props.stepInterval || 1000);
  };

  setNewState = index => {
    this.setState({
      index,
      state: this.props.states[index],
    });
  };

  resetState = () => {
    const { states, initialIndex } = this.props;
    clearInterval(this.interval);
    this.setState({
      index: 0,
      state: states[initialIndex || 0],
    });
  };

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.onBack}>Back</Button>
          <Button onClick={this.onForward}>Forward</Button>
          <Button onClick={this.onAutoPlay}>Autoplay</Button>
          <Button onClick={this.resetState}>Reset</Button>
        </ButtonGroup>
        {this.props.children(this.state.state)}
      </div>
    );
  }
}

export default PlayBar;
