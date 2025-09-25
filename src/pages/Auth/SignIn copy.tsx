import bgLogin from "../../assets/images/bg-login.png";
import logoDark from "../../assets/logos/Logo_IconDark.svg";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Input from "../../components/ui/input";
import Text from "../../components/ui/text";

export function SignInCopy() {
  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-center justify-center md:justify-end"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div
        className={`
          min-h-screen
         bg-white
          w-full md:w-auto 
          rounded-t-[10px] md:rounded-tl-[10px]
          mt-8 md:mt-3
          px-6 py-8 md:px-[140px] md:py-12
          `}
      >
        <div className="flex justify-center items-center gap-3 mb-6 md:mb-8">
          <img src={logoDark} alt="Logo da empresa" className="w-10 h-10" />
          <Text variant="text-xl" className="text-blue-dark">
            HelpDesk
          </Text>
        </div>

        <div className="max-w-[342px] md:min-w-[400px] mx-auto">
          <Card>
            <Text variant="text-lg" className="text-gray-200" as="h2">
              Acesse o portal
            </Text>
            <Text variant="text-xs-bold" className="text-gray-300">
              Entre usando seu e-mail e senha cadastrados
            </Text>
            <form className="w-full">
              <div className="space-y-4 my-10">
                <Input
                  label="E-mail"
                  placeholder="exemplo@mail.com"
                  type="email"
                />
                <Input
                  label="Senha"
                  placeholder="Digite sua senha"
                  type="password"
                />
              </div>
              <Button className="w-full">
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
            <Button variant="secondary" className="w-full mt-5 md:mt-6">
              <Text variant="text-sm-bold">Criar conta</Text>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
