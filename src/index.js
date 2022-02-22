import _ from 'lodash';
import { sayHello } from './libs/hello';
import { sum } from './libs/sum'
import './libs/other'
console.log('Ba Hieu' );
console.log(sum(5,4));
sayHello();
const bahieu = 'sf';
console.log(bahieu); 

console.log(_.size([1,2,3]));

const PI = 3.14;
console.log(`Pi is: ${PI}`);