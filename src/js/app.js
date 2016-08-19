import {serviceRegistry} from './serviceRegistry';

const ServicesBehavior = {
    getService (name) {
        return serviceRegistry.get(name);
    }
};

window.ServicesBehavior = ServicesBehavior;
