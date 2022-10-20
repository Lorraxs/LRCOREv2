import nconf from 'nconf'
import path from 'path'

import DEFAULT_CONFIG from './constance/DEFAULT_CONFIG'

import checkConfig from './utils/checkConfig';

const DIRNAME:string = path.resolve();
const staticPath:string = path.resolve(DIRNAME, 'resources', 'lr_core_v2', 'static');
const configPath:string = path.resolve(staticPath, 'config.json');


nconf.file({file: path.resolve(staticPath, 'config.json')})
console.log('preparing config ...')
checkConfig(DEFAULT_CONFIG, null)
nconf.save(null)

console.log('starting server ...')

require('./module/core/core')