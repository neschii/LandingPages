import { useContext } from "react";
import UserContext from '../contexts/UserContext.tsx'

const useUser = () => useContext(UserContext)
export default useUser 