import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bulma-components/full';

class OpenBulmaModal extends Component {
    static propTypes = {
      modal: PropTypes.object,
      children: PropTypes.node.isRequired,
    }
  
    static defaultProps = {
      modal: {},
    }
  
    state = {
      show: false,
    }
  
    open = () => this.setState({ show: true });
    close = () => this.setState({ show: false });
  
    render() {
      return (
        <div>
          <Button onClick={this.open}>Open</Button>
          <Modal show={this.state.show} onClose={this.close} {...this.props.modal}>
            {this.props.children}
          </Modal>
        </div>
      );
    }
}

export default OpenBulmaModal;