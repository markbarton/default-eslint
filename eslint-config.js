 module.exports = {
     parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended', // Use recommended rules from eslint
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended' // Use eslint-config-prettier to disable ESLint rules that would conflict with prettier
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Specify TypeScript files
      rules: {
        // Place TypeScript-specific rules here
      },
    },
    {
      files: ['*.js', '*.jsx'], // Specify JavaScript files
      rules: {
        // Place JavaScript-specific rules here
      },
    },
  ],
    };