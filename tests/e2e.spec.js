import { test, expect } from '@playwright/test';

test('top page loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('SD Lab CD Demo');
});
