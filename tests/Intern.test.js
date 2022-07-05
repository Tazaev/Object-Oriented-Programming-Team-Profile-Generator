// test fr intern
const Intern = require("../lib/Intern.js");

test("creates a new intern object", () => {
  const intern = new Intern("Benjamin", 7, "Benjamin@yahoo.com", "NYU");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.role).toEqual(expect.any(String));
});

test("gets the intern name", () => {
  const intern = new Intern("Benjamin", 7, "Benjamin@yahoo.com", "NYU");

  expect(intern.getName()).toBe("Benjamin");
});

test("gets the intern id", () => {
  const intern = new Intern("Benjamin", 7, "Benjamin@yahoo.com", "NYU");

  expect(intern.getId()).toBe(7);
});

test("gets the intern email", () => {
  const intern = new Intern("Benjamin", 7, "Benjamin@yahoo.com", "NYU");

  expect(intern.getEmail()).toBe("Benjamin@yahoo.com");
});

test("gets the intern role", () => {
  const intern = new Intern("Benjamin", 7, "Benjamin@yahoo.com", "NYU");

  expect(intern.getRole()).toBe("Intern");
  console.log(intern);
});

test("gets the intern school", () => {
  const intern = new Intern("Benjamin", 7, "Benjamin@yahoo.com", "NYU");

  expect(intern.getSchool()).toBe("NYU");
});
