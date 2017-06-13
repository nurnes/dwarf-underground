import React, {Component} from 'react'
import './App.css'

class CommentSection extends Component{
    constructor() {
        super()
        this.state = {
            comments: [],
        }
    }

     handleSubmit(ev) {
        ev.preventDefault()
        const comments = [...this.state.comments]
        comments.push(this.commentField.value)
        this.setState({ comments })
        ev.currentTarget.reset()
    }

    renderComment(comment, i){
        return <li key={i}>{comment}</li>
    }

    render (){
        return (
            <div style={{display: ''}}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Write your comment..." ref={(input) => this.commentField = input}/>      
                </form>
                <ul class="comments">
                    {this.state.comments.map(this.renderComment)}
                </ul>
            </div>
        )
    }
}

export default CommentSection