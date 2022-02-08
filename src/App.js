import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import "./global.css";
import Trending from "./components/ScrollTrending/Trending";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollRandom from "./components/scrollRandom/ScrollRandom";
import {useSelector} from "react-redux";
import PostCategory from "./components/post_category/Post_category";
import InsideCategory from "./components/post_category/insideCategory/InsideCategory";


const App = () => {
    const postState = useSelector(state => state.categoryReducer.categories);
    return (
        <>
            <div className="container">
            <Navbar/>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={ <Trending/>}/>
                    <Route path="/random" exact element={ <ScrollRandom/>}/>
                    {postState.map((item, index) => {
                        return<> <Route path={`/${item.name_encoded}`} key={index}
                                      exact element={ <PostCategory subcategories={item.subcategories} name={item.name_encoded}/>
                                      }/>
                            {item.subcategories.map((inside) => {
                                return <Route  path={`/${inside.name_encoded}`} exact element={
                                    <InsideCategory name={inside.name_encoded}/>}/>
                            })}
                        </>
                    })}
                </Routes>
            </BrowserRouter>,
            <ToastContainer/>
        </>
    );
};

export default App;