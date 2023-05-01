import React, { Component } from 'react';
import { ImageCard, ImageCardImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
// import { instance } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = e => {
    console.log(e);
    this.setState = ({ showModal }) => {};
  };

  render() {
    const { src, alt, largeImage } = this.props;
    return (
      <ImageCard onClick={this.toggleModal} className="gallery-item">
        <ImageCardImage src={src} alt={alt} />
        {this.state.showModal && (
          <Modal>
            <img src={largeImage} alt={alt} />
          </Modal>
        )}
      </ImageCard>
    );
  }
}
