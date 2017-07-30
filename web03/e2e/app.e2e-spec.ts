import { Web03Page } from './app.po';

describe('web03 App', () => {
  let page: Web03Page;

  beforeEach(() => {
    page = new Web03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
