/**
 * El sistema está dividido en módulos que se pueden activar o desactivar a gusto.
 *
 * @author seb
 */


'use strict';
const logo    = require('./util/splash');
const api     = require('./modulos/api');
const email   = require('./modulos/email');
const condi   = require('./modulos/condi');
const cmds    = require('./modulos/cmds');
const cron    = require('./modulos/cron');
