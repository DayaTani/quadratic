# Quadratic

Tool for finding roots of a quadratic equation.

## Prerequisites

Before you can use this tool, ensure you have the following software installed on your system:

- **Node.js**: This project recommends Node.js version 21.6 or higher for compatibility. We recommend using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage your Node.js installations.

- **Yarn**: You can install Yarn globally using npm (Node Package Manager).

## Build

To install the necessary dependencies for this tool, navigate to the project directory in your terminal and run the following command:

```bash
yarn install
```

After installation, ensure everything is set up correctly by running the tests:

```bash
yarn test
```

Then build the app:

```bash
yarn build
```

## Usage

### Command Line Interface (CLI)

The CLI reads input from `stdin` and writes output to `stdout` in tab-separated values (TSV) format.

To use the CLI, pipe input from a file or manually enter coefficients of quadratic equations separated by tabs. For example:

Example usage:

```bash
yarn start < input.txt > output.txt
```

Here, `input.txt` contains coefficients, and `output.txt` will contain the roots of the corresponding quadratic equations.

## License

This project contains proprietary code, and all rights are reserved by PT DayaTani Digital Indonesia. Unauthorized use, reproduction, or distribution of this code is strictly prohibited.
