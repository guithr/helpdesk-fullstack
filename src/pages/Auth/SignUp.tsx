import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Input from "../../components/ui/input";
import Text from "../../components/ui/text";
export function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(nome, email, password);
  }
  return (
    <div className="max-w-[342px] md:min-w-[400px] mx-auto">
      <Card>
        <Text variant="text-lg" className="text-gray-200" as="h2">
          Crie sua conta
        </Text>
        <Text variant="text-xs-bold" className="text-gray-300">
          Informe seu nome, e-mail e senha
        </Text>
        <form onSubmit={onSubmit} className="w-full">
          <div className="space-y-4 my-10">
            <Input
              label="Nome"
              placeholder="Digite o nome completo"
              required
              onChange={(e) => setNome(e.target.value)}
            />
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
              helperText="Mínimo de 6 dígitos"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" type="submit">
            <Text variant="text-sm-bold">Cadastrar</Text>
          </Button>
        </form>
      </Card>

      {/* Card de Cadastro */}
      <Card className="mt-3">
        <Text variant="heading-md-bold" className="text-gray-200" as="h3">
          Já tem uma conta?
        </Text>
        <Text variant="text-xs-bold" className="text-gray-300">
          Entre agora mesmo
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
