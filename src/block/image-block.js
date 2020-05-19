import ImageUploader from './image-uploader.js';

const { registerBlockType } = wp.blocks;

const imageEdit = (props) => {
  const { setAttributes } = props;
  const {
    imgOneID,
    imgOneURL,
  } = props.attributes;

  const onSelectImageOne = (media) => {
    setAttributes({
      imgOneURL: media.url,
      imgOneID: media.id,
    });
  };

  const onRemoveImageOne = () => {
    setAttributes({
      imgOneURL: '',
      imgOneID: null,
    });
  };

  return (
    <ImageUploader
      imageID={imgOneID}
      imageURL={imgOneURL}
      onSelectImage={onSelectImageOne}
      onRemoveImage={onRemoveImageOne}
      uploadText={"画像アップロード"}
      removeText={"画像削除"}
      value={imgOneID}
    />
  )
}

const imageSave = (props) => {
  const {　imgOneURL　} = props.attributes;

  return (
    <img src={imgOneURL} alt=""/>
  )
}

registerBlockType('myblock/image-block', {
  title: '画像アップロード',
  icon: 'share-alt',
  description: '画像アップロードモジュール',
  category: 'common',
  keywords: ['画像', 'image'],
  attributes: {
    imgOneID: {
      type: 'number',
    },
    imgOneURL: {
      type: 'string',
    },
  },

  edit: imageEdit,
  save: imageSave,
})