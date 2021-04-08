import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

const DashBoardScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/admin");
    }
  }, [userInfo, history]);

  return (
    <>
      <Header />
    </>
  );
};

export default DashBoardScreen;
