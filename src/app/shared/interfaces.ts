export interface Step {
  Header: string,
  Id: number,
  Status: Status
}

export enum Status {
  Inactive,
  Active,
  Done
}

export interface Employee {
  EmployeeID?: number,
  EmployeeName: string,
  Department: string,
  DateOfJoining: string,
  PhotoFileName?: any
}

export interface Department {
  DepartmentID?: number,
  DepartmentName: string
}
