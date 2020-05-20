import React, {createContext, useState, useCallback} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState("User");

    const adicionarUsuario = useCallback((retornoCallBack) => {
        setUsuario(retornoCallBack);
        //console.log(retornoCallBack);
    }, []);
    
    //children
    return(
        <UserContext.Provider value={{usuario, adicionarUsuario}}>
            {children}
        </UserContext.Provider>
    );


}

export {UserContext, UserProvider};