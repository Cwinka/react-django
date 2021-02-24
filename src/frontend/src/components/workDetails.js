import React, {Component} from 'react';
import ImageSlider from './imageSlider';
import PortfolioService from './middleware/portfolioservice'
import SkillsList from './skillsList';

const portService = new PortfolioService();
class  WorkDetails  extends  Component {
    constructor(props) {
        super(props);
        this.state  = {
            details: {},
            images: [],
            skills: [],
        };
    }
    componentDidMount() {
        var  self  =  this;
        portService.getWorkDetails(self.props.match.params.id).then(function (result) {
            self.setState({ details:  result.data.data,
                        images: result.data.image_data,
                        skills: result.data.data.skills})
        });
    }
    render(){
        var self = this.state.details
        return (
            <div className="work-details">
                <div className="work-details__infos">
                    <div className="work-details__image-container">
                        { self.id ? <ImageSlider images={this.state.images} addClass="work-details__images" dots={true}/>: ''}
                    </div>
                    <div className="work-details__text">
                        <h1 className="work-details__titile">{self.title}</h1>
                        <div className="work-details__description">
                            {self.description}
                        </div>
                        <div className="work-details__skills">
                            { self.id && <SkillsList hoverDescription={true}
                                noClickable={true}
                                skills={this.state.skills}
                                addClassToSkillBox="mr-b-l-5"/>}

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default WorkDetails;