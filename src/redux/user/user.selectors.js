const getUserInfoSelector = (state) => {;
  return state.users.userInfo;
};

const getUserFeedSelector = (state) => {
  return state.users.userFeed;
}

export { getUserInfoSelector, getUserFeedSelector };
