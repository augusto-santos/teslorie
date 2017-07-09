import React, { Component } from 'react'
import s from './Header.css'

class Header extends Component {
  render(){
    return(
      <header>
        <div className={`${s.header_container}`}>
          <div className={`${s.item_header}`}>
            <i className={`material-icons`}>menu</i>
          </div>
          <div className={`${s.item_header}`}>
            <i className={`material-icons`}>invert_colors</i>
          </div>
        </div>
      </header>
    )
  }
}

export default Header