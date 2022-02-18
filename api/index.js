import * as pkg from './package.json';

import * as list from './list';
import * as images from './images';

const sayHello = function(name) {
    console.log(`Hello ${name}. This is a message from ${pkg.name}`);
}

export { sayHello, list, images }