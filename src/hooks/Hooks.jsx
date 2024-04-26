import { useContext } from "react";
import { AuthContext } from "../firebase-provdier/FirebaseProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
