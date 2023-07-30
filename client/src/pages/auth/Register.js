import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";


const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="register-page"> {/* Add the CSS class for the register page */}
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="./assets/images/banner2.jpg" alt="Register" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="form-container">
                  <Form
                    formTitle={"Register"}
                    submitBtn={"Register"}
                    formType={"register"}
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

export default Register;
