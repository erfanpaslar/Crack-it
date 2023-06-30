import { Mapper } from '../utils/utils';

export const Selector = () => {
  const selectors = [
    { id: 1, value: 'blue' },
    { id: 2, value: 'red' },
    { id: 3, value: 'yellow' },
    { id: 4, value: 'green' },
    { id: 5, value: 'pink' },
    { id: 6, value: 'orange' },
    { id: 7, value: 'purple' },
    { id: 8, value: 'aqua' },
  ];

  return (
    <div
      className={` 
      ${selectors.length <= 7 ? 'gap-2' : 'gap-0.5'}
      absolute bottom-0 flex w-full items-center justify-center rounded-t-lg bg-gray-800 py-3`}
    >
      {selectors.map(({ id, value }, index) => {
        return (
          <div
            key={id}
            className={`
            ${Mapper[value].class.default} 
            ${selectors.length < 7 ? 'h-10 w-10' : 'h-9 w-9'} 
            rounded-full 
            `}
          ></div>
        );
      })}
    </div>
  );
};
