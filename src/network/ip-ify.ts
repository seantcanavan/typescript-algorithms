import type {IPAddressRetriever} from './network.ts';

export class IpIfy implements IPAddressRetriever {
    getIPAddress(): string {
        throw new Error("Method not implemented.");
    }
}
