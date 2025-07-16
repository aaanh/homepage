#!/bin/bash

set -e  # Exit on error

echo "Templating local environment variables"
cp .env.template .env.local

# --- Install NVM if not present ---
if ! command -v nvm &> /dev/null; then
  echo "Installing NVM..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

  # Load nvm for current shell
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
else
  echo "NVM is already installed."
fi

# --- Load nvm if this is a new shell ---
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"

# --- Install latest Node.js ---
echo "Installing latest Node.js..."
nvm install node
nvm use node

# --- Install pnpm globally ---
echo "Installing pnpm..."
npm install -g pnpm

# --- Install project dependencies ---
echo "Running pnpm install..."
pnpm install

# --- Start development server ---
echo "Starting development server..."
xdg-open http://localhost:3000 >/dev/null 2>&1 &

pnpm dev
