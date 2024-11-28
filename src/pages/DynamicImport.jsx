import React, { useState, lazy, Suspense } from "react";
const LazyComponent = lazy(() => import("../components/HeavyComponent"));

const DynamicImport = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <h1>DynamicImport</h1>
      <button onClick={() => setVisible(!visible)}> Click</button>
      <Suspense fallback={<div>Loading...</div>}>
        {visible && <LazyComponent />}
      </Suspense>
    </>
  );
};

export default DynamicImport;
