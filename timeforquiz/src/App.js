import GradientCanvas from './components/GradientCanvas';
import { NextUIProvider } from "@nextui-org/react";
import PageLoader from 'components/PageLoader';
import Game from 'pages/Game/Game';
import Home from 'pages/Home/Home';
import NoFound from 'pages/NoFound/NoFound';
import { GlobalLoading } from 'react-global-loading';
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NextUIProvider>
      <main className='main dark'>
        <GradientCanvas />
        <div className='z-1 absolute w-full h-screen flex items-center justify-center'>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Game" element={<Game />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </BrowserRouter>
        </div>
      </main>
      <GlobalLoading className="animate-fade" WrapperComponent={() => <PageLoader />} />
    </NextUIProvider>
  );
}

export default App;