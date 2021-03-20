import {CustomDomainFactory} from "../domains/custom/custom.domain.factory";
import {Domain} from "../domains/domain";
import {Service} from "../services/services.crud";

export const createCommand = async (request, reply) => {
    console.log(request.params.entity, request.query);
    const crudService = request.diScope.resolve('crudService') as Service
    const domainObjectsFactory = new CustomDomainFactory(request.params.entity, request.query);
    const entity : Domain = domainObjectsFactory.instantiate();
    crudService.add(entity);

    return {
        success: true,
        entity: entity.whoAmI()
    };
};