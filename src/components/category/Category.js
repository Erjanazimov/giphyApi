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
                            return <div key={index} className="d-grid gap-2">
                                    <a href={item.name_encoded} className="btn btn-outline-primary mb-2" type="button">{item.name}</a>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;