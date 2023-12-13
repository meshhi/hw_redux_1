import { ActionTypes } from '../actions/actionTypes';

interface IAction {
    type: ActionTypes,
    payload: any,
}

const initialState = [
    {id: 1, name: 'change glass', price: 1000}
]

export default function serviceListReducer(state = initialState, action : IAction) {
    switch(action.type) {
        case(ActionTypes.ADD_SERVICE):
            return [
                ...state,
                {...action.payload, id: state[state.length - 1] ? state[state.length - 1].id + 1 : 1},
            ]
        case(ActionTypes.REMOVE_SERVICE):
            return [
                ...state.filter(service => {
                    return service.id != action.payload.id;
                }),
            ]
        default:
            return state;
    }
}