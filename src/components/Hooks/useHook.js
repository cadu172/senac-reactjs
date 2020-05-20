import {useContext} from 'react';
import {UserContext} from "../Context/UserContext";

const UseHook = () => {
    const contexto = useContext(UserContext);
    return(contexto);
}

export default UseHook;