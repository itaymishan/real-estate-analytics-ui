import { RealEstateAnalyticsUiPage } from './app.po';

describe('real-estate-analytics-ui App', function() {
  let page: RealEstateAnalyticsUiPage;

  beforeEach(() => {
    page = new RealEstateAnalyticsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
