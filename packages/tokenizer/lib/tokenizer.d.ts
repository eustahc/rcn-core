import * as jwt from "jsonwebtoken";
export declare class Tokenizer {
    private secret;
    constructor(secret: string);
    createToken(payload: object, options?: jwt.SignOptions): string;
    verifyToken(token: string): object | string;
    setSecret(newSecret: string): void;
}
