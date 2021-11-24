import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { GlobalStyles } from './GlobalStyles';
import { Loading } from './components/Loading/Loading';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Products = lazy(() => import('./components/Products/Products'));

const App = () => {
  const { isModalOpen, isLightMode } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isModalOpen]);

  const renderLoader = () => (
    <Loading></Loading>
  );

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <GlobalStyles isLightMode={isLightMode} />
        <Navbar />
        <Products />
      </Suspense>
    </>
  );
}

export default App;
