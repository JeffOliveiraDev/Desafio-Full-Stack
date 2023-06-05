import { type } from "os";
import { z } from "zod";

export const userSchema = z.object({
  nome: z.string().nonempty("Obrigatório"),
  email: z.string().email("O email deve ser válido"),
  telefone: z.string().min(8).nonempty("Obrigatório"),
  registrado: z.string().nonempty(),
  senha: z.string().nonempty("Obrigatória").min(8),
});

export const customerSchema = z.object({
  nome: z.string().nonempty("Obrigatório"),
  email: z.string().email("O email deve ser válido"),
  telefone: z.string().min(8).nonempty("Obrigatório"),
  registrado: z.string().nonempty(),
});

export const updateCustomerSchema = z.object({
  nome: z.string().optional(),
  email: z.string().email("O email deve ser válido").optional(),
  telefone: z.string().min(8).optional(),
  registrado: z.string().optional(),
  id: z.string().nonempty(),
});

export const updateContactSchema = z.object({
  nome: z.string().optional(),
  email: z.string().email("O email deve ser válido").optional(),
  telefone: z.string().min(8).optional(),
  registrado: z.string().optional(),
  id: z.string().nonempty(),
  clienteId: z.string().optional(),
});

export const loginSchema = userSchema.omit({
  nome: true,
  telefone: true,
  registrado: true,
});

export const contactSchema = z.object({
  nome: z.string().nonempty("Obrigatório"),
  email: z.string().email("O email deve ser válido"),
  telefone: z.string().min(8).nonempty("Obrigatório"),
  registrado: z.string().nonempty(),
  customerId: z.string(),
});

export const deleteContactSchema = z.object({
  id: z.string().nonempty("Obrigatório"),
});

export const deleteCustomerSchema = z.object({
  id: z.string().nonempty("Obrigatório"),
});

export type UserData = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type ContactData = z.infer<typeof contactSchema>;
export type CustomertData = z.infer<typeof customerSchema>;
export type DeleteContactData = z.infer<typeof deleteContactSchema>;
export type DeleteCustomerData = z.infer<typeof deleteCustomerSchema>;
export type UpdateCustomerData = z.infer<typeof updateCustomerSchema>;
export type UpdateContactData = z.infer<typeof updateContactSchema>;
