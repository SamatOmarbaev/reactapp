import React from "react";
import Title from "../Title/Title";
import './style.css';
import Loader from "../UI/Loader/Loader";
import PostItem from "../PostItem/PostItem";

const PostList = ({posts}) => {

    if (!posts.length) {
        return <Loader />
    }

    return (
        <>
            <Title children={'Список постов'} />
            <div className="post__list">
                {posts.map((post =>
                    <PostItem post={post} key={post.id} />
                ))}
            </div>
        </>
    );
}
 
export default PostList;