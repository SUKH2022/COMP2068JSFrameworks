const connect = require('connect');
const url = require('url');

/**
 * Function to perform calculation based on URL parameters.
 * 
 * @param {string} urlString - The URL string containing the query parameters.
 * @returns {string} - The result of the calculation or an error message.
 */
function calculate(urlString) {
    // Parse the URL and extract query parameters
    const parsedUrl = url.parse(urlString, true);
    const method = parsedUrl.query.method;
    const x = parseFloat(parsedUrl.query.x);
    const y = parseFloat(parsedUrl.query.y);

    // Validate the method parameter
    if (!["add", "subtract", "multiply", "divide"].includes(method)) {
        return "Invalid method specified!";
    }

    // Variable to store the result of the calculation
    let result;

    // Perform the appropriate calculation based on the method
    switch (method) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }

    // Return the result in the specified format
    return `${x} ${method} ${y} = ${result}`;
}

const http = require('http');

const port = 3000;

// Create an HTTP server that handles incoming requests
const server = http.createServer((req, res) => {
    // Extract the URL string from the request
    const urlString = req.url;
    // Calculate the result based on the URL parameters
    const result = calculate(urlString);
    // Send the result back to the client
    res.end(result);
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Example URL patterns and their results:
// http://localhost:3000/?method=add&x=16&y=4     --> 16 add 4 = 20
// http://localhost:3000/?method=subtract&x=16&y=4 --> 16 subtract 4 = 12
// http://localhost:3000/?method=multiply&x=16&y=4 --> 16 multiply 4 = 64
// http://localhost:3000/?method=divide&x=16&y=4   --> 16 divide 4 = 4
// http://localhost:3000/?method=divide&x=36&y=9   --> 36 divide 9 = 4