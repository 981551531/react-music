import * as actionTypes from '../constants/index';


const myTest = (state = {}, action) => {
    switch (action.type) {

        case actionTypes.ADD_DATE:

            return action.data;
            break;
        default:
            return state;

    }
};

export default myTest