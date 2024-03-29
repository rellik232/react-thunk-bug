// import React from 'react'
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions';
// class PostList extends React.Component
// {
	// componentDidMount()
	// {
		// console.log("insideDidMount",this.props)
		// this.props.fetchPosts();
	// }
	// render()
	// {
		// console.log("insideRender",this.props.posts)
		// return <div> Postlist </div>
	// }
// }
// const mapStateToProps = (state) => {
	// return {posts:state.posts}
// }
// export default connect(mapStateToProps,{fetchPosts})(PostList);


import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions'
 
class PostList extends React.Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render(){
        console.log(this.props.posts)
        return <div>Hellooo</div>
    }
}
const mapStateToProps = (state) => {
    return {posts: state.posts}
}
export default connect(mapStateToProps, {fetchPosts})(PostList);