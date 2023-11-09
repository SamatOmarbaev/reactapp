import React from "react";
import './style.css';
import PostItem from "../PostItem/PostItem";
import Title from "../Title/Title";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({posts}) => {

    if (!posts.length) {
        return <Title children={'Постов не найдено'} />
    }

    return (
        <TransitionGroup className="post__list">
            {posts.map((post =>
            <CSSTransition
                key={post.id}
                timeout={500}
                classNames='post'
            >
                <PostItem post={post} />
            </CSSTransition>
            ))}
        </TransitionGroup>
    );
}
 
export default PostList;