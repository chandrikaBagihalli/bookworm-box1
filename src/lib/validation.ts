import { z } from "zod";

export const studentSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  
  lastName: z.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  
  phone: z.string()
    .trim()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .max(20, "Phone number must be less than 20 characters"),
  
  course: z.string()
    .trim()
    .min(2, "Course name must be at least 2 characters")
    .max(100, "Course name must be less than 100 characters"),
  
  year: z.number()
    .int("Year must be a whole number")
    .min(1, "Year must be at least 1")
    .max(10, "Year cannot exceed 10"),
  
  status: z.enum(["active", "inactive", "graduated"], {
    errorMap: () => ({ message: "Please select a valid status" })
  })
});

export type StudentFormData = z.infer<typeof studentSchema>;