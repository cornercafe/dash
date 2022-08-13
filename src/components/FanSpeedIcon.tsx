import { Icon } from '@iconify/react';

export const FanSpeedIcon = ({ speed }: { speed: number }) => {
  if (speed === 0)
    return (
      <Icon
        className="w-12 h-12 text-zinc-600"
        icon="material-symbols:mode-fan-off-outline"
      />
    );

  return (
    <Icon
      icon="material-symbols:mode-fan"
      className={`w-12 h-12 ${speed > 70 ? 'text-rose-500' : 'text-white'} animate-spin`}
    />
  );
};
