0x05-Node_JS_basic

# Node.js Basic

Node.js fundamentals project covering file operations, HTTP servers, and Express.js framework.

## Setup

```bash
git clone https://github.com/your-username/alx-backend-javascript.git
cd alx-backend-javascript/0x05-Node_JS_basic
npm install
npm install express
```

## Tasks

### 0. Basic JavaScript Execution
**File**: `0-console.js`
- Create `displayMessage()` function that prints to STDOUT

### 1. Process stdin
**File**: `1-stdin.js`
- Interactive CLI program that prompts for name and displays it

### 2. Synchronous File Reading
**File**: `2-read_file.js`
- Read CSV database synchronously, count students by field

### 3. Asynchronous File Reading
**File**: `3-read_file_async.js`
- Same as task 2 but using Promises

### 4. Simple HTTP Server
**File**: `4-http.js`
- Basic HTTP server on port 1245, returns "Hello ALX!"

### 5. HTTP Server with Routing
**File**: `5-http.js`
- Routes: `/` (hello message), `/students` (database content)

### 6. Express Basic Server
**File**: `6-http_express.js`
- Simple Express server with root route

### 7. Express Server with Routing
**File**: `7-http_express.js`
- Express version of task 5

### 8. Full Server Organization
**Directory**: `full_server/`
- Complete MVC architecture with controllers, routes, and utilities
- Endpoints: `/`, `/students`, `/students/:major` (CS/SWE only)

## Usage

```bash
# Basic tasks
node 0-console.js
node 1-stdin.js
node 2-read_file.js
node 5-http.js database.csv

# Full server
npm run dev
# or
babel-node --presets babel-preset-env ./full_server/server.js ./database.csv
```

## Database Format (database.csv)
```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
```

## API Endpoints (Full Server)
- `GET /` - Returns "Hello ALX!"
- `GET /students` - Lists all students by field
- `GET /students/:major` - Lists students by major (CS or SWE)

## Requirements
- Node.js 12.x+
- Express.js
- Babel (for ES6+ support)

**Repository**: alx-backend-javascript  
**Directory**: 0x05-Node_JS_basic
