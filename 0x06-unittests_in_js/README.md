0x06. Unittests in JS

## Description
Learn unit testing in JavaScript using Mocha, Chai, and Sinon. Build test suites for functions and APIs with various testing techniques.

## Learning Objectives
- Use Mocha to write test suites
- Use Node assert library and Chai assertion library
- Present long test suites using spies and stubs
- Use hooks and async tests
- Write integration tests with Express

## Requirements
- Ubuntu 18.04 LTS using NodeJS 12.11.x
- All files should end with a new line
- Code tested with Jest and the command `npm run test`
- All functions must be exported

## Tasks Overview

### 0-2: Basic Testing
- **0-calcul.js**: Basic calculator function with rounding
- **1-calcul.js**: Enhanced calculator with SUM/SUBTRACT/DIVIDE operations
- **2-calcul_chai.js**: Same as task 1 but using Chai assertions

### 3-5: Spies, Stubs & Hooks
- **3-payment.js**: Payment function using spies for testing
- **4-payment.js**: Using stubs to mock expensive operations
- **5-payment.js**: Using hooks (beforeEach/afterEach) for test setup

### 6-7: Async & Skip
- **6-payment_token.js**: Testing async functions with promises
- **7-skip.test.js**: Skipping failing tests

### 8-10: Integration Testing
- **8-api**: Basic Express API with GET route testing
- **9-api**: API with regex route validation
- **10-api**: API with POST routes and deep equality testing

## Installation
```bash
npm install
```

## Usage
Run individual test files:
```bash
npm test <filename>
```

Run API servers:
```bash
node api.js
```

## Repository
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
