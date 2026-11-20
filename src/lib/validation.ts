import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(120, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number."),
  programme: z.enum([
    "LL.B. (3 Years)",
    "B.A. LL.B. (5 Years)",
    "PG Diploma in Cyber Law (1 Year)",
    "General / Other Enquiry",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters in your message.")
    .max(2000, "Message must be under 2000 characters."),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm consent so the college office may respond to your enquiry.",
    }),
  }),
  website: z.string().max(0).optional(), // Honeypot field
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const alumniRegistrationSchema = z.object({
  name: z.string().trim().min(2, "Name is required.").max(120),
  gender: z.enum(["Male", "Female", "Other", "Prefer not to say"]),
  occupation: z.string().trim().min(2, "Occupation is required.").max(150),
  qualification: z.string().trim().min(2, "Qualification is required.").max(150),
  startYear: z.string().trim().optional(),
  endYear: z.string().trim().optional(),
  address: z.string().trim().min(5, "Address is required.").max(400),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,16}$/, "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address."),
  website: z.string().max(0).optional(),
});

export type AlumniRegistrationData = z.infer<typeof alumniRegistrationSchema>;

export const grievanceSchema = z.object({
  name: z.string().trim().min(2, "Name is required.").max(120),
  course: z.string().trim().min(2, "Course / Semester is required.").max(120),
  contactInfo: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(15, "Please describe the complaint clearly (at least 15 characters).")
    .max(3000),
  website: z.string().max(0).optional(),
});

export type GrievanceFormData = z.infer<typeof grievanceSchema>;
