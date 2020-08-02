import React from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
    return (
        <>
            <section class="s1">
		    <div class="main-container">
			<div class="greeting-wrapper">
				<h1>Hi, I'm Usama Farooq</h1>
			</div>


			<div class="intro-wrapper">
				<div class="nav-wrapper">

					<a href="index.html">
						<div class="dots-wrapper">
							<div id="dot-1" class="browser-dot"></div>
							<div id="dot-2" class="browser-dot"></div>
							<div id="dot-3" class="browser-dot"></div>
						</div>
					</a>
					

					<ul id="navigation">
						<li><a href="index.html#contact">Contact</a></li>
						<li><a href="index.html#contact">See Resume</a></li>
					</ul>
				</div>

				<div class="left-column">
					<img id="profile_pic" src={require("../images/Usama.jpg")}/>
					<h5 style={{textAlign: 'center', lineHeight: '0'}}>Usama Farooq</h5>

					<p id="settings-note">Full Stack JavaScript Engineer</p>
				</div>

				<div class="right-column">

					<div id="preview-shadow">
						<div id="preview">
							<div id="corner-tl" class="corner"></div>
							<div id="corner-tr" class="corner"></div>
							<h3>What I Do</h3>
							<p>I am a Full Stack JavaScript Developer having more than 2 and a half year of experience.</p>
							<div id="corner-br" class="corner"></div>
							<div id="corner-bl" class="corner"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="s2">
		<div class="main-container">

			<div class="about-wrapper">
				<div class="about-me">
					<h4>More about me</h4>

					<p>I build new projects just to tickle my brain and love learning new technologies because that's make me happy.</p>

					<p>And I am a passionate web application and serves as a Full Stack JavaScript Engineer @Nextbridge. I have experience in 4 major software companies and now want to represent myself on the next level. I have worked in major PHP frameworks like Laravel, CodeIgniter and Yii 2 as well as has strong JavaScript background with Vanilla JavaScript, JQuery, AJAX along with hands-on experience in front end frameworks like React.js, Vue.js and Node.js ( Express.js ) with microservices architecture as serverside JavaScript technology and hands-on experience with React Native ( mostly fun driven ). I would be very happy to represent any of the multinational company weather its within the borders or across the borders.</p>


					<hr/>

					<h4>TOP EXPERTISE</h4>

					<p>Fullstack developer with primary focus on Node + React: <a target="_blank" href="resume.pdf">Download Resume</a></p>

					<div id="skills">
						<ul>
							<li>Node JS</li>
							<li>React JS</li>
							<li>Micro Services Architecture</li>
							<li>GraphQL & Prisma</li>
							<li>AWS Serverless</li>
						</ul>

						<ul>
							<li>Google Maps API</li>
							<li>JS Charts</li>
							<li>AWS (EC2/S3/AWS Lambda/Cognito Pool)</li>
							<li>Heroku</li>
							<li>HTML/CSS</li>
						</ul>

					</div>

				</div>

				
				<div class="social-links">
					<h4>Education & Cirtifications</h4>
					<div style={{marginTop: '-7.5%', marginLeft: '5%'}}>
						<h6>University Of Surgodha</h6>
						<p style={{fontSize: '14', marginTop: '-6.5%'}}>BS Software Engineering</p>
					</div>
					<div style={{marginTop: '-5%', marginLeft: '5%'}}>
						<h6>Udemy</h6>
						<p style={{fontSize: '14', marginTop: '-6.5%'}}>Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes</p>
					</div>
					<div style={{marginTop: '-5%', marginLeft: '5%'}}>
						<h6>Udemy</h6>
						<p style={{fontSize: '14', marginTop: '-6.5%'}}>Build Full-Stack Apps with GraphQL, Prisma, Node and React</p>
					</div>
					
					<h4>Experience</h4>
					<div style={{marginTop: '-7.5%', marginLeft: '5%'}}>
						<h6>NextBridge</h6>
						<p style={{fontSize: '14', marginTop: '-6.5%'}}>Full Stack JavaScript Developer</p>
					</div>
					<div style={{marginTop: '-7.5%', marginLeft: '5%'}}>
						<h6>Lead Concept</h6>
						<p style={{fontSize: '14', marginTop: '-6.5%'}}>Full Stack JavaScript ReactJS | Node JS | AWS Serverless Developer</p>
					</div>
					<div style={{marginTop: '-7.5%', marginLeft: '5%'}}>
						<h6>RM Systems Origami</h6>
						<p style={{fontSize: '14', marginTop: '-6.5%'}}>Full Stack JavaScript ReactJS | PHP Laravel | Yii2 Developer</p>
					</div>
				</div>
			</div>

		</div>
	</section>

	

    {/* Projects */}
    <Projects/>


    {/* Contact */}
    <Contact/>
        </>
    )
}

export default Home
