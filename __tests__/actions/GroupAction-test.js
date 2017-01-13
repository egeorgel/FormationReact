/**
 * Created by Edgar on 13/01/2017.
 */

import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';

import GroupAction from '../../src/actions/GroupAction';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';
import GroupAPI from '../../src/api/GroupAPI';
import ActionType from '../../src/constants/ActionTypes';


describe('Action Group test', function () {

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
    });

    afterEach(() => {
    });

    it('dispatches GROUP_GET_ALL event', () => {
        let getAllGroupStub = sinon.stub(GroupAPI, 'getAllGroup');
        getAllGroupStub.returns(_groups);
        let spy = sinon.spy(AppDispatcher, 'dispatch');

        GroupAction.getAllGroup();

        sinon.assert.calledOnce(getAllGroupStub);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, {
            actionType: ActionType.GROUP_GET_ALL,
            groups: _groups
        });

        AppDispatcher.dispatch.restore();
        GroupAPI.getAllGroup.restore();
    });

    it('dispatches GROUP_UPDATE event', () => {
        let updateGroupStub = sinon.stub(GroupAPI, 'updateGroup');
        updateGroupStub.returns(_groups);
        let spy = sinon.spy(AppDispatcher, 'dispatch');

        GroupAction.updateGroup();

        sinon.assert.calledOnce(updateGroupStub);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, {
            actionType: ActionType.GROUP_UPDATE,
            groups: _groups
        });

        AppDispatcher.dispatch.restore();
        GroupAPI.updateGroup.restore();
    });

    it('dispatches GROUP_DELETE event', () => {
        let deleteInGroupStub = sinon.stub(GroupAPI, 'deleteInGroup');
        deleteInGroupStub.returns(_groups);
        let spy = sinon.spy(AppDispatcher, 'dispatch');

        GroupAction.deleteInGroup();

        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, {
            actionType: ActionType.GROUP_DELETE,
            groups: _groups
        });

        AppDispatcher.dispatch.restore();
        GroupAPI.deleteInGroup.restore();
    });
});