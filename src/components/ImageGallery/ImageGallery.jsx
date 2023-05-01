import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
// const Status = {
//   IDLE: `idle`,
//   PENDING: `pending`,
//   RESOLVED: `resolved`,
//   REJECTED: `rejected`,
// };

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  render() {
    const { images } = this.props;
    console.log(images);
    if (images.length === 0) {
      return <div>Empty</div>;
    } else if (images.imageArray.hits.length > 0) {
      const imageItems = images.imageArray.hits;
      return (
        <ImageList>
          {imageItems.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                src={image.webformatURL}
                alt={image.tags}
                largeImage={image.largeImageURL}
              />
            );
          })}
        </ImageList>
      );
    }
  }
}

//   <ImageGalleryItem key={image.id} card={image} />
