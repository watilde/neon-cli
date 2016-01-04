import { setup } from '../support/acceptance';

process.stdout.write("AAAAAAAAAAAAAAA");
describe('neon help', function() {
  process.stdout.write("BBBBBBBBBBBBBBBBBBBB");
  setup();
  process.stdout.write("CCCCCCCCCCCCCCCCCCC");
  it('should print neon usage', function(done) {
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
