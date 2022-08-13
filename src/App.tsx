/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './App.css';

import { Icon } from '@iconify/react';
import { NextUIProvider, Switch } from '@nextui-org/react';
import * as dayjs from 'dayjs';
import { useState } from 'react';

import { darkTheme } from './main';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
    </div>
  );
}

export default App;

const Sidebar = () => {
  const [mode, setMode] = useState(0);
  const [fanSpeed, setFanSpeed] = useState(1);
  return (
    <NextUIProvider theme={darkTheme}>
      <div className="w-96 text-white flex flex-col bg-black h-full">
        <div className="flex space-x-1 justify-center text-6xl">
          <p className="text-6xl font-light ">{dayjs().format('hh:mm')}</p>
          <p className="text-6xl font-light text-zinc-700">{dayjs().format('A')}</p>
        </div>
        <div className="flex justify-between items-center my-2 px-6">
          <div>
            <p className="text-zinc-600 font-bold leading-4 text-lg my-0">Primary</p>
            <p className="my-0">Water Heater</p>
          </div>
          <Switch initialChecked />
        </div>
        <div>
          <p className="text-9xl font-bold text-center">71°</p>
        </div>
        <div>
          <ul className="px-9">
            <li className="flex justify-center">
              <RoundButton
                active={mode === 0}
                onClick={() => setMode(0)}
                icon="bxs:leaf"
                label="Eco"
              />
              <RoundButton
                active={mode === 1}
                onClick={() => setMode(1)}
                icon="fluent:glance-default-12-regular"
                label="Normal"
              />
              <RoundButton
                active={mode === 2}
                onClick={() => setMode(2)}
                icon="carbon:meter-alt"
                label="Max"
              />
            </li>
          </ul>
        </div>
        <div className="grow"></div>
        <div className="flex flex-col items-center">
          <Bullet onClick={() => setFanSpeed(300)} active={fanSpeed >= 3} />
          <Bullet onClick={() => setFanSpeed(2)} active={fanSpeed >= 2} />
          <Bullet onClick={() => setFanSpeed(1)} active={fanSpeed >= 1} />
          <div className="py-2" />
          <div
            className="rounded-full border border-zinc-600 p-2"
            onClick={() => setFanSpeed(0)}
          >
            <FanSpeedIcon speed={fanSpeed} />
          </div>
          <p className="text-zinc-500 text-xl">Fan Speed</p>
        </div>
      </div>
    </NextUIProvider>
  );
};

const RoundButton = ({
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

const Bullet = ({
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

const FanSpeedIcon = ({ speed }: { speed: number }) => {
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
