import React, { useEffect, useState } from "react";
import PostList from "../components/PostList/PostList";
import { PostService } from "../API/postService";
import Title from "../components/Title/Title";
import Loader from '../components/UI/Loader/Loader';
import PostFilter from "../components/PostFilter/PostFilter";
import { usePosts } from "../hooks/usePosts";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [isLoading, setIsLoading] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const getPosts = async () => {
        setIsLoading(true);
        const response = await PostService.getAll()
        setPosts(response.data);
        setIsLoading(false);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container">
            <Title children={'Список постов'} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {isLoading
                ?   <Loader />
                :   <PostList posts={sortedAndSearchedPosts} />
            }
            
        </div>
    );
}
 
export default Posts;