##### Hack Server

#### Create `.env.local` files based on the `.env.example` files.

We will use the `.env.local` file to store the environment variables required for the applications.

```env
cp .env.example .env.local
```

Following set of environment variables are required for the application to work.

```
# The port number that the server will listen to.
# Change this to the desired port number that the server should listen to.
PORT=3002

# The base URLs of clients that are allowed to access the API.
# Separate by commas if there's more than one.
# E.g., http://localhost:3000,http://localhost:3001
CLIENT_BASE_URLS=<add-client-app-base-url-here>
```

## Running the Server

To start the server, run the following command from the root of the project.

```bash
npm run dev
```

If you are using `pnpm`, run the following command.

```bash
pnpm dev
```
