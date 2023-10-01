import { CodegenConfig } from "@graphql-codegen/cli";

require("dotenv").config();

const URL = process.env.GQLURI
console.log(URL);

const config: CodegenConfig = {
    schema: URL,
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;