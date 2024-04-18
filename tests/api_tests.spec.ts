import test from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("API Tests @githubactions", () => {
  test("GET Request", async ({ request }) => {
    await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
  });

  test("GET request with parameter", async ({ request }) => {
    await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
      params: {
        userId: 3,
      },
    });
  });

  test("GET request with header", async ({ request }) => {
    await request.get("https://restful-booker.herokuapp.com/booking", {
      headers: {
        "Accept-Language": "en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6",
      },
    });
  });

  test("POST Request with body", async ({ request }) => {
    await request.post(
      "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
      {
        data: {
          email: faker.internet.exampleEmail(),
          username: faker.internet.userName(),
          password: "123456",
        },
      }
    );
  });

  test("Data Transfer - authorization token", async ({ request }) => {
    const email = faker.internet.exampleEmail();
    const username = faker.internet.userName();
    const password = "123456";

    // * Registrace
    await request.post(
      "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
      {
        data: {
          email: email,
          username: username,
          password: password,
        },
      }
    );

    // * Přihlášení
    const loginResponse = await request.post(
      "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
      {
        data: {
          username: username,
          password: password,
        },
      }
    );

    // * Vytažení access_token z přihlašovaí API response
    const responseBody = await loginResponse.json();
    const token = responseBody.access_token;
    console.log(token);

    // * Provolání profile API s předaným tokenem
    await request.get(
      "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/profile",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  });
});
