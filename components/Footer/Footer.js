import React, { Component } from 'react'
import s from './Footer.css'

class Footer extends Component{
  render(){
    return(
      <footer className={`${s.footer_wrapper}`}>
        <div className={`${s.footer_logo}`}>
          <h1>The Elder Scrolls</h1>
          <h4>Lories</h4>
        </div>
        <div className={`${s.footer_info}`}>
          <ul>
            <li><a href="#">Lories</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Histories</a></li>
            <li><a href="#">Série</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          <p>All corpright reserved to The Elder Scrolls Lories© 2017</p>
        </div>
      </footer>
    )
  }
}

export default Footer