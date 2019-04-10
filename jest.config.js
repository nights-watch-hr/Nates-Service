module.exports = {
  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  setupFiles: ['<rootDir>/__tests__/setup/setupEnzyme.js'],
  testPathIgnorePatterns: [
    '<rootDir>/client/styles/',
    '<rootDir>/node_modules/'
  ],
  moduleFileExtensions: ['js', 'jsx', 'scss'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
