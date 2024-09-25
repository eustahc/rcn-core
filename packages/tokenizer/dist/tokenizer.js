"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokenizer = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Tokenizer {
    constructor(secret) {
        this.secret = secret;
    }
    createToken(payload, options) {
        return jsonwebtoken_1.default.sign(payload, this.secret, options);
    }
    verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, this.secret);
        }
        catch (error) {
            throw new Error("Invalid token");
        }
    }
    setSecret(newSecret) {
        this.secret = newSecret;
    }
}
exports.Tokenizer = Tokenizer;
