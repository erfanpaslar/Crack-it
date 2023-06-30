import { Mapper } from '../utils/utils';

export const CurrentGuess = () => {
  const guesses = [
    { id: 1, value: 'none' },
    { id: 2, value: 'none' },
    { id: 3, value: 'none' },
    { id: 4, value: 'none' },
    { id: 5, value: 'none' },
    { id: 6, value: 'none' },
    { id: 8, value: 'none' },
    { id: 7, value: 'none' },
  ];

  return (
    <div
      className={` 
      ${guesses.length <= 7 ? 'gap-2' : 'gap-0.5'}
      mx-5 flex items-center justify-center rounded-lg bg-gray-800 py-3`}
    >
      {guesses.map(({ id, value }, index) => {
        return (
          <div
            key={id}
            className={`
            ${Mapper[value].class.default} 
            ${guesses.length < 7 ? 'h-10 w-10' : 'h-9 w-9'} 
            rounded-full 
            `}
          ></div>
        );
      })}
    </div>
  );
};
