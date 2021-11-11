/**
 * Exin
 */
declare class SnappyJS{
    static compress(value:any):any;
    static uncompress(value:any):any;
}

declare module "snappyjs" {
    export = SnappyJS;
}
