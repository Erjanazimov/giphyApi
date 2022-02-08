import React, {useEffect, useState} from 'react';
import {categoryPost} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
let count = 10
function PostCategory({name,subcategories}){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryPost(name, count))
    }, [])
    const stateCategory = useSelector(state => state.categoryPostReducer.categoriesPost);

    const CategoryScrollPost = () => {
        setTimeout(() => {
            count += 5
            if (count > 200){
                window.location.reload();
            }
            dispatch(categoryPost(name, count));
        }, 1500)
    }
    return (
        <div className="container">
            <h2 className="text-white text-center pb-3">{name}</h2>
            <div className="d-flex">

            <div>
                <h3 className="text-white"> Категории {name} </h3>
                <ul className="category">
                    {subcategories.map((item, index) =>  <a key={index} href={item.name_encoded} className="d-block pb-2">{item.name}</a> )}
                </ul>
            </div>
                <InfiniteScroll
                    dataLength={stateCategory.length}
                    next={CategoryScrollPost}
                    hasMore={true}
                    loader={<h2 className="text-white text-center">Загрузка...</h2>}
                >
                    <div className="d-flex flex-wrap justify-content-center">
            {stateCategory.map((item, index) => {
                return  <div key={index}>
                    <img src={item.images.downsized.url} className="gif"/>
                </div>
            })}
                    </div>
                </InfiniteScroll>

            </div>
        </div>
    );
};

export default PostCategory;