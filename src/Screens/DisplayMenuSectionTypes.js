import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMsType } from "../actions/menuItemsActions";
import Loder from "../Components/Loder";

const DisplayMenuSectionTypes = ({ match }) => {
  const outletId = match.params.outletId;
  const brandId = match.params.brandId;
  const { loading, mstype } = useSelector((state) => state.allMsType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMsType(outletId));
  }, [getMsType]);
  return (
    <div style={{ margin: "10px" }}>
      <center>
        <div className="header" style={{ paddingTop: 10 }}>
          <img
            src={localStorage.getItem("brandimg")}
            className="brand_small_banner"
            alt=""
          />
        </div>

        <div className="responsive">
          <h1> Welcome to {localStorage.getItem("branch")}</h1>
          {loading ? (
            <Loder />
          ) : (
            <Fragment>
              {mstype.length > 0 ? (
                <Fragment>
                  {mstype.map((menu) => (
                    <Link
                      to={`/${brandId}/${outletId}/${menu.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div key={menu._id} className="gallery1">
                        {/* <hr className="solid"/> */}
                        <div className="desc">View {menu.name} Menu</div>
                      </div>
                    </Link>
                  ))}
                </Fragment>
              ) : (
                <h3 style={{ color: "red" }}>
                  Sorry No Menu Sections Availabe
                </h3>
              )}
            </Fragment>
          )}
        </div>
      </center>
    </div>
  );
};

export default DisplayMenuSectionTypes;
