# GraphQL Server for the ProPublica Congress API

This is a GraphQL server for fetching political data from the [ProPublica Congress API
](https://www.propublica.org/datastore/api/propublica-congress-api).

### Usage

After cloning the repo, get started with these steps:
1. Request an API key from ProPublica [here](https://www.propublica.org/datastore/api/propublica-congress-api)
2. In the repo, add a `.env` file and:
	- Store your API key as `PRO_PUB_KEY`
	- Specify a port as `PORT`
3. Run `yarn` to install dependencies
4. Run `yarn start` to run the application
5. In your browser, load `http://localhost:<PORT>/graphql` to view the GraphQL Playground (replace `<PORT>` with the port number you saved in your `.env` file)
6. Use the Docs tab to browse through the schema, see what queries are available, and test it out! For example, try the following query and query variable.

    ```
    query($session: Int) {
      senateMembers(session: $session) {
        congress
        members {
          first_name
          last_name
          state
        }
      }
    }
    ```

    ```
    {
      "session": 112
    }
    ```

### Technology

Dependencies include:
- express
- apollo-server-express
- axios
- dotenv

### Contributing

Contributions are welcome. Get in touch or open a PR. 

### Author

Ephraim Glick ([ephraimg](https://github.com/ephraimg))
