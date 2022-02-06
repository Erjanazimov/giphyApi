import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {category} from "../../redux/actions";

const Category = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(category())
    }, [])

    const stateCategory = useSelector(state => state.categoryReducer.categories);

    return (
        <div>
            <div>
            <button className="btn btn-outline-info  btnCategory" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Категория
            </button>
            </div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Категория</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div>
                    <div className="accordion accordion-flush over" id="accordionFlushExample">

                        {stateCategory.map((item, index) => {
                       return <div key={index} className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false"
                                        aria-controls={`flush-collapseOne${index}`}>
                                    {item.name}
                                </button>
                            </h2>
                            <div id={`flush-collapseOne${index}`} className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div>
                                    <img className="img-fluid" src={item.gif.images.downsized.url}/>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;