import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/AuthContext";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Input from "../../components/ui/input";
import Text from "../../components/ui/text";

export function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signUp(nome, email, password);
      navigate("/"); // redireciona para login
    } catch (err: any) {
      setError(err.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[342px] md:min-w-[400px] mx-auto">
      <Card>
        <Text variant="text-lg" className="text-gray-200" as="h2">
          Crie sua conta
        </Text>
        <form onSubmit={onSubmit} className="w-full space-y-4 my-10">
          <Input
            label="Nome"
            placeholder="Digite o nome completo"
            value={nome}
            required
            onChange={(e) => {
              setNome(e.target.value);
              if (error) setError(null);
            }}
            error={error?.includes("Nome") ? "true" : undefined}
            helperText={error?.includes("Nome") ? error : undefined}
          />
          <Input
            label="E-mail"
            placeholder="exemplo@mail.com"
            type="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            error={error?.includes("E-mail") ? "true" : undefined}
            helperText={error?.includes("E-mail") ? error : undefined}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            helperText={
              error?.includes("senha") ? error : "Mínimo de 6 dígitos"
            }
            error={error?.includes("senha") ? "true" : undefined}
          />
          <Button className="w-full" type="submit" disabled={loading}>
            <Text variant="text-sm-bold">
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Text>
          </Button>
        </form>
      </Card>

      {/* Card de Login */}
      <Card className="mt-3">
        <Text variant="heading-md-bold" className="text-gray-200" as="h3">
          Já tem uma conta?
        </Text>
        <Link to="/">
          <Button variant="secondary" className="w-full mt-5 md:mt-6">
            <Text variant="text-sm-bold">Acessar conta</Text>
          </Button>
        </Link>
      </Card>
    </div>
  );
}
