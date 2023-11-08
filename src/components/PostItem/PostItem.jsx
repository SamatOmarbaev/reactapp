import React from "react";
import './style.css';

const PostItem = ({post}) => {
    return (
        <article className="post">
            <section className="post__content">
                <div className="post__content__title">
                    <span>{post.id}.</span>
                    <div className="post__content__title__info">
                        {post.title}
                    </div>
                </div>
                <p className="post__content__body">
                    {post.body}
                </p>
            </section>
        </article>
    );
}
 
export default PostItem;