import { Mapper } from '../utils/utils';

export const Guessed = () => {
  const ans = [1, 2, 3, 4, 5, 6, 7, 8];
  const guessed = [
    { id: 1, value: 'blue' },
    { id: 2, value: 'red' },
    { id: 3, value: 'yellow' },
    { id: 4, value: 'green' },
    { id: 5, value: 'pink' },
    { id: 6, value: 'orange' },
    { id: 8, value: 'purple' },
    { id: 7, value: 'aqua' },
  ];

  const isInWrongPlace = 5;
  const isInPlace = 3;

  return (
    <>
      <div
        className={` 
      ${guessed.length <= 7 ? 'gap-2' : 'gap-0.5'}
      mx-5 mt-6 flex items-center justify-center rounded-lg bg-gray-800 py-3`}
      >
        {guessed.map(({ id, value }, index) => {
          return (
            <div
              key={id}
              className={`
            ${Mapper[value].class.default} 
            ${guessed.length < 7 ? 'h-10 w-10' : 'h-9 w-9'} 
            rounded-full 
            `}
            ></div>
          );
        })}
      </div>
      <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-b-md bg-gray-800 px-3 py-1.5">
        {Array.from(Array(isInPlace).keys()).map((i) => {
          return <span className="h-3 w-3 rounded-full border-2 border-gray-200 bg-gray-200" />;
        })}
        {Array.from(Array(isInWrongPlace).keys()).map((i) => {
          return <span className="h-3 w-3 rounded-full border-2 border-gray-200" />;
        })}
      </div>
    </>
  );
};
