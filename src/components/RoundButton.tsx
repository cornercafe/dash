import { Icon } from '@iconify/react';

export const RoundButton = ({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <div className="flex m-2 flex-col items-center">
    <button
      onClick={onClick}
      className={`rounded-full hover:opacity-90 duration-200 p-3 ${
        active ? 'bg-purple-200 text-gray-800' : 'bg-zinc-700 text-white'
      }`}
    >
      <Icon className="w-6 h-6" icon={icon} />
    </button>
    <p
      className={`pt-1 font-medium text-sm my-0 ${
        active ? 'text-white' : 'text-zinc-700'
      }`}
    >
      {label}
    </p>
  </div>
);
