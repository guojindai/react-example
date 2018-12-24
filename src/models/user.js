export default {
  namespace: 'user',
  state: {
    authority: undefined,
  },
  effects: {
  },
  reducers: {
    setAuthority(state, { payload: { authority } }) {
      return {
        ...state,
        authority,
      };
    },
  },
};
