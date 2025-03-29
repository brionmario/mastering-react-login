# CodeFit.ai

## Setting up the Development Environment

```bash
npm install
```

If you are using `pnpm`, run the following command.

```bash
pnpm install
```

#### Create `.env.local` files based on the `.env.example` files.

We will use the `.env.local` file to store the environment variables required for the applications.

```env
cp .env.example .env.local
```

Following set of environment variables are required for the application to work.

```env
# The client ID of your Asgardeo application
VITE_ASGARDEO_CLIENT_ID=<CLIENT_ID_TAKEN_FROM_ASGARDEO_CONSOLE>

# The base URL of your Asgardeo organization's services.
# Ex: https://api.asgardeo.io/t/acme
VITE_ASGARDEO_SERVICES_URL=<BASE_URL_TAKEN_FROM_ASGARDEO_CONSOLE>

# The callback URL to redirect to after successful authentication with Asgardeo
# Ex: https://localhost:5173
VITE_ASGARDEO_SIGN_IN_REDIRECT_URL=<SIGN_IN_URL_AFTER_A_SUCCESSFUL_AUTHENTICATION>

# The callback URL to redirect to after successful logout from Asgardeo
# Ex: https://localhost:5173
VITE_ASGARDEO_SIGN_OUT_REDIRECT_URL=<SIGN_OUT_URL_AFTER_A_SUCCESSFUL_AUTHENTICATION>
```

## Running the Applications

To start the applications, run the following command from the root of the project.

```bash
npm run dev
```

If you are using `pnpm`, run the following command.

```bash
pnpm dev
```
