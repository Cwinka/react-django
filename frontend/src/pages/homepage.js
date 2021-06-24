import React, { useEffect } from 'react';

import { Icon } from '@iconify/react';

import { connect, useDispatch } from 'react-redux';
import { fetcRecenthWorks } from 'redux/actions';
import WorkPreView from 'components/workPreview';
import { Link } from 'react-router-dom';
import {
    MY_NAME_TEXT,
    MY_MAJORS_TEXT,
    ABOUT_TITLE_TEXT,
    ABOUT_ME_TEXT,
    WHAT_CAN_I_DO_TITLE_TEXT,
    MY_ABILITIES,
    MY_RECENT_WORKS_TITILE_TEXT,
    SEE_ALL_WORKS_TEXT,
    COPIRITE_AUTH_TEXT,
    MY_SOCIALS,
    DEF_SOC_ICON_STYLE,

} from "config";

const MY_ABILITES_AL = MY_ABILITIES.map((arr, idx)=> {
    const right = idx%2 ? "abilitie_right": '';
    return(
        <div key={arr[0]} className={`abilitie ${right}`.trim()}>
            <h3 className="abilitie--name abilitie--name_mb">{arr[0]}</h3>
            <p className="abilitie--desc abilitie--desc_pdmb">{arr[1]}</p>
        </div>
    )
})

const HomePage = (props) => {
    const dispatch = useDispatch();
    const works = props.works;
    useEffect(()=> {
        dispatch(fetcRecenthWorks());
    }, [])
    return(
        <div className='home'>
            <div className="intro">
                <div className="my-card">
                    <div className="my-card--image my-card--image_box">


                    </div>
                    <div className="my-card--info my-card--info_ml">
                        <h1 className="my-card--name my-card--name_mb">{MY_NAME_TEXT}</h1>
                        <div className="my-card--who-am-i my-card--who-am-i_mb">
                            {MY_MAJORS_TEXT}
                            <span className="my-card--warning"></span>
                        </div>
                        <div className="my-card--social"> 
                            {MY_SOCIALS.map(arr => (
                                <div key={arr[0]} className={`social-icon my-card--si my-card--si_ml ${arr[0]}`}>
                                    <Icon icon={arr[1]} style={DEF_SOC_ICON_STYLE} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="about about_pd">
                <h2 className="about--title about--title_mb">{ABOUT_TITLE_TEXT}</h2>
                <p>{ABOUT_ME_TEXT}</p>
            </div>
            <div className="what-can-i-do what-can-i-do_mr">
                <div className="abilities">
                    <h2 className="abilities--title abilities--title_mb">{WHAT_CAN_I_DO_TITLE_TEXT}</h2>
                    <div className="abilities--content">
                        {MY_ABILITES_AL}
                    </div>
                </div>
            </div>
            <div className="recent-works">
                <h3 className="recent-works--title">{MY_RECENT_WORKS_TITILE_TEXT}</h3>
                <div className="recent-works--content recent-works--content_pd">
                    <div className="recent-works--list">
                        {works &&
                            works.map(work => (
                                <WorkPreView
                                    key={work.id}
                                    addClass={'recent-works--preview recent-works--preview_ml'}
                                    work={work}
                                    skillsNoClicable={true}
                                    skillsNoHoverable={true}
                                    image={work.image}/>
                            ))
                        }
                    </div>
                    <Link className="recent-works--see-more" to={`/portfolio`}>{SEE_ALL_WORKS_TEXT}</Link>
                </div>
            </div>
            <div className="footer">
                <div>{COPIRITE_AUTH_TEXT}</div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    works: state.works.recent,
})

export default connect(mapStateToProps)(HomePage);