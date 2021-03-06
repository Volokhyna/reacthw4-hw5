import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        let {item, match:{url}} = this.props;
        return (
            <div>
                {item.postId} - {item.email} - <button> <Link to={`${url}/${item.id}`}> Show name </Link> </button>
            </div>
        );
    }
}

export default withRouter(Comment);
