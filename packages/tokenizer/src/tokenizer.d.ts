declare module "@rcn-core/tokenizer" {
	export class Tokenizer {
		constructor(secret: string);
		createToken(
			payload: object,
			options?: import("jsonwebtoken").SignOptions
		): string;
		verifyToken(token: string): object | string;
		setSecret(newSecret: string): void;
	}
}
