// lib/client.js
import { HttpLink } from "@apollo/client";
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
    const GQLURI = process.env.GQLURI
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: new HttpLink({
            uri: GQLURI,
        }),
    });
});