# Nextjs Elysia Better Auth Starter

**This** is an open-source starter template for building full-stack applications with Next.js, Elysia, and Better Auth.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + Elysia
- **Runtime & Package Manager**: [Bun](https://bun.sh)
- **Styling**: Tailwind CSS 4 + Shadcn UI + Radix UI
- **Authentication**: Better Auth
- **Icons**: Lucide React
- **Charts**: Recharts
- **Language**: TypeScript

## AI Agent Guidelines

This project includes specific instructions for AI agents (Gemini, Claude, Copilot, etc.) to ensure consistency in coding style and architecture.

- **[.cursorrules](.cursorrules)**: Global rules for AI editors.
- **[ai_rules.md](ai_rules.md)**: Detailed project-wide standards.

## Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Shrest4647/nextjs-elysia-betterauth-starter.git project_name
    cd project_name
    ```

2.  **Install dependencies**
    This project strictly uses **Bun**.

    ```bash
    bun install
    ```

3.  Create a local `.env` file:
    Start by copying the .env.example file

    ```bash
    cp .env.example .env
    ```

    Then update the values in the `.env` file to match your local environment.

4.  Setup the local postgres database
    If you have docker installed, you can run the following command to setup the database:

    ```bash
    ./start-database.sh
    ```

    If you don't have docker installed, you can manually create a new database and update the `.env` file with the database credentials.

5.  Run the database migrations

    ```bash
    bun db:generate
    bun db:migrate
    ```

6.  **Run the development server**
    ```bash
    bun dev
    ```

## OpenAPI Documentation

The API documentation is available at `/api/docs` when the server is running.

## Contributing

Contributions are welcome! Please refer to the [Contributing Guidelines](CONTRIBUTING.md) to get started. You can also open an issue or submit a pull request for any improvements or bug fixes.

## License

MIT License.
