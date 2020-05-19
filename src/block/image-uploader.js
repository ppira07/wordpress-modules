import React from 'react';
const { Button } = wp.components;
const { MediaUpload } = wp.editor;
const { Fragment } = wp.element;

export default class ImageUploader extends React.Component {
  render() {
    const {
      onSelectImage,
      imageID,
      imageURL,
      onRemoveImage,
      uploadText,
      removeText,
      value
    } = this.props;

    return (
      <Fragment>
        <MediaUpload
          onSelect={onSelectImage}
          type="image"
          value={value}
          render={({ open }) => (
            <Button className={imageID ? 'image-button' : 'button button-large'} onClick={open}>
              {!imageID ? uploadText : <img src={imageURL} alt='画像' style={{ display: 'flex', height: '100px' }} />}
            </Button>
          )}
        />
        {!imageID ? '' : <Button className={'delete-image button button-large'} onClick={onRemoveImage}>{removeText}</Button>}
      </Fragment>
    )
  }
}