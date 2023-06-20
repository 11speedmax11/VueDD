import '@/scss/index.scss';

import {
    ctreateMain,
    createNavigation,
    createPlug,
    createTask,
    createProject,
} from './helpers';

import {installEvent} from './events';

import '@/js/register.js';

createNavigation();
ctreateMain();
createPlug();
createTask();
createProject();
installEvent();
