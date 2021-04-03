/*
contracts - JS type constraints

Main re-export file.
*/

// helpers
const toTitleCase = ([x,...xs]) => x.toUpperCase() + xs.join('').toLowerCase();

import die from './die.js'

const contracts = {};

contracts.die = die;


export default contracts;
