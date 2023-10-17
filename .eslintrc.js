module.exports = {
  extends: ['rascal'],
  overrides: [
    {
      files: ['src/scripts/*.ts', 'scripts/*.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
