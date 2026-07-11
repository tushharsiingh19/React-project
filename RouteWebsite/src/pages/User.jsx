import { Outlet,useParams } from "react-router-dom";
import React from "react";
function User() {
    const {userId}=useParams()
  return (
    <>
    <div>User :`{userId}`</div>
    </>
  );
}
export default User

