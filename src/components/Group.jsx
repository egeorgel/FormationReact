import React from 'react';
import {Row, Col, ListGroup, ListGroupItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Group extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            group: this.props.group,
            groupCount: this.props.groupCount,
            index: this.props.index,

            deletRow: false,
            editRow: false,
            editRowNewGroup: ''
        };
    }

    render() {
        return (
            <ListGroup fill>
                {this._renderResponse()}
            </ListGroup>
        );
    }

    _renderResponse() {
        if (this.state.group.sentences.length > 0) {
            return this.state.group.sentences.map((sentence, index) => (
                <ListGroupItem key={index}>
                    <Row>
                        <Col md={2} className="margin-right-25 rm-bullet">
                            <NavDropdown eventKey="1" title='Modifier' id="nav-dropdown">
                                {this._menuItemEditGroup(sentence)}
                                <MenuItem eventKey="2.2" onClick={this._deleteRow.bind(this, sentence)}>
                                    <i className="fa fa-trash-o icon-sentence" aria-hidden="true"/>
                                    Supprimer
                                </MenuItem>
                            </NavDropdown>
                        </Col>
                        <Col md={9} className="margin-left-25">
                            {sentence}
                        </Col>
                    </Row>
                </ListGroupItem>
            ));
        }
        else return ([]);
    }

    _menuItemEditGroup(sentence) {
        if (this.state.groupCount > 1) {
            // create array of index groupCount and iterate throw a map
            return Array.from(new Array(this.state.groupCount), () => '').map((x, index) => (
                 <MenuItem eventKey={"1."+index} onClick={this._editGroup.bind(this, index + 1, sentence)} key={"MenuItem"+index}>
                    <i className="fa fa-pencil-square-o icon-sentence" aria-hidden="true"/>
                    Group {index + 1}
                </MenuItem>
            ));
        }
    }

    _deleteRow(sentence) {
        this.setState({deletRow: true});
        console.log("group id : " + this.state.group.id + " delete : " + sentence);
    }

    _editGroup(group, sentence) {
        this.setState({editRow: true, editRowNewGroup: group});
        console.log("group : " + group + " edit : " + sentence);
    }
}


module.exports = Group;
