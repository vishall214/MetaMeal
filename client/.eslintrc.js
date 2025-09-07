module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Disable all the problematic rules
    'no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  },
  // Don't fail on warnings
  ignorePatterns: ['build/']
};
