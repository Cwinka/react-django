import React, {useEffect} from 'react';
import SkillsList from 'components/skillsList';
import { connect, useDispatch } from 'react-redux';
import { fetchWorkDetails, fetchWorkImages, clearhWorkDetails } from 'redux/actions';
import {TO_PORTFOLIO_PAGE_TEXT} from "config";
import { Link } from "react-router-dom";

const  WorkDetails = (props) => {
    const details = props.details;
    const images = props.images;
    const id = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWorkDetails(id));
        dispatch(fetchWorkImages(id));
    }, [])
    function handleLeave(){
        dispatch(clearhWorkDetails());
    }
    return(
        <div className="work-details work-details_pd">
            <div className="work-details--heading work-details--heading_pd">
                <Link to={`/portfolio`} onClick={handleLeave} className="back back_pd">{TO_PORTFOLIO_PAGE_TEXT}</Link>
            </div>
            <div className="work-details--content work-details--content_pdmt">
                <div className="work-details--major work-details--major_mb">
                    <div className="work-details--image-container">
                        {/* { details.id ? <ImageSlider images={images} addClass="work-details__images" dots={true}/>: ''} */}
                    </div>
                    <div className="work-details--info work-info">
                        <h1 className="work-info--title work-info--title_mb">{details.title}</h1>
                        <div className="work-info--description">
                            {details.description}
                        </div>
                    </div>
                </div>
                <div className="work-details--skills work-details--skills_pd">
                    { details.id && <SkillsList hoverDescription={true}
                        noClickable={true}
                        skills={details.skills}
                        addClassToSkillBox="work-details--skillbox"
                        />}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    details: state.workDetails.details,
    images: state.workDetails.images,
})
export default connect(mapStateToProps)(WorkDetails);