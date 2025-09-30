export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  year: number;
  enrollmentDate: string;
  status: "active" | "inactive" | "graduated";
}

export interface StudentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  year: number;
  status: "active" | "inactive" | "graduated";
}