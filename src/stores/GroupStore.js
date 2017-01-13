/**
 * Created by Edgar on 12/01/2017.
 */

"use strict";
var $ = require('jquery');
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionType from '../constants/ActionTypes';
import {EventEmitter} from  'events';

const CHANGE_EVENT = 'change';
let _groups = [];

class GroupStore extends EventEmitter {

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    getAllGroups() {
        return _groups;
    }

    getGroupById(id) {
        return _groups.find(group => group.id == id);
    }
}

const groupStore = new GroupStore();

AppDispatcher.register(action => {

    switch (action.actionType) {
        case ActionType.GROUP_GET_ALL:
            _groups = action.groups;
            break;
        case ActionType.GROUP_UPDATE:
            _groups = action.groups;
            break;
        case ActionType.GROUP_DELETE:
            _groups = action.groups;
            break;
        default:
    }
    groupStore.emitChange();
});

export default groupStore;