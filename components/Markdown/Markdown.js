import React, { Component } from 'react'
import s from './Markdown.css'

class Markdown extends Component{
	render(){
		return(
			<div className={`${s.wrapperMarkdown}`}>
				<div dangerouslySetInnerHTML={{ __html: this.props.Content }} />
			</div>
		)
	}
}

export default Markdown