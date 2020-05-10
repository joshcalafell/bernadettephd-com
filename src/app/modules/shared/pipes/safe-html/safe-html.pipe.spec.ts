import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    let pipe: SafeHtmlPipe;

    beforeEach(() => {
      pipe = new SafeHtmlPipe(null);
    });

    it('create an instance', () => {
      expect(pipe).toBeTruthy();
    });
  });
});
