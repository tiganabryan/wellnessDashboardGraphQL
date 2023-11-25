import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const log = console.log;

const server = new ApolloServer({});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

log("🩰 Server ready at port", 4000);
