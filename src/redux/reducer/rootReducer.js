import { ADD_TASK, EDIT_TASK, STATUS_UPDATE } from "../constants/actionTypes";

const initialState = {
    tasks: [
        {
            id: 0,
            title: '',
            description: '',
            isDone: "false"
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
               tasks: [...state.tasks, action.payload]
            }

        case EDIT_TASK:
                let data = action.payload;
                let editedState = [];
                state.tasks.map( item => {
                    if ( item.id === data.id ){
                        item.id = data.id;
                        item.title = data.title;
                        item.description = data.description;
                    }
                    editedState.push(item)
                })

                return {
                    tasks: [...editedState]
                }
        
        case STATUS_UPDATE:
            let status = action.payload;
            let editedStatus = [];
            state.tasks.map( item => {
                if ( item.id === status.id){
                    item.id = status.id;
                    item.title = status.title;
                    item.description = status.description;
                    item.isDone = status.isDone;
                }
                editedStatus.push(item)
            })
            return {
                tasks: [...editedStatus]
            }


        default:
            return state;
    }
}

export default rootReducer;