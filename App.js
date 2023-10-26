import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigate from "./src/navigation/appNavigation";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigate />
    </QueryClientProvider>
  );
}
