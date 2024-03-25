import {assertEquals} from "https://deno.land/std@0.220.1/assert/mod.ts";
import {IFConfigMe} from './if-config.me.ts';
import {VALID_IP_ADDRESS} from './network.ts';


Deno.test("GET request to ifconfig.me should return status 200", async (t: Deno.TestContext): Promise<void> => {
    const response: Response = await fetch("https://ifconfig.me");

    assertEquals(response.status, 200, "Response status should be 200");

    await t.step("Returned IP should match the known value", async (): Promise<void> => {
        const text: string = await response.text();

        const magicStringBegin: string = "<td id=\"ip_address_cell\"><strong id=\"ip_address\">";
        const magicStringEnd: string = "</strong></td>"

        const magicStringBeginIndex: number = text.indexOf(magicStringBegin)
        const magicStringEndIndex: number = text.indexOf(magicStringEnd, magicStringBeginIndex)

        const ipAddress: string = text.substring(magicStringBeginIndex + magicStringBegin.length, magicStringEndIndex)

        assertEquals(VALID_IP_ADDRESS, ipAddress, "Returned IP should match the known value");
    });
});

Deno.test(function verifyURL(): void {
    const ifConfigMe: IFConfigMe = new IFConfigMe();
    const URL: string = ifConfigMe.getURL();
    assertEquals("https://ifconfig.me", URL, "getURL should return the correct URL");
})
