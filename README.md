```
     _             __        __    _ _
    / \   _ __  _ _\ \      / / __(_) |_ ___
   / _ \ | '_ \| '_ \ \ /\ / / '__| | __/ _ \
  / ___ \| |_) | |_) \ V  V /| |  | | ||  __/
 /_/   \_\ .__/| .__/ \_/\_/ |_|  |_|\__\___|
 __     _|_|   |_|    _____
 \ \   / /   _  ___  |___ /
  \ \ / / | | |/ _ \   |_ \
   \ V /| |_| |  __/  ___) |
  __\_/  \__,_|\___| |____/_       _
 |_   _|__ _ __ ___  _ __ | | __ _| |_ ___
   | |/ _ \ '_ ` _ \| '_ \| |/ _` | __/ _ \
   | |  __/ | | | | | |_) | | (_| | ||  __/
   |_|\___|_| |_| |_| .__/|_|\__,_|\__\___|
                    |_|
```

# What is going on here?!

Hey! Welcome. This is very basic starter pack for creating new project based on specific criteria.
It is specifically designed to work with AppWrite Instance as no-code backend.

# What is the "running force"?

- ⚙️ **Vue 3** + Composition API included
- 🛠️ **Vite** for bundling
- 🛟 **TypeScript** for type safety
- 🪄 **AppWrite** as no-code backend
- 🎨 **Tailwind CSS** for styling
- 📦 **Prettier** for code formatting
- ⚠️ **ESLint** for code linting
- 🔦 **GitLeaks** for GIT repository leaking

**As this is only started template, we're not currently handling responsivity.**

# What is included in package?

- Basic AppWrite implementation
- Wrapper for logged in/not logged in states
- Basic API service example
- Auth service with storing logged in state
- Error handler

# How to run this bad boy?

```bash
# Install dependencies
pnpm install
# Start the development server
pnpm run dev
```

```bash
# Build for production
pnpm run build
```

```bash
# Preview production build
pnpm run preview
```

# Commands available

```bash
# Disable TSC and build
pnpm build:force
```

```bash
# Prettier
pnpm format
```

```bash
# Linting
pnpm lint
```

```bash
# Check your GIT repo for credentials/secret leaks
pnpm check-leaks
```

# Environment variables

To run this project, you need to set up some environment variables. Create a `.env` file from `.env.example` in the root of your project and add the following variables:

| ENV Variable                        | Description                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| VITE_APPWRITE_PROJECT_ID            | Project ID set in your AppWrite console project settings                                       |
| VITE_APPWRITE_PUBLIC_ENDPOINT       | Hosted API endpoint (cloud or self-hosted), should have suffix for version (like /v1)          |
| VITE_APPWRITE_DEV_KEY               | Generate Dev Key if you want to override rate limiters etc. It's used only on Development mode |
| VITE_APPWRITE_DATABASE_ID           | Database ID that you want to connect                                                           |
| VITE_APPWRITE_EXAMPLE_COLLECTION_ID | Example collection to be fetched from AppWrite backend. Just for testing purposes              |
