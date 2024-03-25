import {IPAddressRetriever} from './network.ts';

export class IFConfigMe implements IPAddressRetriever {
    URL: string = "https://ifconfig.me"

    getURL(): string {
        return this.URL;
    }

    async getIPAddress(): Promise<string> {
        const response: Response = await fetch(this.URL);
        const text: string = await response.text();

        const magicStringBegin: string = "<td id=\"ip_address_cell\"><strong id=\"ip_address\">";
        const magicStringEnd: string = "</strong></td>"
        const magicStringBeginIndex: number = text.indexOf(magicStringBegin)
        const magicStringEndIndex: number = text.indexOf(magicStringEnd, magicStringBeginIndex)

        const ipAddress: string = text.substring(magicStringBeginIndex + magicStringBegin.length, magicStringEndIndex)
        console.log("your ip address is ", ipAddress)
        return ipAddress;
    }
}
