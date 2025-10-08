export const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  helperText?: string;
  min?: string;
  max?: string;
}> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon,
  helperText,
  min,
  max,
}) => (
  <div className="group">
    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
      <span className="text-green-600">{icon}</span>
      {label}
    </label>
    <div className="relative">
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3.5 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 outline-none group-hover:border-green-300"
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </div>
    {helperText && (
      <p className="text-xs text-gray-500 mt-1.5 ml-1">{helperText}</p>
    )}
  </div>
);
export default InputField;
