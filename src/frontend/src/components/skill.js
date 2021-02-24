import React, {Component, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import {setSkillSelected, unsetSkillSelected} from 'redux/actions'

class SkillDescription extends Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.state ={
            corrected_style: {},
        }
    }
    componentDidMount(){
        const av_w = window.innerWidth;
        const av_h = window.innerHeight;
        const cords = this.ref.current.getBoundingClientRect();
        let cor_style = {};
        if (cords.right > av_w){
            cor_style['right'] = '0';
        }
        if (cords.bottom >av_h ){
            cor_style['top'] = 'unset';
            cor_style['bottom'] = '120%';
        }
        this.setState({corrected_style: cor_style});
    }
    render(){
        return(
            <div className="skill__description description" ref={this.ref} style={this.state.corrected_style}>
                <div className="description__short">{this.props.des}</div>
            </div>
        )
    }
}

const Skill = (props) => {
    const skill = props.skill;
    const addClassToEvery = props.addClassToEvery ? props.addClassToEvery: '';
    const addClassToBox = props.addClassToBox ? props.addClassToBox: '';
    const noClickable = props.noClickable;
    const selected = meSelected();
    const hoverDescription = props.hoverDescription;
    const dispatch = useDispatch();
    const [me_hover, setHover] = useState(false);

    function meSelected(){
        const idx = props.selected_skills.map(sk => sk.id).indexOf(skill.id);
        return idx !== -1 ? true : false
    }

    function handleClick(skill) {
        if (noClickable){ return }
        if ( selected ){
            dispatch(unsetSkillSelected(skill))
        } else{
            dispatch(setSkillSelected(skill))
        }
    }
    function handleOver(){
        if (!hoverDescription) {return}
        setHover(true);
    }
    function handleOut(){
        if (!hoverDescription) {return}
        setHover(false);
    }
    return(
        <div className={`skill-box ${addClassToBox}`.trim()}>
            <div className={`skill ${selected ? 'selected': ''} ${addClassToEvery}`.trim()}
                onMouseOver={handleOver}
                onTouchStart={handleOver}
                onTouchEnd={handleOut}
                onMouseOut={handleOut}
                onClick={() => handleClick(skill)}
                >{skill.name}
                {me_hover && <SkillDescription des={skill.description}/>}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    selected_skills: state.skills.selected_skills,
})
export default connect(mapStateToProps)(Skill);