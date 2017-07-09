import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Markdown from '../../components/Markdown'
// import io from 'socket.io-client'
import { loadPost, loadFileMd } from '../../actions/Lories/action'
import s from './Lore.css'

/** Components */
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Userabout from '../../components/Userabout'
import Footer from '../../components/Footer'

// const socket = io()

class Lore extends Component{

	componentDidMount(){
		this.props.loadPost(3)
		document.title = this.props.post.title
	}

	render(){
		const { user, post, content } = this.props
		return(
			<div className={`${s.container}`}>
				<Header />
				<Posts 
					serie={post.serie}
					title={post.title}
					date={post.atCreated}
					viewers={post.viewrs}
					like={5}
					commentary={post.commentaries}>
						
						<Markdown Content={content} />
					</Posts>
				<Userabout
					avatar={user.avatar}
					username={user.username}>
				<p>
					mesmo tendo recebido a chave para teste de Morrowind no PTS, eu optei em não fazer
					as quests nesse momento, apenas explorei uma parte do mapa e testei os “nerfs”
				</p>					
				</Userabout>
				<div className="commentary">
					<div className="container_commentary">
						<textarea name="commentary" cols="30" rows="10">teste</textarea>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.lore.user,
	post: state.lore.post,
	content: state.lore.content
})

const mapDispatchToProps = (dispatch) => 
	bindActionCreators({ loadPost, loadFileMd }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Lore)

/** #262d3a */

// <div className={`${s.post_tags}`}>
// 	{post.tags.map(tag => {
// 		return (
// 			<div className={`${s.tags}`} key={tag}>{tag}</div>
// 		)
// 	})}
// </div>