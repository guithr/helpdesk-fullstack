import { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(email: string, password: string) {
    // simula delay de API
    await new Promise((res) => setTimeout(res, 1000));

    if (email === "teste@teste.com" && password === "123456") {
      // mock de usuário
      setUser({
        id: "1",
        name: "Usuário Teste",
        email,
      });
    } else {
      throw new Error("Credenciais inválidas");
    }
  }

  async function signUp(email: string, password: string, name: string) {
    await new Promise((res) => setTimeout(res, 1000));

    // aqui poderia salvar no localStorage se quiser persistência
    setUser({
      id: "2",
      name,
      email,
    });
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
