import { QueryClientProvider } from "@tanstack/react-query";

import useApp from "./modules/useApp";
import RouteConfig from "./router/Router";

function App() {
  /*======================== Props ======================== */

  const isDev =
    import.meta.env.VITE_ENVIRONMENT === "staging" ||
    import.meta.env.VITE_ENVIRONMENT === "local";

  const { queryClient } = useApp();

  /*======================== Return ======================== */

  return (
    <div className="bg-white laptop:bg-whitef8 w-full min-w-[100vw] h-full relativ flex justify-center items-center">
      <QueryClientProvider client={queryClient}>
        <RouteConfig />
      </QueryClientProvider>
      {isDev && (
        <div
          className="fixed bottom-0 left-0 z-10 w-[140px] p-4 text-white bg-uvgreen text-center translate-x-[-20%] translate-y-1/2 font-bold shadow-[0px_1px_4px_4px_rgba(0,0,0,0.3)]"
          style={{ rotate: "45deg" }}
        >
          DEV
        </div>
      )}
    </div>
  );
}

export default App;
