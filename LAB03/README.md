# Math Operations Server 📐

Welcome to the Math Operations Server! This simple Node.js server performs basic arithmetic operations (addition, subtraction, multiplication, and division) based on URL query parameters. 

## Features ✨

- **Addition**: Add two numbers
- **Subtraction**: Subtract one number from another
- **Multiplication**: Multiply two numbers
- **Division**: Divide one number by another

## Getting Started 🚀

Follow these steps to set up and run the server on your local machine.

### Prerequisites 📋

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation 🛠️

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SUKH2022/COMP2068JSFrameworks
    cd COMP2068JSFrameworks/LAB03
    ```

2. **Initialize npm and install dependencies**:
    ```bash
    npm init -y
    npm install connect --save
    ```

### Running the Server ▶️

1. **Start the server**:
    ```bash
    node server.js
    ```

2. **Open your browser** and navigate to the following URLs to test different operations:
    - Addition: [http://localhost:3000/?method=add&x=16&y=4](http://localhost:3000/?method=add&x=16&y=4)
    - Subtraction: [http://localhost:3000/?method=subtract&x=16&y=4](http://localhost:3000/?method=subtract&x=16&y=4)
    - Multiplication: [http://localhost:3000/?method=multiply&x=16&y=4](http://localhost:3000/?method=multiply&x=16&y=4)
    - Division: [http://localhost:3000/?method=divide&x=16&y=4](http://localhost:3000/?method=divide&x=16&y=4)

### Example Outputs 📄

- **Addition**: `16 add 4 = 20`
- **Subtraction**: `16 subtract 4 = 12`
- **Multiplication**: `16 multiply 4 = 64`
- **Division**: `16 divide 4 = 4`

## Acknowledgments 🙌

- [Node.js](https://nodejs.org/)
- [Connect](https://www.npmjs.com/package/connect)
- [URL](https://nodejs.org/api/url.html)

Feel free to contribute to this project or suggest improvements. Enjoy calculating! 😊
