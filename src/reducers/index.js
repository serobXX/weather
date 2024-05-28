const initialState = {
    data: {},
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        default:
            return state;
    }
};

export default dataReducer;