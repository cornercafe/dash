import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function Dashboard() {
  return (
    <div className="my-8 p-4">
      <section className="p-4 flex border-b justify-around space-x-4">
        <StatusItem label="Water Level" value="GOOD" />
        <StatusItem label="Powder Status" value="GOOD" />
        <StatusItem label="Paper Cup" value="Available" />
      </section>
      <section className="flex p-4">
        <p className="text-black duration-200 text-5xl font-medium p-3 hover:text-gray-900 ">
          Tea
        </p>
        <p className="text-gray-400 duration-200 text-5xl font-medium p-3 hover:text-gray-900 ">
          Coffee
        </p>
        <p className="text-gray-400 duration-200 text-5xl font-medium p-3 hover:text-gray-900 ">
          Horlicks
        </p>
        <p className="text-gray-400 duration-200 text-5xl font-medium p-3 hover:text-gray-900 ">
          Boost
        </p>
      </section>
      <section className="p-4 mt-4 flex flex-col justify-center items-center">
        <LargeButton />
        <h2 className="my-4">Dispence Now</h2>
      </section>
    </div>
  );
}

export default Dashboard;

function StatusItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-zinc-500 text-lg font-medium my-0">
        <Icon
          icon="carbon:dot-mark"
          className="inline-block text-sky-400"
          inline={true}
        />
        {label}
      </p>
      <p className="text-4xl text-black pl-3 font-medium my-0">{value}</p>
    </div>
  );
}

function LargeButton() {
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(() => false);
    }, 10000);
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute w-72 h-72 blur-md animate-spin text-teal-400 rounded-full">
          <Icon icon="bx:loader-alt" className="w-72 scale-125 h-72" />
        </div>
      )}
      <button
        onClick={onClick}
        className="relative bg-white rounded-full flex items-center justify-center w-72 h-72 shadow-2xl"
      >
        {loading ? (
          <Icon
            icon="bi:arrow-down-short"
            className="w-48 h-48 animate-pulse text-teal-500"
            inline={true}
          />
        ) : (
          <Icon icon="el:play" className="w-32 pl-4 h-32" inline={true} />
        )}
      </button>
    </div>
  );
}
