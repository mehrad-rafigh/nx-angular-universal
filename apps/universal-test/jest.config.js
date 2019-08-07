module.exports = {
  name: 'universal-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/universal-test',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
