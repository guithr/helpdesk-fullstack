import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Input from "../../components/ui/input";
import Text from "../../components/ui/text";

export function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err: any) {
      setError(err.message || "Erro ao realizar login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[342px] md:min-w-[400px] mx-auto">
      <Card>
        <Text variant="text-lg" className="text-gray-200" as="h2">
          Acesse o portal
        </Text>
        <form onSubmit={onSubmit} className="w-full space-y-4 my-10">
          <Input
            label="E-mail"
            placeholder="exemplo@mail.com"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            error={error ? "true" : undefined}
            helperText={error ?? undefined}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            error={error ? "true" : undefined}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            <Text variant="text-sm-bold">
              {loading ? "Entrando..." : "Entrar"}
            </Text>
          </Button>
        </form>
      </Card>

      {/* Card de Cadastro */}
      <Card className="mt-3">
        <Text variant="heading-md-bold" className="text-gray-200" as="h3">
          Ainda não tem uma conta?
        </Text>
        <Link to="/signup">
          <Button variant="secondary" className="w-full mt-5 md:mt-6">
            <Text variant="text-sm-bold">Criar conta</Text>
          </Button>
        </Link>
      </Card>
    </div>
  );
}
