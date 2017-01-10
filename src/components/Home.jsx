import React from 'react';
import {Row, Col} from 'react-bootstrap';
import GroupContainer from './GroupContaineur.jsx';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups : [
                {
                    id : "1",
                    title : "Group 1",
                    sentences : [
                        "phrase 1 1",
                        "phrase 1 2",
                        "phrase 1 3",
                    ]
                },
                {
                    id : "2",
                    title : "Group 2",
                    sentences : [
                        "phrase 2 1",
                        "phrase 2 2",
                        "phrase 2 3",
                    ]
                },
                {
                    id : "3",
                    title : "Group 3",
                    sentences : [
                        "phrase 3 1",
                        "phrase 3 2",
                        "phrase 3 3",
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <section>
                <Row className="text-center">
                    <Col md={12}>
                        <h1> Tutorial React</h1>
                    </Col>
                </Row>
                <GroupContainer groups={this.state.groups}/>
            </section>
        );
    }
}


module.exports = Home;