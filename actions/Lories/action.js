import { cnx } from '../../core/api'
import md from '../../components/Markdown/utils/markdown-parser'

import { LOAD_MDFILE, LOAD_USER_POST, LOADED_POST } from './constants'

/** FILE Markdown of Post */
export const loadFileMd = ( file ) => {
	return dispatch => {
		cnx.get(`/containers/posts/download/${file}`)
			.then(resp => dispatch({
				type: LOAD_MDFILE,
				payload: md(resp.data)
			}))
	}
}
/** USER Info of Post */
export const loadUserPost = ( id ) => {
	return dispatch => {
		cnx.get(`/Writers/${id}`)
			.then(resp => dispatch({
				type: LOAD_USER_POST,
				payload: resp.data
			}))
	}
}
/** Post itself */
export const loadPost = ( id ) => {
	return dispatch => {
		cnx.get(`/Lories/${id}`)
			.then(resp => dispatch({
				type: LOADED_POST,
				payload: resp.data
			}))
			.then(res => dispatch(
				loadUserPost(res.payload.writerId),
				dispatch(loadFileMd(res.payload.content_md))
				// console.log(res.payload.writerId)
			))
	}
}