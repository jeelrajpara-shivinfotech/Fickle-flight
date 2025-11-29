interface BaseCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
}
export default function BaseCheckbox({
  label,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  className = "",
  labelClassName = "",
}: BaseCheckboxProps) {
  return (
    <label
      className={`flex items-center gap-2 text-sm text-gray-700 cursor-pointer
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${labelClassName ?? ""}
      `}
    >
      <input
        type="checkbox"
        name={name ?? ""}
        value={value ?? ""}
        checked={checked ?? false}
        onChange={(e) => onChange?.(e)} 
        disabled={disabled}
        className={`w-4 h-4 border border-gray-400 rounded-sm ${className ?? ""}`}
      />
      {label ?? ""}
    </label>
  );
}
