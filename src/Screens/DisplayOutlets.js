import React, { Fragment, useEffect } from "react";
import "./DisplayOutlets.css";
import { getOutlets } from "../actions/menuItemsActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loder";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
const DisplayOutlets = ({ match }) => {
  const dispatch = useDispatch();
  const brandId = match.params.brandId;
  const history = useHistory();
  const { loading, outlets } = useSelector((state) => state.outlets);
  useEffect(() => {
    dispatch(getOutlets(brandId));
  }, []);
  return (
    // <div className='container'>
    //     <center>
    //     <div className="row">
    //         <div className="image">
    //             <img className='img' src='/images/nodles.jpg' alt="" />
    //         </div>
    //         <div className="details">
    //                 <h2>outletName</h2>
    //             </div>
    //     </div>
    //     </center>
    // </div>
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <center>
            <div className="header">
              <img
                src={localStorage.getItem("brandimg")}
                className="brand_banner"
                alt=""
              />
            </div>
          </center>
          {outlets.length > 0 &&
            outlets.map((outlet) => (
              <div
                className="responsive"
                onClick={() => localStorage.setItem("branch", outlet.title)}
              >
                <Grid xs={12} sm={12} md={12}>
                  <Link
                    to={`/${brandId}/${outlet._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="gallery">
                      <a target="_blank" style={{ margin: 0 }} href="#">
                        <img
                          src="/images/store.jpg"
                          alt="Cinque Terre"
                          width="600"
                          height="400"
                          style={{ borderRadius: "5px" }}
                        />
                      </a>
                      {/* <hr className="solid"/> */}
                      <div className="desc">{outlet.title}</div>
                    </div>
                  </Link>
                </Grid>
              </div>
            ))}
        </Fragment>
      )}
    </div>
  );
};

export default DisplayOutlets;
