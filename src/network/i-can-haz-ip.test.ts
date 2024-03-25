import {assertEquals} from "https://deno.land/std@0.220.1/assert/mod.ts";
import {ICanHazIp} from './i-can-haz-ip.ts';
import {VALID_IP_ADDRESS} from './network.ts';


Deno.test("GET request to icanhazip.com should return status 200 and valid IP address", async (t: Deno.TestContext): Promise<void> => {
    const response: Response = await fetch("https://icanhazip.com");

    assertEquals(response.status, 200, "Response status should be 200");

    await t.step("Returned IP should match the known value", async (): Promise<void> => {
        let text: string = await response.text()
        text = text.trimEnd()
        const ipAddress: string = text.trimEnd()

        assertEquals(VALID_IP_ADDRESS, ipAddress, "Returned IP should match the known value");
    });

    await t.step("Returned IP from getIPAddress from the class parser", async (): Promise<void> => {
        const parser: ICanHazIp = new ICanHazIp();
        const ipAddress: string = await parser.getIPAddress()

        assertEquals(VALID_IP_ADDRESS, ipAddress, "Returned IP should match the known value");
    });
})
