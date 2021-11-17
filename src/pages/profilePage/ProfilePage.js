import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Profile from "../../components/profile/Profile";

import { getUserFeedOperation, getUserInfoOperation } from "../../redux/user/user.operations";
import { getUserFeedSelector, getUserInfoSelector } from "../../redux/user/user.selectors";

const ProfilePage = () => {
  const { uniqueId } = useParams();
  const userData = useSelector(getUserInfoSelector);
  const userFeed = useSelector(getUserFeedSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoOperation(uniqueId));
    dispatch(getUserFeedOperation(uniqueId));
  }, [dispatch, uniqueId]);

  return <>{userData && <Profile userData={userData} userFeed={userFeed} />}</>;
};

export default ProfilePage;
