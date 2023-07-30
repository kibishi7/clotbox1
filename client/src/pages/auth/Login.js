import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="login-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6"> {/* Column for the image */}
                <img src="./assets/images/login_image.jpg" alt="Login" className="img-fluid" />
              </div>
              <div className="col-md-6"> {/* Column for the form */}
                <div className="form-container">
                  <Form
                    formTitle={"Login Page"}
                    submitBtn={"Login"}
                    formType={"login"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
