import { TwjExamenJoseGonzalezPage } from './app.po';

describe('twj-examen-jose-gonzalez App', () => {
  let page: TwjExamenJoseGonzalezPage;

  beforeEach(() => {
    page = new TwjExamenJoseGonzalezPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
