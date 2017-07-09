import React, { Component } from 'react'
import s from './Toolbar.css'

class Toolbar extends Component{
  render(){
    return(
      <div className={`${s.footer_bar}`}>
        <div className={`${s.item_toolbar}`}>
          <i className={`material-icons ${s.icon_toobar}`}>favorite_border</i>
        </div>
        <div className={`${s.item_toolbar}`}>
          <i className={`material-icons ${s.icon_toobar}`}>notifications_none</i>
        </div>
        <div className={`${s.item_toolbar}`}>
          <i className={`material-icons ${s.icon_toobar}`}>translate</i>
        </div>
        <div className={`${s.item_toolbar}`}>
          <i className={`material-icons ${s.icon_toobar}`}>warning</i>
        </div>
        <div className={`${s.item_toolbar}`}>
          <i className={`material-icons ${s.icon_toobar}`}>share</i>
        </div>
      </div>
    )
  }
}

export default Toolbar