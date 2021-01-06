import React from 'react';
import './colors-language.css';
import './styles.css';

export const Repo = ({ repo }) => {
    return (
        <div className="repo-user">
            <h3>{repo.name}</h3>
            <div className="repo-info">
                <h5>Stars: {repo.stargazers_count}</h5>
                <h5>Forks: {repo.forks}</h5>
                <h5>Forks: {repo.open_issues}</h5>
            </div>
            <small className="update-repo">
                Update {repo.updated_at}
            </small>
            {repo.language && (
                <div className="repo-language">
                    <span className={`${repo.language && repo.language.replace('#', '')} color-language`}></span>
                    <h5>{repo.language}</h5>
                </div>
            )}
        </div>
    )
}
