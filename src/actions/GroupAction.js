/**
 * Created by Edgar on 12/01/2017.
 */
"use strict";

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionType from '../constants/ActionTypes';
import GroupAPI from '../api/GroupAPI';

export default {

    getAllGroup: () => {
        AppDispatcher.dispatch({
            actionType: ActionType.GROUP_GET_ALL,
            groups: GroupAPI.getAllGroup()
        });
    },

    updateGroup: (newGroup, sentence) => {
        AppDispatcher.dispatch({
            actionType: ActionType.GROUP_UPDATE,
            groups: GroupAPI.updateGroup(newGroup, sentence)
        });
    },

    deleteInGroup: (sentence) => {
        AppDispatcher.dispatch({
            actionType: ActionType.GROUP_DELETE,
            groups: GroupAPI.deleteInGroup(sentence)
        });
    }

}