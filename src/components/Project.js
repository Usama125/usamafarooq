import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import dummyData from '../utils/dummyData';

function Project({ project }) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 20;
    const leftButton = (
		<div>
			<div style={{textAlign: 'center', marginTop: '20px', marginLeft: '-200%'}}>
				<span style={{backgroundColor: 'white',paddingTop: '15px', paddingBottom: '10px', paddingLeft: '12.5px', paddingRight: '12.5px' , borderRadius: '50%',color: 'black', }}> <img style={{width: '20px', height: '20px'}} src={require('../images/left-arrow.png')} /> </span> 
			</div>	
			{/* <button style={{padding: '15px', marginLeft: '-100%', borderRadius: '10%', border: 'none'}}> Previous </button> */}
		</div>
	)  
	const rightButton = (
		<div>
			<div style={{textAlign: 'center', marginTop: '20px',marginLeft: '100%'}}>
			<span style={{backgroundColor: 'white',paddingTop: '15px', paddingBottom: '10px', paddingLeft: '12.5px', paddingRight: '12.5px' , borderRadius: '50%',color: 'black', }}> <img style={{width: '20px', height: '20px'}} src={require('../images/right-arrow.png')} /> </span> 
		</div>
			{/* <button style={{padding: '15px', borderRadius: '10%', border: 'none'}}> Next </button> */}
		</div>
    )  
    const proDesc = dummyData.filter(item => item.id === project)[0];
    
    return (
        <>
            <div style={{padding: '0px 10%'}}>
                <h4>{proDesc.name}</h4>
                <p>{proDesc.description}</p>
                <h5>Technologies</h5>
                <ol>
                    {proDesc.technologies.map(item => (
                        <li>{item}</li>
                    ))}
                </ol>
                <h4>Testimonials</h4>
                <div style={{ padding: `0 ${chevronWidth}px` }}>
				<ItemsCarousel
					requestToChangeActive={setActiveItemIndex}
					activeItemIndex={activeItemIndex}
                    numberOfCards={1}
					gutter={20}
					leftChevron={leftButton}
					rightChevron={rightButton}
					outsideChevron
					chevronWidth={chevronWidth}
				>
				{proDesc.images.map(item => (
					<div>
						<div class="post">
							<img class="thumbnail" style={{height: '100%'}} src={item.url}/>
						</div>
					</div>
				))}
				</ItemsCarousel>
				</div>
            </div>
        </>
    )
}

export default Project
