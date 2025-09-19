import Icon from "../components/ui/icon";
import Text from "../components/ui/text";
import PenLine from "../assets/icons/pen-line.svg?react";
import Chevron from "../assets/icons/chevron-down.svg?react";
import Briefcase from "../assets/icons/briefcase-business.svg?react";
import Ban from "../assets/icons/ban.svg?react";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Select from "../components/ui/select";
import TagStatus from "../components/ui/tag-status";
import TagTime from "../components/ui/tag-time";

export default function PageComponents() {
  return (
    <div className="grid p-2 gap-8">
      <Text as="h1" variant="text-xl">
        Pagina componentes
      </Text>

      {/* Buttons */}
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

      {/* Icons */}
      <div className="flex gap-2">
        <Icon svg={Ban} fill="fill-feedback-danger" />
        <Icon svg={Chevron} fill="fill-feedback-danger" />
        <Icon svg={Briefcase} fill="fill-feedback-danger" />
      </div>

      {/* Input */}
      <div className="grid grid-cols-6 gap-2">
        <Input
          label="Empty / Default"
          placeholder="Placeholder"
          helperText="Helper text"
        />
        <Input label="Empty / Focus" placeholder="" helperText="Helper text" />
        <Input
          error="true"
          label="Empty / Error"
          placeholder="Placeholder"
          helperText="Label"
        />
        <Input
          value="Text"
          label="Filled / Default"
          placeholder=""
          helperText="Helper text"
        />
        <Input
          value="Text"
          label="Filled / Focus"
          placeholder=""
          helperText="Helper text"
        />

        <Input
          error="true"
          value="Text"
          label="Filled / Error"
          placeholder=""
          helperText="Helper text"
        />
      </div>

      {/* Select */}
      <div className="grid grid-cols-6 gap-2">
        <Select
          placeholder="Placeholder"
          helperText="Helper text"
          label="Empty / Default"
        ></Select>
        <Select
          placeholder="Placeholder"
          helperText="Helper text"
          label="Empty / Active"
        ></Select>
        <Select
          placeholder="Placeholder"
          helperText="Helper text"
          label="Empty / Error"
          error="true"
        ></Select>
        <Select
          placeholder="Placeholder"
          helperText="Helper text"
          label="Selected / Default"
        ></Select>
        <Select
          placeholder="Placeholder"
          helperText="Helper text"
          label="Selected / Active"
        ></Select>
        <Select
          placeholder="Placeholder"
          helperText="Helper text"
          label="Selected / Error"
          error="true"
        ></Select>
      </div>

      {/* Tag Status */}
      <div className="flex gap-2">
        <TagStatus variant="new">Label</TagStatus>
        <TagStatus variant="info">Label</TagStatus>
        <TagStatus variant="success">Label</TagStatus>
        <TagStatus variant="danger">Label</TagStatus>
      </div>
      {/* Tag Time */}
      <div className="flex gap-2">
        <TagTime>07:00</TagTime>
        <TagTime>08:00</TagTime>
        <TagTime>09:00</TagTime>
        <TagTime>10:00</TagTime>
        <TagTime>11:00</TagTime>
        <TagTime state="readonly">12:00</TagTime>
      </div>
    </div>
  );
}
