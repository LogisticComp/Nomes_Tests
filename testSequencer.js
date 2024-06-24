const Sequencer = require('@jest/test-sequencer').default;
const Test = require('@jest/test-sequencer').Test;

class CustomSequencer extends Sequencer {
  sort(tests) {
    const order = [
      '1_auth.tests.ts',
      '2_addCompany.tests.ts',
      '3_editCompany.tests.ts',
      '4_archiveCompany.tests.ts',
      '5_unArchiveCompany.tests.ts',
    ];

    return tests.sort((a, b) => {
      const indexA = order.indexOf(a.path.split('/').pop());
      const indexB = order.indexOf(b.path.split('/').pop());
      return indexA - indexB;
    });
  }
}

module.exports = CustomSequencer;
