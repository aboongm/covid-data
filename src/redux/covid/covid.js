import Axios from 'axios';

const baseURL = 'https://api.covid19tracking.narrativa.com/api/';
const date = '2022-05-22';
const url = `${baseURL}${date}`;
// constants
const FETCH_DATA = 'covid/covid/FETCH_DATA';

// initial-state
const initialState = {
  datesData: {},
  totalData: {},
};

// actions
export const fetchDataAction = (dates, total) => ({
  type: FETCH_DATA,
  dates,
  total,
});

export const fetchDataApi = () => async (dispatch) => {
  const returnValue = await Axios.get(url);
  const {
    data: { dates, total },
  } = returnValue;
  dispatch(fetchDataAction(dates, total));
};

// reducer
const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        datesData: action.dates[date].countries,
        totalData: action.total,
      };
    default:
      return state;
  }
};

export default covidReducer;
