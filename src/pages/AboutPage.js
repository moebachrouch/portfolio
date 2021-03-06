import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
<p>Welcome,</p>

<p>My name is Moe and I'm a software developer.</p>

<p>I have a Bachelor's degree in science, and I currently study Software Engineering at the University of Ottawa. I enjoy coding and learning new software tools. I work with multiple languages including <b>Python</b> and <b>Java</b>.</p>

<p>Computers fascinate me, so I am always learning new computer skills. I find both hardware and software aspects interesting. Sometimes, I experiment with Arduinos. Other times, I do Web development using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</p>

<p>When I'm not coding, I like to produce music using Logic Pro X, play with 3D printers, or go outside for a run. I'm a social guy and I like people, so I try to reconnect with friends on my free time.</p>

<p>I'm always open to opportunities. Feel free to reach me at <a href="mailto: moe.bachrouch@gmail.com">moe.bachrouch@gmail.com</a> for any inquiries.</p>

<p>You can view my latest resume <a rel= "noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1Zd_RQ8mfPS9eTY8O_3Y0too1oS2nCsUZ/view?usp=sharing">here</a>.</p>
            </Content>
        </div>
    );
}

export default AboutPage;