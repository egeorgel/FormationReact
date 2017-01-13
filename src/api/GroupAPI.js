/**
 * Created by Edgar on 12/01/2017.
 */
import _ajax from '../Ajax.js'
import RecurrentConst from '../constants/RecurrentConst';

let groups = [
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

function helper(sentence) {
    let index = null;
    let indexGroup = null;
    groups.map((group, i_g) => {
        for (let i = 0; i < group.sentences.length; ++i) {
            if (group.sentences[i] == sentence) {
                index = i;
                indexGroup = i_g;
            }
        }
    });
    if (index !== null ) {
        groups[indexGroup].sentences.splice(index,1);
    }
}

export default{

    _getAllGroup: () => {
        return _ajax.Get(RecurrentConst.URL + '/group/');
    },

    _updateGroup: (group) => {
        return _ajax.Post(RecurrentConst.URL+ '/group/', group);
    },

    _deleteGroup: (id) => {
        return _ajax.Delete(RecurrentConst.URL+ '/group/' + id);
    },

    getAllGroup: () => {
        return groups;
    },

    updateGroup: (newGroup, sentence) => {
        helper(sentence);
        groups[newGroup].sentences.push(sentence);
        return groups;
    },

    deleteInGroup: (sentence) => {
        helper(sentence);
        return groups;
    }

}