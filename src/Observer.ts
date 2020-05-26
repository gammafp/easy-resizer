import EventEmitter from 'eventemitter3';

let Observer = new EventEmitter();

let GLOBAL_EVENT = {
   NOTIFICATION_SYSTEM: {
       WARNING: 'WARNING',
       CLEAR: 'CLEAR',
       ERROR: 'ERROR'
   }
};

export { Observer, GLOBAL_EVENT };
