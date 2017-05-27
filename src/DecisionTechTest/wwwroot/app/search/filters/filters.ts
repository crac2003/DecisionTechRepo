import { SearchRequest} from '../models/models';


export abstract class FilterBase {
    abstract applyFilter(request:SearchRequest): void;    
}

export class TypeCheckBoxFilter extends FilterBase {
    public isEnabled: boolean = false;

    constructor(public label: string, private key: string) {
        super();
    }

    applyFilter(request: SearchRequest): void {
        if (this.isEnabled) {
            request.types.push(this.key);
        }
    }
}

export class DropDownOptions {
    public label: string;
    public value: string;
}

export class DropDownFilter extends FilterBase {
    public selectedValue: string;

    constructor(private label: string,
        public key: string,
        private defaultValue:string,
        public options: DropDownOptions[]) {
        super();
    }

    applyFilter(request: SearchRequest): void {
        if (!this.selectedValue) {
            request[this.key] = '';
            return;
        }

        request[this.key] = this.selectedValue;
    }
}