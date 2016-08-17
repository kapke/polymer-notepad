import {serviceRegistry} from './serviceRegistry';

console.log(serviceRegistry.get('noteRepository'));

const ServicesBehavior = {
    getService (name) {
        return serviceRegistry.get(name);
    }
};

window.ServicesBehavior = ServicesBehavior;
