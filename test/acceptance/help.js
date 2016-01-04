import { setup } from '../support/acceptance';

process.stdout.write("AAAAAAAAAAAAAAA\n");
describe('neon help', function() {
  process.stdout.write("BBBBBBBBBBBBBBBBBBBB\n");
  setup();
  process.stdout.write("CCCCCCCCCCCCCCCCCCC\n");
  it('should print neon usage', function(done) {
    process.stdout.write("DDDDDDDDDDDDDDDDDDDD\n");
    this.spawn(['help'])
        .wait('Usage:')
        .wait('neon new')
        .wait('neon version')
        .wait('neon help')
        .run(err => {
          if (err) throw err;
          done();
        });
  });
});
