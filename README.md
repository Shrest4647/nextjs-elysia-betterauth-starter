# IOE Student Utils

**IOE Student Utils** is an open-source web portal designed to help students from the Institute of Engineering (IOE), Tribhuvan University, bridge the gap between local academic systems and international standards.

## Features

- **Credit Calculator**: Automatically converts Lecture, Tutorial, and Practical hours into standard credit hours used by US/European universities.
- **Syllabus Explorer**: Detailed breakdown of chapters, sub-topics, and marks distribution (Internal vs. Final) for BCT (Bachelor of Computer Engineering).
- **GPA Estimator**: Estimates a US 4.0 GPA equivalent based on TU percentage scores using WES/Scholaro logic.
- **Report Generation**: Export your selected subject list and credit summary as a professional PDF for applications.

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
    git clone https://github.com/Shrest4647/ioe-student-utils.git
    cd ioe-student-utils
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

## Roadmap

- [ ] Add support for Civil, Mechanical, Electrical and Electronics Engineering.
- [ ] Add dark mode.

## License

MIT License.
