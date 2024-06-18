const connect = require('connect');
const url = require('url');

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
