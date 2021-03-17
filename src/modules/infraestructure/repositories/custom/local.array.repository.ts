import {Repository} from "../repository.interface";
import {Domain} from "../../../domains/domain";
import {Hashmap} from "../../../DTO/hashmap";

export class LocalArrayRepository implements Repository {
    private items: Hashmap[] = [{ hello: 'world' }];

    async findAll(): Promise<Domain[]> {
        //TODO: map with mapper from Hashmap to Domain
        return this.items.map(i => i as Domain);
    }

    async save(item: Domain): Promise<Domain> {
        this.items.push(item.toDTO());
        return item;
    }
}