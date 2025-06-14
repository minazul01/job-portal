import { useContext } from "react"
import NewContext from "../../Firebase/Context/CreateContext"

const useAuth = () => {
    const context = useContext(NewContext);
    return context;
}
export default useAuth;