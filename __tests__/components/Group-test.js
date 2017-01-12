/**
 * Created by Edgar on 12/01/2017.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Group from '../../src/components/Group.jsx';
import {Row, Col, ListGroup, ListGroupItem, NavDropdown, MenuItem} from 'react-bootstrap';

describe('Group components test', function () {

    var group = {
        id : "1",
        title : "Group 1",
        sentences : [
            "phrase 1 1",
            "phrase 1 2",
            "phrase 1 3",
        ]
    }
    beforeEach(() => {
        // runs before each test in this block
    });

    afterEach(() => {
        // runs after each test in this block
    });

    it('Should have props and state init', () => {
        const wrapper = mount(<Group group={group} groupCount={2} index={1}/>);
        expect(wrapper.props().group).to.equal(group);
        expect(wrapper.props().groupCount).to.equal(2);
        expect(wrapper.props().index).to.equal(1);

        expect(wrapper.state().group).to.equal(group);
        expect(wrapper.state().groupCount).to.equal(2);
        expect(wrapper.state().index).to.equal(1);
    });

    it('Should have 1 ListGroup', () => {
        const wrapper = mount(<Group group={group} groupCount={2} index={1}/>);
        expect(wrapper.find(ListGroup)).to.have.length(1);
    });

    it('Should have 3 ListGroupItem', () => {
        const wrapper = mount(<Group group={group} groupCount={2} index={1}/>);
        expect(wrapper.find(ListGroupItem)).to.have.length(3);
    });

    it('Should react when delete btn is select', () => {
        const wrapper = shallow(<Group group={group} groupCount={2} index={1}/>);
        expect(wrapper.state().deletRow).to.equal(false);
        wrapper.find(MenuItem).last().simulate('click');
        expect(wrapper.state().deletRow).to.equal(true);
    });

    it('Should react when edit btn is select', () => {
        const wrapper = shallow(<Group group={group} groupCount={2} index={1}/>);
        expect(wrapper.state().editRow).to.equal(false);
        wrapper.find(MenuItem).at(1).simulate('click');
        expect(wrapper.state().editRow).to.equal(true);
        expect(wrapper.state().editRowNewGroup).to.equal(2);
    });
});