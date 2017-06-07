import { CheckAndShopFinalPage } from './app.po';

describe('check-and-shop-final App', function() {
  let page: CheckAndShopFinalPage;

  beforeEach(() => {
    page = new CheckAndShopFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
