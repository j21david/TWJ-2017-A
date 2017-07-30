import { TwjExamenApiApellidoNombrePage } from './app.po';

describe('twj-examen-api-apellido-nombre App', () => {
  let page: TwjExamenApiApellidoNombrePage;

  beforeEach(() => {
    page = new TwjExamenApiApellidoNombrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
