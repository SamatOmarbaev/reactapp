import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { PostService } from "../API/postService";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/MyButton/MyButton";

const PostIdPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [getPosts, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [getComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        getPosts(params.id);
        getComments(params.id);
    }, []);

    return (
        <div className="container">
            <div className="post__page__id">
                <MyButton onClick={() => navigate('/posts')} >
                    Назад
                </MyButton>
                <h1 className="post__page__title">
                    Страница поста с id = {params.id}
                </h1>
            </div>
            {isLoading
                ?   <Loader />
                :   <div className="post__page__info">
                        <h3>{post.id}. {post.title}</h3>
                        <p>{post.body}.</p>
                    </div>
            }
            <h1 className="post__page__title">
                Комментарии:
            </h1>
            {isCommentsLoading
                ?   <Loader />
                :   <div className="post__page__comments">
                        {comments.map(com =>
                            <div className="page__comment" key={com.id}>
                                <h4 className="page__comment__title">
                                    Email:<a href={`mailto:${com.email}`}>{com.email}</a>
                                </h4>
                                <p className="page__comment__body">
                                    {com.body}
                                </p>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
}
 
export default PostIdPage;