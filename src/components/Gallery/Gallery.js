import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.css';



class Gallery extends React.Component {

  render() {

    var data = this.props.data;
    var gallery_template = data.map(function(item, index){
      return(
        <div key={index} className={s[item.class]}>
          <a href="catalog"><img src={item.img} alt={item.alt} className={s.gallery_photo} /></a>
          <div className={s.gallery_photo__caption}>{item.title}</div>
        </div>
      )
    })

    return (
      <div id='products' className={s.gallery}>
        <h1 className={s.gallery__title}>Краще один раз подивитись</h1>
        <div className={s.gallery__subtitle}>Фото проектів з нашого <b>instagram</b></div>
        <div className={s.gallery_block}>
          {gallery_template}
        </div>
        <a href='catalog' className={s.gallery__button}>Всі проекти</a>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Gallery);