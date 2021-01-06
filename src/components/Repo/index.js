import React from 'react';
import './styles.css';

export const Repo = ({ repo }) => {
    return (
        <div className="repo-user">
            <h3>{repo.name}</h3>
            <h3>{repo.language}</h3>
        </div>
    )
}
