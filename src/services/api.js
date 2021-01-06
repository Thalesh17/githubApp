import React from 'react';

const url = 'https://api.github.com';

const getUser = async(name) => {
  return await basicFetch(`/users/${name}`);
}

const getReposByUserLogin = async(login) => {
  return await basicFetch(`/users/${login}/repos`);
}

const getStarredUser = async(url) => {
  return await fetchWithoutUrlBase(url);
}

const fetchWithoutUrlBase = async (endpoint) => {
  const req = await fetch(endpoint);
  const json = req.json();

  return json;
}

const basicFetch = async (endpoint) => {
  const req = await fetch(`${url}${endpoint}`);
  const json = req.json();

  return json;
}
export {getUser, getReposByUserLogin, getStarredUser};