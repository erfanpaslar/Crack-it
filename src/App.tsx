import { CurrentGuess } from './components/current-guess';
import { Guessed } from './components/guessed';
import { Selector } from './components/selector';

const App = () => {
  return (
    <div className="relative mx-auto h-[100svh] max-w-[400px] bg-gray-900 font-roboto_mono text-gray-200">
      <CurrentGuess />
      <Guessed />
      <Guessed />
      <Guessed />
      <Guessed />

      <Selector />
    </div>
  );
};

export default App;
