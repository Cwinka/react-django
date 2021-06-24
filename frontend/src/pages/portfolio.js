import React, {useEffect} from 'react';
import SkilSearch from 'components/skillSearch'
import WokrsList from 'components/workList'
import { connect, useDispatch } from 'react-redux';
import { fetchWorks } from 'redux/actions';
import {TO_MAIN_PAGE_TEXT} from "config";
import { Link } from "react-router-dom";


const Portfolio = (props) => {
    const dispatch = useDispatch();
    const mid_images = props.mid_images;
    const works = props.works;
    useEffect(()=> {
        dispatch(fetchWorks());
    }, [])
    return (
        <div className="my-works">
            <div className="my-works--heading my-works--heading_pd">
                <Link to={`/`} className="back back_pd">{TO_MAIN_PAGE_TEXT}</Link>
                {/* <SkilSearch /> */}
            </div>
            <div className="portfolio">
                <div className="portfolio--wrapper">
                    {(works.length && mid_images) &&
                        <WokrsList works={works}
                                    images={mid_images}
                                    addClassToEveryWork="wp_pfmr"
                                    />}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    works: state.works.works,
    mid_images: state.work_images.preview_images,
})
export default connect(mapStateToProps)(Portfolio);