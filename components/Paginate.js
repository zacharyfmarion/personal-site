import * as React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

import Button from './Button';

/**
 * Component for paginating data. Calls the child function with
 * the current page number and an array of the currently active items
 *
 * <Paginate items={[]} initialPage={0} itemsPerPage={5}>
 *  ({ activeItems, pageNumber }) => activeItems.map(item => <div>{item.title}</div>)
 * </Paginate>
 */
class Paginate extends React.Component {
  static defaultProps = {
    backText: 'back',
    forwardText: 'forward',
    initialPage: 0,
    itemsPerPage: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      pageNumber: props.initialPage || 0,
    };
  }

  onForward = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  onBack = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  get canGoForward() {
    const { items, itemsPerPage } = this.props;
    return items.length > (this.state.pageNumber + 1) * itemsPerPage;
  }

  // return an array of the currently active items
  get activeItems() {
    const { itemsPerPage, items } = this.props;
    const { pageNumber } = this.state;
    const pageStart = pageNumber * itemsPerPage;
    return items.slice(pageStart, pageStart + itemsPerPage);
  }

  render() {
    const { children, backText, forwardText } = this.props;
    const { pageNumber } = this.state;
    return (
      <React.Fragment>
        {children({ activeItems: this.activeItems, pageNumber })}
        <Flex justifyContent="center">
          {pageNumber !== 0 && (
            <BackButton onClick={this.onBack} className="Paginate-button">
              {backText}
            </BackButton>
          )}
          {this.canGoForward && (
            <Button onClick={this.onForward} className="Paginate-button">
              {forwardText}
            </Button>
          )}
        </Flex>
      </React.Fragment>
    );
  }
}

const BackButton = styled(Button)`
  margin-right: 10px;
`;

export default Paginate;
