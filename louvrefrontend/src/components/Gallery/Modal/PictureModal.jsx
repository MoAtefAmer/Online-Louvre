import React, { Component } from 'react';
import { Image, Modal } from 'semantic-ui-react';

import './PictureModal.css';
import close from '../../../Assets/details/close.png';

export default class PictureModal extends Component {
  state = { trigger: false };
  render() {
    return (
      <Modal
        basic
        centered={false}
        closeOnDimmerClick
        closeOnDocumentClick
        onOpen={() => this.props.openModal}
        open={this.props.trigger}
        // trigger={this.props.trigger}
        size="large"
        dimmer="blurring"
      >
        <img
          onClick={this.props.openModal}
          className="closeButton"
          src={close}
          alt=""
        />

        <Modal.Header image>
          <Image src={this.props.imageUrl} size="massive" />
        </Modal.Header>

        <Modal.Content>
          <div className="modal">
            <p className="titleModal">{this.props.name}</p>
            <div className="desc">{this.props.desc}</div>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}
