/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export const Bullet = ({
  active = false,
  onClick,
}: {
  onClick?: () => void;
  active?: boolean;
}) => (
  <div
    onClick={onClick}
    className={`rounded-full m-1 p-1 border  !border-white hover:opacity-90 duration-200`}
  >
    <div
      className={`rounded-full w-4 h-4 hover:opacity-90 duration-200 ${
        active ? 'bg-white ' : 'bg-white/0'
      }`}
    ></div>
  </div>
);
