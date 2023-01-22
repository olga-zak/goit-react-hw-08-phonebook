export const selectToken = state => state.auth.selectToken;
export const selectName = state => state.auth.user.name;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
