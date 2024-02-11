import React, { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUser, fetchUserById } from "./userAction";
import UserDetail from "./userDetail";

type User = {
  id: number;
  name: string;
};

function UserView() {
  const user = useAppSelector((state) => state.user);
  const userDetail = useAppSelector((state) => state.userDetail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser())
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getUserDetails = useCallback(
    (user: User) => {
      dispatch(fetchUserById(user.id));
    },
    [user]
  );

  return (
    <>
      <div className="container">
        <div>
          <h3>List of users</h3>
          {
            <div className="loader">
              {" "}
              {user.loading && <div className="loader">Loading...</div>}{" "}
            </div>
          }
          {!user.loading && user.error ? <div>{user.error}</div> : null}
          <ul className="user-list">
            {user.users?.map((user) => (
              <li key={user.id} onClick={() => getUserDetails(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div>{userDetail.isData ? <UserDetail /> : null}</div>
      </div>
    </>
  );
}

export default React.memo(UserView);
