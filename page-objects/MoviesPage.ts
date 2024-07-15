import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'
import { format } from 'date-fns';

export class MoviesPage extends AbstractPage {

  readonly clickToRightArrow: Locator
  readonly clickToButton: Locator
  readonly getTextTitle: Locator


    constructor(page: Page) {
    super(page);
    this.clickToButton = page.locator('div:nth-child(20) > div > div > .BackgroundImage > .BaseTile__Footer > .BaseTile__Button > .AnchorLink');
    this.clickToRightArrow = page.getByRole('button', { name: 'next' });
    this.getTextTitle = page.locator('#onetrust-banner-sdk');
  }

  async clickRighttArrow(i: number, page: Page) {
    for (let i = 0; i < 4; i++) {
      await this.clickToRightArrow.click()
      await page.waitForTimeout(3000);
  }
    
   
  }
  
  async clickButtonMovie() {
    await this.clickToButton.click()
  }

  async getTheTextTitle() {
    return this.getTextTitle.innerText()
  }

}

