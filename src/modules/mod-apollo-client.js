import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
	uri: 'https://graphql.anilist.co',
	cache: new InMemoryCache()
});

const ModuleApolloProvider = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	)
}

export default ModuleApolloProvider;