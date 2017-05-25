import { Util } from '../utilities/util'

export class Contact {
    readonly id;
    
    constructor(readonly name: string, readonly phone: string) {
        this.id = Util.slugify(name);
    }

    toString(): string {
        return this.name + ':' + this.phone + ':' + this.id;
    }

}
