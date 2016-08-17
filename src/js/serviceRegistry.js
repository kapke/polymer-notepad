import {ServiceRegistry} from 'sg-service-registry';

import {NoteRepository} from './NoteRepository';


const serviceRegistry = new ServiceRegistry();

serviceRegistry.register('noteRepository', () => {
    return new NoteRepository();
});

export {serviceRegistry};