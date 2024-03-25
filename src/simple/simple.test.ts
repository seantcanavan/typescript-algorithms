import {assertEquals, assertNotEquals} from "https://deno.land/std@0.220.1/assert/mod.ts";


Deno.test(function verifyTestSetup(): void {
    console.log("This is a simple test with no return type that verifies that Deno.test is working with an anonymous function.");
})

Deno.test("GET request to google.com should return 200 and have valid text content", async (t: Deno.TestContext): Promise<void> => {
    const response: Response = await fetch("https://google.com");

    assertEquals(response.status, 200, "Response status should be 200");

    await t.step("Returned text content should not be empty", async (): Promise<void> => {
        const text: string = await response.text();

        assertNotEquals(0, text.length)
    });
});
