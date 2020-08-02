import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import Project from './Project';
import dummyData from '../utils/dummyData';

function Projects() {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 0;
	const [project, setProject] = useState(0);
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

	const onSingleProjectClick = (id) => {
		setProject(id);
	}

    return (
        <>
            <section class="s1" style={{paddingBottom: '20px'}}>
		<div class="main-container">
			<h3 style={{textAlign: 'center'}}>Some of my past projects</h3>

			<div style={{ padding: `0 ${chevronWidth}px` }}>
				<ItemsCarousel
					requestToChangeActive={setActiveItemIndex}
					activeItemIndex={activeItemIndex}
					numberOfCards={3}
					gutter={20}
					leftChevron={leftButton}
					rightChevron={rightButton}
					outsideChevron
					chevronWidth={chevronWidth}
				>
				{dummyData.map(item => (
					<div onClick={onSingleProjectClick.bind(this, item.id)} style={{cursor: 'pointer'}}>
						<div class="post">
							<img class="thumbnail" src={item.image}/>
							<div class="post-preview">
							<h6 class="post-title">{item.name}</h6>
							<a style={{marginTop: '1%'}} href="#project" onClick={onSingleProjectClick.bind(this, item.id)}>Read More</a>
							</div>
						</div>
					</div>
				))}
				</ItemsCarousel>
				</div>
		</div>
		<div style={{textAlign: 'center', marginTop: '20px',}}>
			<span style={{backgroundColor: 'white',padding: '10px 10px' , borderRadius: '50%',color: 'black', }}> <img style={{width: '20px', height: '20px'}} src={require('../images/arrow.png')} /> </span> 
		</div>
	</section>
	<section class="s1" style={{padding: '20px'}} id="project">
		<Project project={project}/>	
	</section>
        </>
    )
}

export default Projects
