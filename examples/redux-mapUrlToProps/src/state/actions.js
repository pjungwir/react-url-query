import { urlAction, QueryParamTypes } from 'react-url-query';

export const CHANGE_BAZ = 'CHANGE_BAZ';
export const CHANGE_FOO = 'CHANGE_FOO';
export const CHANGE_BAR = 'CHANGE_BAR';
export const CHANGE_ARR = 'CHANGE_ARR';

/**
 * Standard redux action creator
 */
export function changeBaz(baz) {
  return {
    type: CHANGE_BAZ,
    payload: baz
  };
}

/**
 * Action creators for the urlQueryReducer. The first argument specifies
 * the action type, the second the query parameter name (what shows up in
 * the URL), and the third argument specifies the value type (used to
 * encode the value as a string for the URL).
 *
 * Application code uses these the same way standard redux action creators
 * are used. (e.g., `dispatch(changeFoo(94))`)
 */
export const changeFoo = urlAction(CHANGE_FOO, 'fooInUrl', QueryParamTypes.number);
export const changeBar = urlAction(CHANGE_BAR, 'bar', QueryParamTypes.string);
export const changeArr = urlAction(CHANGE_ARR, 'arr', QueryParamTypes.array);
