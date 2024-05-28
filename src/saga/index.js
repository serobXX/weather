import { takeEvery, put, call } from "redux-saga/effects";
import { fetchDataSuccess, fetchSearchDataRequest } from "../actions";
import axios from "axios";

const API_KEY = '6afe13a6ed40a5d716aa91f72f544ea0'

const fetchCurrentDataFromAPI = async (city) => {

    const weatherInfo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    return weatherInfo.data
};
const fetchDailytDataFromAPI = async (city) => {
    const weatherInfo = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
    return weatherInfo.data
};


function* fetchData({ city }) {
    try {
        const currentdata = yield call(fetchCurrentDataFromAPI, city);
        const dailydata = yield call(fetchDailytDataFromAPI, city);
        yield put(fetchDataSuccess({
            current: currentdata,
            daily: dailydata
        }));
    } catch (error) {
        console.log(error);
    }
}

export function* watchFetchData() {
    yield takeEvery("FETCH_DATA_REQUEST", fetchData);

}
