// services/authService.ts
export async function signInAPI(email: string, password: string) {
  // Aqui seria o fetch/axios para sua API
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula delay
  if (email !== "teste@mail.com" || password !== "123456") {
    throw new Error("E-mail ou senha inválidos");
  }
  return { token: "fake-jwt-token", user: { name: "Usuário Teste", email } };
}

export async function signUpAPI(nome: string, email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula delay
  if (password.length < 6) throw new Error("Senha muito curta");
  return { success: true };
}
