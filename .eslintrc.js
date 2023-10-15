module.exports = {
  extends: ['rascal'],
  overrides: [
    {
      files: ['./scripts/*.ts', 'scripts/*.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
