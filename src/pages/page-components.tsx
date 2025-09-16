import Icon from "../components/ui/icon";
import Text from "../components/ui/text";
import PenLine from "../assets/icons/pen-line.svg?react";
import Ban from "../assets/icons/ban.svg?react";
import Button from "../components/ui/button";

export default function PageComponents() {
  return (
    <div className="grid p-2 gap-8">
      <Text as="h1" variant="text-xl">
        Pagina componentes
      </Text>

      <div className="flex flex-col gap-2">
        <Icon svg={Ban} fill="fill-feedback-danger" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Button icon={PenLine} disabled>
            Label
          </Button>
          <Button icon={PenLine} />
          <Button icon={PenLine} size="sm">
            Label
          </Button>
          <Button icon={PenLine} size="sm" />
        </div>
        <div className="flex gap-2 items-center">
          <Button icon={PenLine} variant="secondary">
            Label
          </Button>
          <Button icon={PenLine} variant="secondary" />
          <Button icon={PenLine} variant="secondary" size="sm">
            Label
          </Button>
          <Button icon={PenLine} variant="secondary" size="sm" />
        </div>
        <div className="flex gap-2 items-center">
          <Button icon={PenLine} variant="link">
            Label
          </Button>
          <Button icon={PenLine} variant="link" />
          <Button icon={PenLine} variant="link" size="sm">
            Label
          </Button>
          <Button icon={PenLine} variant="link" size="sm" />
        </div>
      </div>
    </div>
  );
}
