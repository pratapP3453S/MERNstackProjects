import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import BackdropLoader from "../Layouts/BackdropLoader";
import MetaData from "../Layouts/MetaData";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loading, loggedInUser, userLoginAsync } from "../../redux/slice/userSlice.js";

const Login = () => {
 

  // console.log("inLogin isAuthenticated at the beginning:", isAuthenticated);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(loggedInUser);
  const load = useSelector(loading);

  return (
    <>
      <MetaData title="Login | Flipkart" />
      {load && <BackdropLoader />} 
       {user && <Navigate to="/"></Navigate>}
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          {/* <!-- sidebar column  --> */}
          <div className="loginSidebar bg-blue-600 p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
            <h1 className="font-medium text-white text-3xl">Login</h1>
            <p className="text-gray-200 text-lg">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="image" style={{ marginTop: '40%'}}/>
          </div>
          {/* <!-- sidebar column  --> */}

          {/* <!-- login column --> */}
          <div className="flex-1 overflow-hidden">
            {/* <!-- edit info container --> */}
            <div className="text-center py-10 px-4 sm:px-14">
              {/* <!-- input container --> */}
              <form noValidate onSubmit={handleSubmit((data) => {
                  dispatch(userLoginAsync({email: data.email, password: data.password}));
                  reset();
              })}>
                <div className="flex flex-col w-full gap-4">
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    {...register("email",{ required: "Email is required.", pattern:{
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid Email"
                    }})}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    {...register("password", {required: "Password is required.", pattern: {
                      value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: `- at least 8 characters\n
                    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                    - Can contain special characters`,
                    }})}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                  {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                  {/* <!-- button container --> */}
                  <div className="flex flex-col gap-2.5 mt-2 mb-32">
                    <p className="text-xs text-primary-grey text-left">
                      By continuing, you agree to Flipkart's{" "}
                      <a
                        href="https://www.flipkart.com/pages/terms"
                        className="text-blue-600"
                      >
                        {" "}
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.flipkart.com/pages/privacypolicy"
                        className="text-blue-600"
                      >
                        {" "}
                        Privacy Policy.
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="text-white py-3 w-full bg-orange-500 shadow hover:shadow-lg rounded-sm font-medium"
                    >
                      Login
                    </button>
                    <Link
                      to="/password/forgot"
                      className="hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  {/* <!-- button container --> */}
                </div>
              </form>
              {/* <!-- input container --> */}

              <Link
                to="/register"
                className="font-medium text-sm text-primary-blue"
              >
                New to Flipkart? Create an account
              </Link>
            </div>
            {/* <!-- edit info container --> */}
          </div>
          {/* <!-- login column --> */}
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Login;
