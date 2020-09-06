import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            <p>Welcome,</p>

<p>My name is Moe, and I want to make some noise in the Software industry.</p>

<p>After completing a Bachelor's degree in Science, I decided to study Software Engineering at the University of Ottawa. I enjoy coding and learning new Software tools. The main languages I work with are Python, Java, and JavaScript.</p>

<p>Computers fascinate me, so I try to learn as much as I can about them. I find both Hardware and Software aspects interesting, so I experiment with Arduinos sometimes. Web development is also fun for me, so I play around with HTML, CSS, and JavaScript when I can.</p>

<p>When I'm not coding, I like to produce music using Logic Pro X, play with 3D printers and 3D design tools, or go outside for a run. I'm a pretty social guy and I like people, so I try to reconnect with friends on my free time.</p>

<p>I'm always open to new opportunities. You can reach me at <a href="mailto: moe.bachrouch@gmail.com">moe.bachrouch@gmail.com</a> for any inquiries.</p>

<p>You can also view my latest <a rel= "noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1Zd_RQ8mfPS9eTY8O_3Y0too1oS2nCsUZ/view?usp=sharing">resume</a>.</p>
            </Content>
        </div>
    );
}

export default AboutPage;