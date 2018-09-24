import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import equal from 'fast-deep-equal';

import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';
import media from 'utils/media';

// icons
import BackIcon from './assets/left-arrow.svg';
import ForwardIcon from './assets/right-arrow.svg';
import ResetIcon from './assets/refresh.svg';
import PlayIcon from './assets/play.svg';
import PauseIcon from './assets/pause.svg';

/**
 * Wrapper component that allows playing and pausing of content
 */

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isPlaying: false,
      state: props.states[props.initialIndex || 0],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!equal(this.props.states, nextProps.states)) {
      clearInterval(this.interval);
      this.setState({
        isPlaying: false,
        state: nextProps.states[nextProps.initialIndex || 0],
      });
    }
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
      this.setState({ isPlaying: false });
      return;
    }
    const index = this.state.index + 1;
    this.setNewState(index);
  };

  onAutoPlay = () => {
    if (this.state.isPlaying) {
      clearInterval(this.interval);
      this.setState({ isPlaying: false });
      return;
    }
    this.setState({ isPlaying: true });
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
      <PlayBarWrapper className={this.props.className}>
        <StyledButtonGroup>
          <Button onClick={this.onBack}>
            <BackIcon />
          </Button>
          <Button onClick={this.onForward}>
            <ForwardIcon />
          </Button>
          <Button onClick={this.onAutoPlay}>
            {this.state.isPlaying ? <PauseIcon /> : <PlayIcon />}
          </Button>
          <Button onClick={this.resetState}>
            <ResetIcon />
          </Button>
        </StyledButtonGroup>
        {this.props.children(this.state.state)}
      </PlayBarWrapper>
    );
  }
}

const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  align-self: flex-end;

  ${media.mobile`
    margin-bottom: 15px;
    width: 100%;

    button {
      display: flex;
      flex: 1 1 auto;
    }
  `};
`;

const PlayBarWrapper = styled(Flex)`
  flex-direction: column;
`;

export default PlayBar;
