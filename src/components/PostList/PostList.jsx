import React from "react";
import MyButton from "../UI/MyButton/MyButton";
import Title from "../Title/Title";
import './style.css';
import Loader from "../UI/Loader/Loader";

const PostList = ({posts}) => {

    if (!posts.length) {
        return <Loader />
    }

    return (
        <>
            <Title children={'Список постов'} />
            <div className="post__list">
                {posts.map((post =>
                    <article key={post.id} className="post">
                        <section className="post__content">
                            <div className="post__content__title">
                                <span>
                                    {post.id}.
                                </span>
                                <div className="post__content__title__info">
                                    {post.title}
                                </div>
                            </div>
                            <p className="post__content__body">
                                {post.body}
                            </p>
                        </section>
                        <section>
                            <MyButton>
                                Открыть
                            </MyButton>
                        </section>
                    </article>
                ))}
            </div>
        </>
    );
}
 
export default PostList;