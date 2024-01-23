"use client";

import React, { useCallback, useEffect } from "react";

interface IGlobalError {
  error: Error & { digest?: string };
  reset: () => void;
}

function GlobalError({ error, reset }: IGlobalError) {
  const globalRefresh = useCallback(() => {
    if (typeof reset === "function") {
      reset();
    }
  }, [reset]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <html lang="zh">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={globalRefresh}>Try again</button>
      </body>
    </html>
  );
}

export default GlobalError;
