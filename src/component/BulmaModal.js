import React, { Component } from 'react';
import { Modal, Button, Media, Level, Content, Image } from 'react-bulma-components/full';

class BulmaModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            modal: {},
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
        const { open, modal } = this.state;


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
            imgList.push(<li><Image src={data[i].imgSrc} /></li>);
        }

        return (
            <div>
                <h1>BulmaModal</h1>
                <Button onClick={this.onOpenModal}>Open</Button>
                <Modal show={this.state.open} onClose={this.onCloseModal} modal={{ closeOnBlur: true, showClose: false }}>
                    <Modal.Card>
                        <Modal.Card.Head>
                            <Modal.Card.Title>
                            Title
                            </Modal.Card.Title>
                        </Modal.Card.Head>
                        <Modal.Card.Body>
                        <Media>
                            <Media.Item renderAs="figure" position="left">
                                <Image
                                renderAs="p"
                                size={64}
                                alt="64x64"
                                src="http://bulma.io/images/placeholders/128x128.png"
                                />
                            </Media.Item>
                            <Media.Item>
                                <Content>
                                    <p>
                                    <strong>
                                    John Smith
                                    </strong>
                                    
                                    <small>
                                    @johnsmith
                                    </small>
                                    
                                    <small>
                                    31m
                                    </small>
                                    <br/>
                                    If the children of the Modal is a card, the close button will be on the Card Head instead than the top-right corner You can also pass showClose = false to Card.Head to hide the close button
                                    </p>
                                    <ul>{imgList}</ul>
                                </Content>
                                <Level breakpoint="mobile">
                                    <Level.Side>
                                        <Button link>
                                        Like
                                        </Button>
                                        <Button link>
                                        Share
                                        </Button>
                                    </Level.Side>
                                </Level>
                            </Media.Item>
                        </Media>
                        </Modal.Card.Body>
                        <Modal.Card.Foot style={{alignItems: "center", justifyContent: "center"}}>
                            <p>
                            Lorem Ipsum...
                            </p>
                        </Modal.Card.Foot>
                    </Modal.Card>
                </Modal>
            </div>
        );
    }
}


export default BulmaModal;