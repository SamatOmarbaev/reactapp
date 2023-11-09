import React, { useEffect, useMemo, useState } from "react";
import PostList from "../components/PostList/PostList";
import { PostService } from "../API/postService";
import Title from "../components/Title/Title";
import Loader from '../components/UI/Loader/Loader';
import PostFilter from "../components/PostFilter/PostFilter";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});

    const getPosts = async () => {
        const response = await PostService.getAll()
        setPosts(response.data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }

        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

    return (
        <div className="container">
            {posts.length > 0
                ?   <>
                        <Title children={'Список постов'} />
                        <PostFilter filter={filter} setFilter={setFilter} />
                        <PostList posts={sortedAndSearchedPosts} />
                    </>
                :   <Loader />
            }
            
        </div>
    );
}
 
export default Posts;