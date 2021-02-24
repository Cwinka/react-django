import React, {useEffect} from 'react';
import SkilSearch from './skillSearch'
import WokrsList from './workList'
import { connect, useDispatch } from 'react-redux';
import { fetchWorks } from 'redux/actions';
import { SkillInfoRight, SkillInfoLeft} from './skillInfo'


const separateSkills = (sel_sk, no_right=false) => {
    const to_left = [];
    const to_right = [];
    let l = true;
    sel_sk.forEach(skill => {
        if (no_right){
            to_left.push(skill);
        } else{
            if (l){
                to_left.push(skill);
            } else{
                to_right.push(skill);
            }
            l = !l;
        }
    });
    return [to_left, to_right];
}


const Portfolio = (props) => {
    const dispatch = useDispatch();
    const window_width = window.screen.width;
    useEffect(()=> {
        dispatch(fetchWorks());
    }, [])
    const [to_left, to_right] = separateSkills(props.sel_sk)
    return (
        <div>
            <SkilSearch />
            <div className="portfolio">
                {window_width > 1200 && <SkillInfoLeft skills={to_left}/>}
                <div>
                    <div className="portfolio_wrapper">
                        {(props.works.length && props.mid_images) && <WokrsList works={props.works} images={props.mid_images}/>}
                    </div>
                </div>
                {window_width > 1200 && <SkillInfoRight skills={to_right}/>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    works: state.works.works,
    mid_images: state.work_images.preview_images,
    sel_sk: state.skills.selected_skills,
})
export  default connect(mapStateToProps)(Portfolio);