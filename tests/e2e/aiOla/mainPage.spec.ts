import { test, expect } from '@playwright/test'
import { HomePage } from '../../../page-objects/HomePage'
import { MoviesPage } from '../../../page-objects/moviesPage'
import { format } from 'date-fns';

test.describe.configure({ mode: 'serial' });

test.describe('Main - Page - Dashboard Test', () => {
    let homePage: HomePage
    let moviePage: MoviesPage
    
  test.beforeEach(async ({ page }) => {
    // loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    moviePage = new MoviesPage(page)

    await homePage.visit()
    // await loginPage.login(email, password)
  })

  test.describe('Main Page ', () => {
    test('Movie National Geographic page test', async ({ page }) => {
      await page.waitForTimeout(5000);
      console.log("Click To Right Arrow");
      await moviePage.clickRighttArrow(4, page);
      await page.waitForTimeout(3000);
      console.log("click Button Movie");
      await moviePage.clickButtonMovie();
      console.log("get The Text Title");
      const text = await moviePage.getTheTextTitle();
      console.log(text);
      expect(text).toContain('We Care About Your Privacy');
    });
  })
})
