import React from "react";
import BaseButton from "./BaseButton";

interface BaseFormProps {
  title?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  onSubmit?: (data: { name: string; email: string }) => void;
}

const BaseForm: React.FC<BaseFormProps> = ({
  title,
  namePlaceholder,
  emailPlaceholder,
  buttonText,
  onSubmit,
}) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[500px] bg-white px-5 py-8 md:px-6 md:py-10 rounded-xl shadow-md border border-gray-200 flex flex-col gap-4 font-robotto"
    >
      <h2 className="text-md font-normal text-[#576074] text-left">
        {title ?? ""}
      </h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={namePlaceholder ?? ""}
        className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-gray-500 text-gray-700"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={emailPlaceholder ?? ""}
        className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-gray-500 text-gray-700"
      />

      <BaseButton
        text={buttonText ?? "Submit"}
        textColor="text-white"
        bgColor="bg-[#F99A0E]"
        width="w-32"
      />
    </form>
  );
};

export default BaseForm;
