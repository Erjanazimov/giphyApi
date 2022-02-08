import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {insideCategory} from "../../../redux/actions";

let count = 10

function InsideCategory({name}){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(insideCategory(name, count))
    }, [])

    const insideState = useSelector(state => state.insideCategoryReducer.categoriesInside);


    const insideCategoryScroll = () => {
        setTimeout(() => {
            count += 5
            if (count > 190){
                window.location.reload();
            }
            dispatch(insideCategory(name, count));
        }, 1500)
    }
    return (
        <div className="container">
            <h2 className="text-white text-center pb-3">{name}</h2>
            <InfiniteScroll
                dataLength={insideState.length}
                next={insideCategoryScroll}
                hasMore={true}
                loader={<h2 className="text-white text-center">Загрузка...</h2>}
            >
            <div className="d-flex flex-wrap justify-content-center">
            {insideState.length ? insideState.map((item, index) => {
                return <img key={index} src={item.images.downsized.url} className="gif"/>
            }) : <div className="text-center mt-2 text-white">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>}
            </div>
            </InfiniteScroll>
        </div>
    );
};

export default InsideCategory;