declare module "@rcn-core/hyperion" {
	export class Hyperion {
		ping(): Promise<{
			timestamp: Date;
			results: Array<{
				site: string;
				status: string;
				statusCode?: number;
				error?: string;
			}>;
		}>;
	}
}
