import React from 'react';
import {Row, Col, PanelGroup, Panel} from 'react-bootstrap';
import Group from './Group.jsx';
import GroupStore from '../stores/GroupStore';

class GroupContaineur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: '1',
        };
    }

    componentWillMount() {
        this._updateGroup();
        GroupStore.addChangeListener(this._updateGroup.bind(this));
    }

    componentWillUnmount() {
        GroupStore.removeChangeListener(this._updateGroup.bind(this));
    }

    render() {
        const groupR = this._renderGroup();
        return (
            <Row >
                <Col md={6} mdOffset={3}>
                    <PanelGroup defaultActiveKey={'1'}
                                activeKey={this.state.activeKey}
                                onSelect={this._handleSelect.bind(this)} accordion>
                        {groupR}
                    </PanelGroup>
                </Col>
            </Row>
        );
    }

    _handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    _renderGroup() {
        if (this.state.groups.length > 0) {
            return this.state.groups.map((group, index) => (
                <Panel header={group.title} eventKey={index+1} bsStyle="primary" key={"panel"+index}>
                    <Group group={group} groupCount={this.state.groups.length} index={index+1} key={"group"+index}/>
                </Panel>
            ));
        }
        else return ([]);
    }

    _updateGroup() {
        let allGroup = GroupStore.getAllGroups();
        this.setState({groups: allGroup});
    }

}


module.exports = GroupContaineur;