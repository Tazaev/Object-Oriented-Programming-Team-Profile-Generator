const Employee = require("../lib/Employee.js");

test("creates a new employee object", () => {
  const employee = new Employee("Benjamin", 7, "Benjamin@yahoo.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets the employee name", () => {
  const employee = new Employee("Benjamin", 7, "Benjamin@yahoo.com");

  expect(employee.getName()).toBe("Benjamin");
});

test("gets employee id", () => {
  const employee = new Employee("Benjamin", 7, "Benjamin@yahoo.com");

  expect(employee.getId()).toBe(7);
});

test("gets employee email", () => {
  const employee = new Employee("Benjamin", 7, "Benjamin@yahoo.com");

  expect(employee.getEmail()).toBe("Benjamin@yahoo.com");
});

test("gets employee role", () => {
  const employee = new Employee("Benjamin", 7, "Benjamin@yahoo.com");

  expect(employee.getRole()).toBe("Employee");
  console.log(employee);
});
