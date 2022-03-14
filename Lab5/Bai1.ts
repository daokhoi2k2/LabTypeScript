type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const adminEmloyee: ElevatedEmployee = {
    name: "Đào Đức Minh Khôi",
    privileges: ["Read", "Update", "Delete"],
    startDate: new Date(Date.now())
}

