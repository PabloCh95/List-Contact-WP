import {url} from './config';
import { Result } from '../interfaces/contactsInterface';

export function getUsers(): Promise<Result> {
  return fetch(`${url}/?results=20`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}
