import React, { useEffect, useState } from "react";
import PostList from "../components/PostList/PostList";
import { PostService } from "../API/postService";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await PostService.getAll()
        setPosts(response.data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container">
            <PostList posts={posts} />
        </div>
    );
}
 
export default Posts;