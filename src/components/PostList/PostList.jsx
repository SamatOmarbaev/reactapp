import React from "react";
import './style.css';
import PostItem from "../PostItem/PostItem";
import Title from "../Title/Title";

const PostList = ({posts}) => {

    if (!posts.length) {
        return <Title children={'Постов не найдено'} />
    }

    return (
        <>
            <div className="post__list">
                {posts.map((post =>
                    <PostItem post={post} key={post.id} />
                ))}
            </div>
        </>
    );
}
 
export default PostList;