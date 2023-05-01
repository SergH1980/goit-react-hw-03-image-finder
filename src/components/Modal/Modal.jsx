import React, { Component } from 'react';
import { Overlay, ModalImage } from './Modal.styled';

export class Modal extends Component {
  //   componentDidMount() {
  //     window.addEventListener('keydown', this.handleKeyDown);
  //   }
  //   componentWillUnmount() {
  //     window.removeEventListener('keydown', this.handleBackdropeClick);
  //     }

  render() {
    return (
      <Overlay>
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>
    );
  }
}
