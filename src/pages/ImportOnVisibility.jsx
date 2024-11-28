import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
const LazyComponent = lazy(() => import("../components/HeavyComponent"));

const ImportOnVisibility = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <>
      <div style={{ height: "100vh" }}>
        <h1>ImportOnVisibility</h1>
      </div>
      <div ref={ref}>
        {inView && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default ImportOnVisibility;
