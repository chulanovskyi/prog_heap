import { PhAppPage } from './app.po';

describe('ph-app App', () => {
  let page: PhAppPage;

  beforeEach(() => {
    page = new PhAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
