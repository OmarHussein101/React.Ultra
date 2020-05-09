import React, {useState, useEffect} from 'react';
import {PortfolioSection, PortfolioTitle, UlPortfolio, LiPortfolio, Span, ImageWrapper, Image, Overlay, OverlaySpan} from './style.js';
import axios from 'axios';

const Portfolio = () => {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => {setImages(res.data.Portfolio)})
    }, [])

    const PortfolioImages = images.map( (imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="Images" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <UlPortfolio>
                <LiPortfolio active>All</LiPortfolio>
                <LiPortfolio>HTML</LiPortfolio>
                <LiPortfolio>Photoshop</LiPortfolio>
                <LiPortfolio>Wordpress</LiPortfolio>
                <LiPortfolio>Mobile</LiPortfolio>
            </UlPortfolio>
            <div className="box">
                {PortfolioImages}
            </div>
        </PortfolioSection>
    )
}

export default Portfolio;