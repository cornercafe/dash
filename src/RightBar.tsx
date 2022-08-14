import { Icon } from '@iconify/react';
import React from 'react';

function RightBar() {
  return (
    <div className="my-8 p-4">
      <section className="bg-gray-100 rounded-md p-4">
        <p className="font-medium text-gray-500">WiFi Connection</p>
        <div className="text-xl flex items-center font-bold">
          <Icon icon="fa6-solid:wifi" className="inline-block mr-2" inline />
          <div className="grow">Flamingo </div>
          <span className="text-teal-500 font-medium text-sm ml-2"> Connected</span>
        </div>
      </section>
      <section className="bg-gray-100 rounded-md my-4 p-4">
        <StatusItem
          title="Cups"
          value="122 balance"
          subtitle="320 No.s"
          icon="mdi:cup-outline"
        />
        <StatusItem
          title="Water"
          value="3.7 Ltr"
          subtitle="25 Ltrs"
          icon="akar-icons:water"
        />
        <StatusItem
          title="Coffee Premix"
          value="353g"
          subtitle="700g"
          icon="fluent-emoji-high-contrast:beans"
        />
        <StatusItem
          title="Tea Premix"
          value="402g"
          subtitle="700g"
          icon="fluent:leaf-two-16-regular"
        />
        <StatusItem
          title="Boost Premix"
          value="353g"
          subtitle="700g"
          icon="icon-park-twotone:face-powder"
        />
        <StatusItem
          title="Horlicks Premix"
          value="353g"
          subtitle="700g"
          icon="icon-park-twotone:face-powder"
        />
      </section>
    </div>
  );
}

export default RightBar;

function StatusItem({
  title,
  value,
  icon,
  subtitle,
}: {
  title: string;
  value: string;
  icon: string;
  subtitle: string;
}) {
  return (
    <div className="my-2">
      <p className="font-medium text-gray-500">{title}</p>
      <div className="text-lg flex items-center font-bold">
        <Icon icon={icon} className="inline-block mr-2" inline />
        <div className="grow">{value}</div>
        <span className="text-gray-500 font-medium ">{subtitle}</span>
      </div>
    </div>
  );
}
