import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from'../components/Card';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Facebook Cleaner',
                    subTitle: 'Remove your Facebook History',
                    // imgSrc: kirchhoff,
                    link: 'https://github.com/moebachrouch/facebook-cleaner',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Root Finder',
                    subTitle: 'Incremental Search Root Finding Method',
                    // imgSrc: kirchhoff,
                    link: 'https://github.com/MOEBACHROUCH/GRAPHIC-APPLICATION',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Unison',
                    subTitle: 'Pure CSS, HTML, JS Website',
                    // imgSrc: webdev,
                    link: 'https://github.com/unison-inc-uottawa/unison',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState( {
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;