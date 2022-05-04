import ModuleApolloProvider from "./modules/mod-apollo-client";
import ModuleRoute from "./modules/mod-route";

const App = () => {
  return (
    <ModuleApolloProvider>
      <ModuleRoute />
    </ModuleApolloProvider>
  );
}

export default App;
