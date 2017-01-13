/**
 * Created by Edgar on 13/01/2017.
 */
import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';

import GroupAction from '../../src/actions/GroupAction';
import GroupStore from '../../src/stores/GroupStore';
import GroupAPI from '../../src/api/GroupAPI';

describe('Group Store test', function () {

    let _groups = [
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
        let getAllGroupStub = sinon.stub(GroupAPI, 'getAllGroup');
        getAllGroupStub.returns(_groups);
        GroupAction.getAllGroup();
    });

    afterEach(() => {
        GroupAPI.getAllGroup.restore();
    });

    it('Get all group', function () {
        expect(GroupStore.getAllGroups()).to.equal(_groups);
    });

    it('Get all group by id', function () {
        expect(GroupStore.getGroupById("1")).to.equal(_groups[0]);
    });
});