import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useApp = () => {
  /*======================== UseState ======================== */

  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          staleTime: 1000 * 60 * 30,
        },
      },
    })
  );

  /*======================== UseEffect ======================== */

  // uncomment below for setViewportHeight on mobile devices, because old devices doesn't support some modern approach / css properties such as svh,dvh,etc...
  // useEffect(() => {
  //   setViewportHeight();
  // }, []);

  /*======================== Return ======================== */
  return {
    queryClient,
  };
};

export default useApp;
