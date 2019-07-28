import RestApi from './restapi';
import { where } from './util/query';
export declare const rally: {
    createClient: (x: any) => RestApi;
    debug: boolean;
    util: {
        query: {
            where: typeof where;
        };
        ref: {
            isRef(input: any): boolean;
            getRelative(input: any): string | null;
            getType(input: any): any;
            getId(input: any): any;
        };
    };
};
