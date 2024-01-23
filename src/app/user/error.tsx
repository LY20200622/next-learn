"use client";
// Error components must be Client Components

import React, { useCallback, useEffect } from "react";

interface IUserError {
  error: Error & { digest?: string };
  reset: () => void;
}

function UserError({ error, reset }: IUserError) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const clickRefresh = useCallback(() => {
    // Attempt to recover by trying to re-render the segment
    if (typeof reset === "function") {
      reset();
    }
  }, [reset]);

  return (
    <>
      <div>The User Page Error</div>
      <div onClick={clickRefresh}>Try again</div>
    </>
  );
}

export default UserError;
