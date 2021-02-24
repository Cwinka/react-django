import React, {Component} from 'react';


function Dots({all, curent}) {
    function get_ar(lng) {
        let arr = [];
        for (let index = 0; index < lng; index++) {
            arr.push(index);
        }
        return arr;
    }
    return(
        <div className='image-slider__dots dots'>
            {get_ar(all).map(idx => (
                <div className={`dots_dot ${ (idx===curent ? 'dots__active' : '')}`} key={idx}></div>
            ))}
        </div>
    )
}
class ImageSlider extends Component {
    constructor(props){
        super(props);
        this.handleNextImage = this.handleNextImage.bind(this);
        this.handlePrevImage = this.handlePrevImage.bind(this);
        this.state = {
            cur_img_id: 0,
            next_dis: false,
            prev_dis: true,
        }
    }
    componentDidMount(){
        let new_img_id = this.state.cur_img_id + 1;
        if (!(new_img_id in this.props.images)){
            this.setState({next_dis: true})
        }
    }
    handleNextImage(){
        let new_img_id = this.state.cur_img_id + 1;
        let next_dis = false;
        if (!(new_img_id in this.props.images)){
            return
        }
        if (!new_img_id+1 in this.props.images){
            next_dis = true;
        }
        this.setState({cur_img_id: new_img_id, next_dis: next_dis, prev_dis: false})
    }
    handlePrevImage(){
        let prev_img_id = this.state.cur_img_id - 1;
        let prev_dis = false;
        if (!(prev_img_id in this.props.images)){
            return
        }
        if (!prev_img_id-1 in this.props.images){
            prev_dis = true;
        }
        this.setState({cur_img_id: prev_img_id, next_dis: false, prev_dis: prev_dis})
    }
    render(){
        let image = this.props.images[this.state.cur_img_id];
        return(
            <div className={`image-slider ${this.props.addClass ? this.props.addClass : ''}`}>
                <span className={`image_slider__left-scroll left-scroll ${
                    this.state.prev_dis ? 'disabled': ''}`}
                    onClick={this.handlePrevImage}/>
                <div className="image-slider__wrapper">
                    <img className="image-slider__slide" src={image ? image.img : ''} alt=""/>
                </div>
                <span className={`image_slider__right-scroll right-scroll ${
                    this.state.next_dis ? 'disabled': ''}`}
                    onClick={this.handleNextImage}/>
                {this.props.dots ? <Dots all={this.props.images.length} curent={this.state.cur_img_id}/> : ''}
            </div>
        )
    }
}
export default ImageSlider;