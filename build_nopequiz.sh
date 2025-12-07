#!/bin/bash
# Get the directory where this script is located
# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/nopequiz_src"

echo "Checking for npm..."
if ! command -v npm &> /dev/null; then
    echo "Error: 'npm' is not installed or not in your PATH."
    echo "You need to install Node.js to build NopeQuiz."
    echo "Download it here: https://nodejs.org/"
    exit 1
fi

echo "Installing dependencies..."
npm install

echo "Building NopeQuiz..."
npm run build

echo "Done! NopeQuiz built to $SCRIPT_DIR/nopequiz"
