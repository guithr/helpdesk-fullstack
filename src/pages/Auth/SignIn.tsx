import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Input from "../../components/ui/input";
import Text from "../../components/ui/text";
export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(email, password)
  }
  return (
    <div className="max-w-[342px] md:min-w-[400px] mx-auto">
      <Card>
        <Text variant="text-lg" className="text-gray-200" as="h2">
          Acesse o portal
        </Text>
        <Text variant="text-xs-bold" className="text-gray-300">
          Entre usando seu e-mail e senha cadastrados
        </Text>
        <form onSubmit={onSubmit} className="w-full">
          <div className="space-y-4 my-10">
            <Input
              label="E-mail"
              placeholder="exemplo@mail.com"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            <Text variant="text-sm-bold">Entrar</Text>
          </Button>
        </form>
      </Card>

      {/* Card de Cadastro */}
      <Card className="mt-3">
        <Text variant="heading-md-bold" className="text-gray-200" as="h3">
          Ainda não tem uma conta?
        </Text>
        <Text variant="text-xs-bold" className="text-gray-300">
          Cadastre agora mesmo
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
