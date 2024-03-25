import type {IPAddressRetriever} from './network.ts';

export class ICanHazIp implements IPAddressRetriever {
    URL: string = "https://icanhazip.com"

    getURL(): string {
        return this.URL;
    }

    async getIPAddress(): Promise<string> {
        const response: Response = await fetch(this.URL)
        let text: string = await response.text();
        text = text.trimEnd()
        return text;
    }
}
