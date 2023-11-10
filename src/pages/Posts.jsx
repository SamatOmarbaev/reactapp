import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList/PostList";
import { PostService } from "../API/postService";
import Title from "../components/Title/Title";
import Loader from '../components/UI/Loader/Loader';
import PostFilter from "../components/PostFilter/PostFilter";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/MySelect/MySelect";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [getPosts, isLoading, postError] = useFetching(async(limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data]);
        const totalCount = (response.headers['x-total-count']);
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isLoading, () => setPage(page + 1));

    useEffect(() => {
        getPosts(limit, page);
    }, [page, limit]);

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="container">
            <Title children={'Список постов'} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect 
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue={'Кол-во эл-ов на стр'}
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Все посты'},
                ]}
            />
            {postError && <h1 style={{color: 'red', textAlign: 'center', margin: '1rem 0'}}>Произошла ошибка {postError}</h1>}
            <PostList posts={sortedAndSearchedPosts} />
            <div ref={lastElement} />
            {isLoading && <Loader />}
            <Pagination totalPages={totalPages} page={page} changePage={changePage} />
        </div>
    );
}
 
export default Posts;