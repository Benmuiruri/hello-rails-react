const FETCHED = 'helloRailsReact/greetings/FETCHED';

const greetingFetched = (text) => ({
  type: FETCHED,
  payload: {
    text,
  },
});

export const getGreeting = () => (dispatch) => {
  const URL = '/greetings.json';
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      dispatch(greetingFetched(res.data));
    })
    .catch((error) => console.log(error));
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCHED:
      return action.payload.text;
    default:
      return state;
  }
}
