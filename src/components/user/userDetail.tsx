import React from "react";
import { useAppSelector } from "../../app/hooks";

function UserDetail() {
  const user = useAppSelector((state) => state.userDetail);
  const { id, name, username, email } = user.user;

  return (
    <>
      <h2>User Details</h2>
      {<div className="loader"> {user.loading && <div>Loading...</div>}</div>}

      <section>
        Id : {id} <br />
        Name: {name} <br />
        Username : {username} <br />
        Email: {email} <br />
      </section>
    </>
  );
}

export default React.memo(UserDetail);
