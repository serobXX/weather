export const fetchDataRequest = (data) => ({
    city: data.city,
    type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
    type: "FETCH_DATA_SUCCESS",
    payload: data,
})
