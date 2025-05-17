import { QueryClientProvider } from "@tanstack/react-query";

import useApp from "./modules/useApp";
import RouteConfig from "./router/Router";

function App() {
  /*======================== Props ======================== */
  const { queryClient } = useApp();

  /*======================== Return ======================== */

  return (
    <div className="bg-white laptop:bg-whitef8 w-full min-w-[100vw] h-full relativ flex justify-center items-center">
      <QueryClientProvider client={queryClient}>
        <RouteConfig />
      </QueryClientProvider>
    </div>
  );
}

export default App;
