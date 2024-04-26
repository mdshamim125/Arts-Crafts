import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuth from "../../hooks/Hooks";
import Swal from "sweetalert2";



const Register = () => {
  const { createUser, updateUserProfile } = useAuth();

  const [registerError, setRegisterError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.photoURL.value;
    console.log(name, email, password);

    // reset error
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one uppercase character."
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one lowercase character."
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);

        updateUserProfile(name, image)
          .then(() => {
            Swal.fire({
                title: "Congratulation!",
                text: "user created successfully!",
                icon: "success"
              });
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
            setRegisterError(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200" data-aos="fade-down">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            
          </div>
          <div className="card shrink-0 lg:w-[600px] md:w-[500px] w-[300px] mt-6 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="absolute top-3 right-4 w-[]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label">
                Have you an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
            </form>
            {registerError && (
              <p className="p-4 text-red-600">{registerError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
