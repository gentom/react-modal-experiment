import React, { Component } from 'react';
import { Modal, Button, Media, Level, Content, Image } from 'react-bulma-components/full';
import OpenBulmaModal from './OpenBulmaModal';

class BulmaModal extends Component {
    
    render() {
        var imgList = [];
        var data = [
            {
                imgSrc: 'http://bulma.io/images/placeholders/512x512.png'
            },
            {
                imgSrc: 'http://bulma.io/images/placeholders/256x256.png'
            },
            {
                imgSrc: 'http://bulma.io/images/placeholders/256x256.png'
            },
            {
                imgSrc: 'http://bulma.io/images/placeholders/256x256.png'
            },
            {
                imgSrc: 'http://bulma.io/images/placeholders/256x256.png'
            },
            {
                imgSrc: ''
            },
        ]

        for (var i in data){
            imgList.push(<li><Image size={256} src={data[i].imgSrc} /></li>);
        }

        return (
            <div>
                <h1>BulmaModal</h1>
                
                <OpenBulmaModal modal={{ closeOnBlur: true, showClose: false }}>
                    <Modal.Card>
                        <Modal.Card.Head>
                            <Modal.Card.Title>
                            Title
                            </Modal.Card.Title>
                        </Modal.Card.Head>
                        <Modal.Card.Body>
                            <Media>
                                <Media.Item renderAs="figure" position="left">
                                    <ul>{imgList}</ul>
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
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </p>
                                        
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
                </OpenBulmaModal>
            </div>
        );
    }
}


export default BulmaModal;