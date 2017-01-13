/**
 * Created by Edgar on 10/01/2017.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Home from '../../src/components/Home.jsx';
import GroupContaineur from '../../src/components/GroupContaineur.jsx';

describe('Home components test', function () {

    beforeEach(() => {
        // runs before each test in this block
    });

    afterEach(() => {
        // runs after each test in this block
    });

    it('Should have H1 marker', () => {
        const wrapper = mount(<Home/>);
        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('h1').at(0).html()).to.equal("<h1>Tutorial React</h1>");
    });

    it('Should have a GroupContainer', () => {
        const wrapper = mount(<Home/>);
        expect(wrapper.find(GroupContaineur)).to.have.length(1);
    });
});