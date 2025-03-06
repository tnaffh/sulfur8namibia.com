import { Disclosure } from "@/app/headlessui";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface Props {
  key: string;
  title: string;
  content: string | string[];
  defaultOpen?: boolean;
  panelClassName?: string;
}

export const ProductDetailAccordion: FC<Props> = ({ key, title, content, defaultOpen = false, panelClassName = "" }) => {
  const isList = Array.isArray(content);
  return (
    <Disclosure key={key} defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
            <span>{title}</span>
            {!open ? <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" /> : <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />}
          </Disclosure.Button>
          <Disclosure.Panel className={panelClassName}>
            {isList ? (
              <ul className="list-disc list-inside leading-7">
                {content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              content
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
