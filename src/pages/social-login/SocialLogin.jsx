import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Hooks";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        alert("successfully logged in");
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around pb-6">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-secondary"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
