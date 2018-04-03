import React, { Component } from 'react';

import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';

class ResponsiveModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    var imgList = [];
    var data = [
      {
        imgSrc: 'http://bulma.io/images/placeholders/128x128.png'
      },
      {
        imgSrc: 'http://bulma.io/images/placeholders/128x128.png'
      },
      {
        imgSrc: 'http://bulma.io/images/placeholders/128x128.png'
      },
      {
        imgSrc: 'http://bulma.io/images/placeholders/128x128.png'
      },
      {
        imgSrc: 'http://bulma.io/images/placeholders/128x128.png'
      },
      {
        imgSrc: ''
      },
    ]

    for (var i in data){
      imgList.push(<li><img src={data[i].imgSrc} /></li>);
    }

    return (
      <div className="example">
        <h1>ReactResponsiveModal</h1>
        <button className="btn btn-action" onClick={this.onOpenModal}>Open</button>{' '}
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
          <ul>{imgList}</ul>
        </Modal>
      </div>
    );
  }
}


export default ResponsiveModal;