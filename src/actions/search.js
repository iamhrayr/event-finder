import axios from 'axios';
import { FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS } from './actionTypes';

export const fetchEvents = (keyword) => {
  return dispatch => {
    dispatch(fetchEventsRequest());

    axios.get(`https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&token=O2RWQKUQ7CMWH3VGK275`)
      .then(events => {
        // Keyword
        console.log(events);
        dispatch(fetchEventsSuccess(events.data));
      })

    function fetchEventsRequest(){
      return {
        type: FETCH_EVENTS_REQUEST
      }
    }
    function fetchEventsSuccess(events){
      return {
        type: FETCH_EVENTS_SUCCESS,
        payload: events
      }
    }
  }
}
