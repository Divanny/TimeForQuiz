import Main from './components/Main';
import GradientCanvas from './components/GradientCanvas';
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <main className='main dark'>
        <GradientCanvas />
        <div className='z-1 absolute w-screen h-screen flex items-center justify-center'>
          <Main/>
        </div>
      </main>
    </NextUIProvider>

  );
}

export default App;
