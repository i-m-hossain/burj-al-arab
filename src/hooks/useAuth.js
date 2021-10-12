import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider";

const useAuth =() => useContext(AuthContext)
export default useAuth