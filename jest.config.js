module.exports = {
  mergeConfig(config) {
    return {
      ...config,
      moduleNameMapper: {
        ...config.moduleNameMapper,
        '^@Components/(.*)$': '<rootDir>/src/components/$1',
        '^@Constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@Contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '^@Hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@Pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@Tests/(.*)$': '<rootDir>/src/tests/$1',
      },
    };
  },
};
