export class Employee {
  id: number;
  empId: string;
  name: string;
  age: number;
  phone: number;
  email: string;
  address: string;
  employeeId: string;

  constructor(
    id: number,
    empId: string,
    name: string,
    age: number,
    phone: number,
    email: string,
    address: string,
    employeeId: string
  ) {
    this.id = id;
    this.empId = empId;
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.employeeId = employeeId;
  }
}
