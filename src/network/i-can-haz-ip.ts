import type {IPAddressRetriever} from './network.ts';

export class ICanHazIp implements IPAddressRetriever {
    async getIPAddress(): Promise<string> {
        const response: Response = await fetch("https://icanhazip.com")
        let text: string = await response.text();
        text = text.trimEnd()
        return text;
    }
}
