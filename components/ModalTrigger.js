import * as React from 'react';

class ModalTrigger extends React.Component {
  state = {
    open: false,
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { children, modal } = this.props;
    // Clone the child element, passing an onClick prop
    const child = React.Children.only(children);
    const clonedChild = React.cloneElement(child, {
      onClick: this.openModal,
    });
    const clonedModal = React.cloneElement(modal, {
      onClose: this.closeModal,
    });
    return (
      <React.Fragment>
        {this.state.open && clonedModal}
        {clonedChild}
      </React.Fragment>
    );
  }
}

export default ModalTrigger;
