import {url} from './config';

export function getUsers(): Promise<any> {
  return fetch(`${url}/?results=20`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}
