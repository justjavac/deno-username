import { test } from "https://deno.land/std@v0.24.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.24.0/testing/asserts.ts";

import { cleanWindowsCommand, makeUsernameFromId } from "./utils.ts";

test({
  name: "cleanWindowsCommand",
  fn(): void {
    assertEquals(cleanWindowsCommand("foo\\bar"), "bar");
  }
});

test({
  name: "makeUsernameFromId",
  fn(): void {
    assertEquals(makeUsernameFromId("123"), "no-username-123");
  }
});
