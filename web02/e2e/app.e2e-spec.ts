import { Web02Page } from './app.po';

describe('web02 App', () => {
  let page: Web02Page;

  beforeEach(() => {
    page = new Web02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
