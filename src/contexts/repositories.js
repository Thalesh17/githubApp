import React, { createContext, useEffect, useState, useContext } from 'react';
import { getUser, getReposByUserLogin, getStarredUser } from '../services/api';
const RepositoryContext = createContext();

const RepositoryProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const getUserRepositories = async(user) => {
        let userData = await mountGitUser(await getUser(user));
        console.log(userData);
        setUser(userData);
    }

    const mountGitUser = async (user) => {
        let userData = {
            ...user,
            repos: await getReposByUserLogin(user.login),
            // starreds: await getStarredUser(user.starred_url)
        }
        console.log(userData);

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