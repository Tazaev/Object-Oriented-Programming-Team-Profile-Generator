// test for creating a engineer object
const Engineer = require("../lib/Engineer.js");

test("creates a new engineer object", () => {
  const engineer = new Engineer(
    "Benjamin",
    7,
    "Benjamin@yahoo.com",
    "BenjaminGitHub"
  );

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.role).toEqual(expect.any(String));
});

test("gets new engineer name", () => {
  const engineer = new Engineer(
    "Benjamin",
    7,
    "Benjamin@yahoo.com",
    "BenjaminGitHub"
  );

  expect(engineer.getName()).toBe("Benjamin");
});

test("gets engineer id", () => {
  const engineer = new Engineer(
    "Benjamin",
    7,
    "Benjamin@yahoo.com",
    "BenjaminGitHub"
  );

  expect(engineer.getId()).toBe(7);
});

test("gets engineer email", () => {
  const engineer = new Engineer(
    "Benjamin",
    7,
    "Benjamin@yahoo.com",
    "BenjaminGitHub"
  );

  expect(engineer.getEmail()).toBe("Benjamin@yahoo.com");
});

test("gets engineer role", () => {
  const engineer = new Engineer(
    "Benjamin",
    7,
    "Benjamin@yahoo.com",
    "BenjaminGitHub"
  );

  expect(engineer.getRole()).toBe("Engineer");
  console.log(engineer);
});

test("gets engineer github", () => {
  const engineer = new Engineer(
    "Benjamin",
    7,
    "Benjamin@yahoo.com",
    "BenjaminGitHub"
  );

  expect(engineer.getGithub()).toBe("BenjaminGitHub");
});
