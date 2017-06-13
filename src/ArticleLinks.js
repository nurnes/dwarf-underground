import React, {Component} from 'react'
import './App.css'

class ArticleLinks extends Component{
    constructor() {
        super()
        this.state = {
            comments: [],
            show: false
        }
    }

     handleSubmit(ev) {
        ev.preventDefault()
        const comments = [...this.state.comments]
        comments.push(`${(new Date).getMonth()+1}/${(new Date).getDate()}/${(new Date).getFullYear()+1001} ${(new Date).getHours()}:${(new Date).getMinutes()}:${(new Date).getSeconds()} "${this.commentField.value}"`)
        this.setState({ comments })
        ev.currentTarget.reset()
    }

    renderComment(comment, i){
        return <li key={i}>{comment}</li>
    }

    changeState(){
        const bool = !this.state.show
        this.setState({ show : bool})
    }

    render (){
        
            if(this.state.show){
                return(
                    <div className="article-links">
                        <a className="article-link" onClick={this.changeState.bind(this)}>
                            <i className="fa fa-comments-o"></i>
                            <span className="article-link-text">Comments</span>
                        </a>
                        <div>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <input type="text" placeholder="Click here to Write your comment..." ref={(input) => this.commentField = input}/>      
                            </form>
                            <ul class="comments">
                                {this.state.comments.reverse().map(this.renderComment)}
                            </ul>
                        </div>
                        <a className="article-link">
                            <i className="fa fa-share"></i>
                            <span className="article-link-text">Share Post</span>
                        </a>
                    </div>
                )
            }else{
                return(
                    <div className="article-links">
                        <a className="article-link" onClick={this.changeState.bind(this)}>
                            <i className="fa fa-comments-o"></i>
                            <span className="article-link-text">Comments</span>
                        </a>
                        <p></p>
                        <a className="article-link">
                            <i className="fa fa-share"></i>
                            <span className="article-link-text">Share Post</span>
                        </a>
                    </div>
                )
            }
        
    }
}

export default ArticleLinks