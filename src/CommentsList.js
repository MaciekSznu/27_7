import React from 'react';
import Comment from './CommentContainer';
import './CommentsList.scss';


const CommentsList = ({comments}) => <div className="CommentsList">{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</div>;

export default CommentsList;