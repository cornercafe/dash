import './App.css';

import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState(0);
  return (
    <div className="flex h-screen">
      <div className="w-96 text-white bg-black h-full">
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
      </div>
    </div>
  );
}

export default App;

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
