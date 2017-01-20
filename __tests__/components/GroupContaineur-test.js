/**
 * Created by Edgar on 12/01/2017.
 */
/**
 * Created by Edgar on 10/01/2017.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import GroupContaineur from '../../src/components/GroupContaineur.jsx';
import Group from '../../src/components/Group.jsx';
import {PanelGroup, Panel} from 'react-bootstrap';


describe('GroupContaineur components test', function () {

    var groups = [
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
    ];

    beforeEach(() => {
        // runs before each test in this block
    });

    afterEach(() => {
        // runs after each test in this block
    });

    it('Should have props : groups and state init', () => {
        const wrapper = mount(<GroupContaineur groups={groups}/>);
        expect(wrapper.props().groups).to.equal(groups);

        expect(wrapper.state().groups).to.equal(groups);
        expect(wrapper.state().activeKey).to.equal('1');
    });

    it('Should have PanelGroup with props', () => {
        const wrapper = mount(<GroupContaineur groups={groups}/>);
        expect(wrapper.find(PanelGroup)).to.have.length(1);
        expect(wrapper.find(PanelGroup).get(0).props.defaultActiveKey).to.equal('1');
        expect(wrapper.find(PanelGroup).get(0).props.activeKey).to.equal('1');
    });

    it('Should have Group with props', () => {
        const wrapper = mount(<GroupContaineur groups={groups}/>);
        expect(wrapper.find(Group)).to.have.length(3);

        expect(wrapper.find(Group).get(0).props.group.id).to.equal("1");
        expect(wrapper.find(Group).get(0).props.group.title).to.equal("Group 1");
        expect(wrapper.find(Group).get(0).props.group.sentences.length).to.equal(3);

        expect(wrapper.find(Group).get(0).props.groupCount).to.equal(3);

        expect(wrapper.find(Group).get(0).props.index).to.equal(0);
        expect(wrapper.find(Group).get(1).props.index).to.equal(1);
        expect(wrapper.find(Group).get(2).props.index).to.equal(2);
    });

});