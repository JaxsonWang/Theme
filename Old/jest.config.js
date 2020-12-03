module.exports = {
  verbose: true,
  testURL: 'http://localhost:8080/',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'html', 'scss'],
  moduleNameMapper: {
    '^@utils/(.*)': '<rootDir>/src/js/utils/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
