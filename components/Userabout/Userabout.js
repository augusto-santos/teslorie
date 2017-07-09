import React, { Component } from 'react'
import s from './Userabout.css'

class Userabout extends Component{
 
  constructor(props){
    super(props)

    this.handleAvatar = this.handleAvatar.bind(this)
  }
 
  handleAvatar(avatar){
    return `http://0.0.0.0:5000/api/containers/avatares/download/${avatar}`
  }

  render(){
    return(
      <div className={`${s.user_about}`}>
        <div className={`${s.container_userabout}`}>
          <div className={`${s.userabout}`}>
            <img src={this.handleAvatar(this.props.avatar)}
              alt={this.props.username} />
            <h4>{this.props.username}</h4>
          </div>
          <div className={`${s.userabout_history}`}>
            <p>
              {this.props.children}
            </p>
          </div>
          <div className={`${s.userabout_media}`}>
            <p>follow</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Userabout