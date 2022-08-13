/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NextUIProvider, Switch } from '@nextui-org/react';
import * as dayjs from 'dayjs';
import { useState } from 'react';

import { Bullet } from '../components/Bullet';
import { FanSpeedIcon } from '../components/FanSpeedIcon';
import { RoundButton } from '../components/RoundButton';
import { darkTheme } from '../main';

export const Sidebar = () => {
  const [mode, setMode] = useState(0);
  const [fanSpeed, setFanSpeed] = useState(1);
  return (
    <NextUIProvider theme={darkTheme}>
      <div className="w-96 py-4 text-white flex flex-col bg-black h-full">
        <div className="flex my-4 space-x-1 justify-center text-6xl">
          <p className="text-6xl font-light ">{dayjs().format('hh:mm')}</p>
          <p className="text-6xl font-light text-zinc-700">{dayjs().format('A')}</p>
        </div>
        <div className="flex justify-between items-center my-4 px-6">
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
          <p className="text-zinc-500 my-2 text-xl">Fan Speed</p>
        </div>
      </div>
    </NextUIProvider>
  );
};
