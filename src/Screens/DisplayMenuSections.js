import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMenuSections } from "../actions/menuItemsActions";
import { useDispatch, useSelector } from "react-redux";
import Loder from "../Components/Loder";
const DisplayMenuSections = ({ match }) => {
  let menusectionId = match.params.menusectionId;
  let outletId = match.params.outletId;
  const brandId = match.params.brandId;
  const { menusections, loading } = useSelector(
    (state) => state.allMenusections
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuSections(menusectionId, outletId));
  }, [getMenuSections]);
  return (
    <div>
      <center>
        <div className="header" style={{ paddingTop: 10 }}>
          <div className="responsive">
            <h1> Dine-In menu</h1>
            {loading ? (
              <Loder />
            ) : (
              <Fragment>
                {menusections.map((menu) => (
                  <Link
                    to={`/${brandId}/${outletId}/${menusectionId}/${menu._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={()=>localStorage.setItem('menuSection',menu._id)}
                  >
                    <div className="gallery">
                      <a target="_blank" style={{ margin: 0 }} href="#">
                        <img
                          src='/images/rool.jpg'
                          alt="Cinque Terre"
                          width="600"
                          height="400"
                          style={{ borderRadius: "5px" }}
                        />
                      </a>
                      {/* <hr className="solid"/> */}
                      <div className="desc">{menu.title}</div>
                    </div>
                  </Link>
                ))}
              </Fragment>
            )}
          </div>
        </div>
      </center>
    </div>
  );
};

export default DisplayMenuSections;
