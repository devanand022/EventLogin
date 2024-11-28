import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export default function Root(props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  return (
    <div data-testid="root-element">
      <BrowserRouter basename="/">
        <QueryClientProvider client={queryClient}>
          <App {...props} />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}
