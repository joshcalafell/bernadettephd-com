# Remove 'node_modules' directory
rm -rf node_modules

# Make yarn default if not already
ng set packageManager=yarn

# Uninstall CLI
yarn add --dev angular-cli

# Re-install CLI
yarn add --dev @angular/cli@latest

# Yarn install
yarn
