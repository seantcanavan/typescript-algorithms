export const VALID_IP_ADDRESS: string = "209.150.247.212";

export interface IPAddressRetriever {
    URL: string;
    
    getURL(): string;

    getIPAddress(): Promise<string>;
}
