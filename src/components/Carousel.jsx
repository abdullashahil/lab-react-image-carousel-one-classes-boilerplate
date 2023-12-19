import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {

        constructor(){
            super()
            this.state={
                index:0
            }
        }

        next = () => {
            this.setState((prevState) => ({
                index: prevState.index !== images.length - 1 ? prevState.index + 1 : 0
            }));
        };
        
        previous = () => {
            this.setState((prevState) => ({
                index: prevState.index !== 0 ? prevState.index - 1 : images.length - 1
            }));
        };
        
    


    render() {
        return (
            <div className="main">
                <ArrowBackIosIcon className="arrow-icon" fontSize="large" className='leftarrow' onClick={this.next}/>
                <div className="image-container">
                    <div className="textbox">
                    <h1 className="title">{images[this.state.index].title}</h1>
                    <p className="subtitle">{images[this.state.index].subtitle}</p>
                    </div>
                    <img src={images[this.state.index].img} />
                    
                </div>
                <ArrowForwardIosIcon className="arrow-icon" fontSize="large" className='rightarrow' onClick={this.previous}/>
            </div>
        );
    }
}

export default Carousel;
