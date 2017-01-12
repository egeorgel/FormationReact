import React from 'react';
import {Row, Col} from 'react-bootstrap';
import GroupContaineur from './GroupContaineur.jsx';
import GroupAction from '../actions/GroupAction';

class Home extends React.Component {

    constructor(props) {
        super(props);

        GroupAction.getAllGroup();
    }

    render() {
        return (
            <section>
                <Row className="text-center">
                    <Col md={12}>
                        <h1>Tutorial React</h1>
                    </Col>
                </Row>
                <GroupContaineur />
            </section>
        );
    }
}


module.exports = Home;