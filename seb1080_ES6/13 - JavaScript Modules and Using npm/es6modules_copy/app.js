import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

import { apiKey as key, url, sayHi, old, dog } from './src/config'

import User, { createURL, gravatar } from './src/user';

const seb = new User('Seb Blais', 'sebastienblaisfernandez@gmail.com', 'seb1080.com');
const profile = createURL(seb.name);
const image = gravatar(seb.email);
console.log(image)
console.log(key);

