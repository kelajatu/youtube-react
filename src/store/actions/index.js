export function createAction(type, payload = {}) {
  return {
    type,
    ...paylod
  };
}
