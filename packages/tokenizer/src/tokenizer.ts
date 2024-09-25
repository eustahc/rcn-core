import jwt from "jsonwebtoken";

export class Tokenizer {
	private secret: string;

	constructor(secret: string) {
		this.secret = secret;
	}

	createToken(payload: object, options?: jwt.SignOptions): string {
		return jwt.sign(payload, this.secret, options);
	}

	verifyToken(token: string): object | string {
		try {
			return jwt.verify(token, this.secret);
		} catch (error) {
			throw new Error("Invalid token");
		}
	}

	setSecret(newSecret: string): void {
		this.secret = newSecret;
	}
}
