export const STATEFUL_NEXT_STATE = "STATEFUL_NEXT_STATE";

/* action creators */
export const statefulNextState = (id) => ({
  type: STATEFUL_NEXT_STATE,
  id
});
