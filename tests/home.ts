import { test, expect } from '@playwright/test'

test('See if information is well', async ({ page }) => {
	await page.goto('http://localhost:3000/')
})
