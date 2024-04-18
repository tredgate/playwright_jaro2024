import { test } from "@playwright/test";

test("Regresin registration API test", async ({ request }) => {
  await request.post("https://reqres.in/api/register", {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
    },
  });
});
