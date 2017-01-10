"use strict";

import keyMirror from 'keymirror';

export default keyMirror({
    INIT: null,
    // ------------------------------
    //      ACTIVITY
    // ------------------------------
    ACTIVITY_CREATE: null,
    ACTIVITY_DELETE: null,
    GET_ACTIVITY_BY_IDUSER: null,
    GET_ACTIVITY_FOR_CONNECTED_USER:null,
    GET_ALL_ACTIVITIES: null,
    RELEASE_ACTIVITY: null,
    UPDATE_ACTIVITY: null,
    ANNUL_ACTIVITY: null,
    VALIDATE_ACTIVITY_FROM_THE_MANAGER: null,

    // ------------------------------
    //      ACTION
    // ------------------------------
    ACTION_UPDATE: null,
    GET_ALL_ACTION: null,
    CREATE_ACTION: null,

    // ------------------------------
    //      MEAN
    // ------------------------------
    GET_ALL_MEAN: null,
    MEAN_CREATE: null,
    GET_ACTION_MEAN: null,

    GET_ALL_TYPE_MEAN: null,
    MEAN_UPDATE: null,

    // ------------------------------
    //     Users
    // ------------------------------
    GET_ALL_USERS: null,
    GET_USER: null,
    TRANSACTION_MAKE: null,
    ASK_VIZZ: null,
    UPDATE_NOTIFICATION_LIST: null,
    READ_NOTIFICATION: null,
    LOG_OUT: null,
    UPDATE_ROLE: null,

    // ------------------------------
    //     Distinctions
    // ------------------------------
    GET_ALL_DISTINCTIONS : null,
    
    // ------------------------------
    //     BADGE
    // ------------------------------
    GET_ALL_BADGES: null,
    BADGE_CREATE : null,

    // ------------------------------
    //      TRANSACTION
    // ------------------------------
    GET_ALL_TRANSACTION: null,
    GET_ALL_TRANSACTION_BY_USER_ID: null,
    GET_TRANSACTION: null

});
