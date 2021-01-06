import React, {useState, useEffect} from 'react'
import { Repo } from '../../components/Repo';
import { User } from '../../components/User';
import { getUsers } from '../../services/api';
import './styles.css';
import { useRepositoy } from '../../contexts/repositories';

export const Repos = () => {
    const {user} = useRepositoy();
    const [repos, setRepos] = useState([]);

    useEffect(() => {    
        const getRepos = async() => {
            if(user) {
                setRepos(user.repos);
            }
        }
        getRepos();
        
    }, [user])

    return (
        <div className="container-users">
            {user && (
                <>
                <User/>
                <div className="container-repos">
                    <h3>Repositórios</h3>
                    <div className="content-repo">
                        {repos && repos.map(r=> (
                            <Repo repo={r} key={r} />
                        ))}
                    </div>
                </div>
                </>
            )}
        </div>
    )
}
