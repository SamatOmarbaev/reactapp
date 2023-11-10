import React, { useEffect, useState } from "react";
import PostList from "../components/PostList/PostList";
import { PostService } from "../API/postService";
import Title from "../components/Title/Title";
import Loader from '../components/UI/Loader/Loader';
import PostFilter from "../components/PostFilter/PostFilter";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [getPosts, isLoading, postError] = useFetching(async(limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data);
        const totalCount = (response.headers['x-total-count']);
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        getPosts(limit, page);
    }, []);

    const changePage = (page) => {
        setPage(page);
        getPosts(limit, page)
    };

    return (
        <div className="container">
            <Title children={'Список постов'} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError 
                ?   <h1 style={{color: 'red', textAlign: 'center', margin: '1rem 0'}}>Произошла ошибка {postError}</h1>
                :   isLoading
                    ?   <Loader />
                    :   <PostList posts={sortedAndSearchedPosts} />
            }
            {/* <div className="pages">
                {pagesArray.map(p =>
                    <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page__current' : 'page'}>
                        {p}
                    </span>    
                )}
            </div> */}
            <Pagination totalPages={totalPages} page={page} changePage={changePage} />
        </div>
    );
}
 
export default Posts;