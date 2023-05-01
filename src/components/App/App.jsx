import React, { Component } from 'react';
import { fetchImages } from 'services/api';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
  };
  handleSubmit = async value => {
    const imageArray = await fetchImages(value);
    this.setState({ images: { imageArray } });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
