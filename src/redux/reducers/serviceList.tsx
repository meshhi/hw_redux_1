import { ActionTypes } from '../actions/actionTypes';

interface IAction {
    type: ActionTypes,
    payload: any,
}

const initialState = [
    {id: 1, name: 'change glass', price: 1000, visible: true},
]

export default function serviceListReducer(state = initialState, action : IAction) {
    switch(action.type) {
        case(ActionTypes.ADD_SERVICE):
            return [
                ...state,
                {...action.payload, id: state[state.length - 1] ? state[state.length - 1].id + 1 : 1},
            ]
        case(ActionTypes.CHANGE_SERVICE):
        console.log(state)
            return [
                ...state.map(service => {
                    if(service.id !== action.payload.id) return service;
                    return {
                        ...service,
                        name: action.payload.name,
                        price: action.payload.price
                    }
                })
            ]
        case(ActionTypes.REMOVE_SERVICE):
            return [
                ...state.filter(service => {
                    return service.id != action.payload.id;
                }),
            ]
        case(ActionTypes.FILTER_SERVICE):
            return [
                ...state.map(service => {
                    if (action.payload.name === "") return {
                        ...service, visible: true
                    };
                    return {
                        ...service, visible: service.name.indexOf(action.payload.name) !== -1 ? true : false
                    };
                }),
            ]
        default:
            return state;
    }
}