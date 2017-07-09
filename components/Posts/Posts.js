import React, { Component } from 'react'
import Toolbar from './components/Toolbar'
import s from './Posts.css'

class Posts extends Component{
  render(){
    return(
      <div className={`${s.wrapper}`}>
        <div className={`${s.post_info}`}>
          <div className={`${s.post_title}`}>
            <h4>{this.props.serie}</h4>
            <h2>{this.props.title}</h2>	
          </div>
          <div className={`${s.info_post}`}>
            <div className={`${s.date}`}>Postado em {this.props.date}</div>
            <div className={`${s.info_data}`}>
              <i className={`material-icons ${s.icon}`}>visibility</i>{this.props.viewers}
            </div>
            <div className={`${s.info_data}`}>
              <i className={`material-icons ${s.icon}`}>favorite</i>{this.props.like}
            </div>
            <div className={`${s.info_data}`}>
              <i className={`material-icons ${s.icon}`}>forum</i>{this.props.commentary}
            </div>
          </div>
        </div>
        {this.props.children}
        <Toolbar />
      </div>
    )
  }
}

export default Posts