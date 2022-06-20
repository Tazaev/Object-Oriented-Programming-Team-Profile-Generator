// test for creating a new manager object
const Manager = require("../lib/Manager.js");

test("creates a new manager object", () => {
  const manager = new Manager("Benjamin", 7, "Benjamin@yahoo.com", 30);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.role).toEqual(expect.any(String));
});

test("gets the manager name", () => {
  const manager = new Manager("Benjamin", 7, "Benjamin@yahoo.com", 30);

  expect(manager.getName()).toBe("Benjamin");
});

test("gets the manager id", () => {
  const manager = new Manager("Benjamin", 7, "Benjamin@yahoo.com", 30);

  expect(manager.getId()).toBe(7);
});

test("gets the manager email", () => {
  const manager = new Manager("Benjamin", 7, "Benjamin@yahoo.com", 30);

  expect(manager.getEmail()).toBe("Benjamin@yahoo.com", 30);
});

test("gets manager role", () => {
  const manager = new Manager("Benjamin", 7, "Benjamin@yahoo.com", 30);

  expect(manager.getRole()).toBe("Manager");
  console.log(manager);
});
