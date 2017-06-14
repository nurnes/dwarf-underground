import React, {Component} from 'react'
import './App.css'

class OtherArticle extends Component {
    render (){
        return (
            <div className="small-6 medium-3 columns other-article">
                    <a href="#">
                        <img src={this.props.isrc} alt={this.props.alt} />
                        <p>{this.props.p}</p>
                    </a>  
            </div>
        )
    }
}

export default OtherArticle