import { LetslearnPage } from './app.po';

describe('letslearn App', () => {
  let page: LetslearnPage;

  beforeEach(() => {
    page = new LetslearnPage();
  });

  it('Should display Letslearn title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Letslearn');
  });

  it('Should start with 1 point', () => {
    page.navigateTo();
    expect(page.getPoints()).toEqual('1');
  });

  it('Should increase points by clicking plus1', () => {
    page.navigateTo();

    expect(page.getPoints()).toEqual('1');
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('2');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('5');
  });

  it('Should rest points by clicking plus1', () => {
    page.navigateTo();

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toEqual('4');

    page.getResetButton().click();

    expect(page.getPoints()).toEqual('0');
  });

});