import React from 'react';
import './styles.css';
import { useRepositoy } from '../../contexts/repositories';

export const User = () => {
    const { user } = useRepositoy();
    console.log(user);

    return (
        <div>
            <div class="card-container">
                <img width={110} class="round" src={user.avatar_url} alt="user" />
                <h3>{user.login}</h3>
                <h6>{user.location}</h6>
                <p className="bio-user">{user.bio}</p>
                <div class="buttons">
                    <button class="primary">
                        Repositórios
		        </button>
                    <button class="primary ghost">
                        Following
		        </button>
                </div>
                {/* <div class="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}
