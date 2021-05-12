import React from 'react'
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';





const PostList = ({ posts, onDelete, onLike, onImportant }) => {
    const elements = posts.map((item, index) => {
        const { key, ...postsData } = item;
        return (
            <li className="list-group-item" key={key}>
                <PostListItem
                    num={index + 1}
                    {...postsData}
                    onDelete={() => onDelete(key)}
                    onLike={() => onLike(key)}
                    onImportant={() => onImportant(key)}
                />
            </li>
        )
    });
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;