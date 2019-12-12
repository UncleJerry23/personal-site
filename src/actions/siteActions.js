import { createAction } from 'promise-middleware-redux';

export const [
  didVisit,
] = createAction('DID_VISIT', () => true);
