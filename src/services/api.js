import React from 'react';

const url = 'https://api.github.com/';

const getUser = (name) => {

}

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = req.json();

  return json;
}