import { NumberpadPipe } from './numberpad.pipe';

describe('NumberpadPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberpadPipe();
    expect(pipe).toBeTruthy();
  });
});
