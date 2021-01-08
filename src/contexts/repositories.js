import React, { createContext, useEffect, useState, useContext } from 'react';
import { getUser, getReposByUserLogin, getStarredUser } from '../services/api';
const RepositoryContext = createContext();

const RepositoryProvider = ({children}) => {
    const [user, setUser] = useState(null);
 
    const getUserRepositories = async(user) => {
        setUser(null);
        let userData = await mountGitUser(await getUser(user));
        setUser(userData);
    }

    const mountGitUser = async (user) => {
        if(user && user.message) {
            return {error: 'Usuario não encontrado'};
        }

        let userData = {
            ...user,
            repos: await getReposByUserLogin(user.login),
        }

        return userData;
    }

    return (
        <RepositoryContext.Provider value={{
            user,
            getUserRepositories
        }}>
          {children}
        </RepositoryContext.Provider>
      )
}

function useRepositoy() {
    return useContext(RepositoryContext);
}

export {RepositoryProvider, useRepositoy, RepositoryContext};