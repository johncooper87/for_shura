import puppeteer, { LaunchOptions } from 'puppeteer';

async function main() {

  const options: LaunchOptions = {};
  
  options.executablePath = 'google-chrome-stable';
  // @ts-ignore
  options.args = ['--no-sandbox'];

  const browser = await puppeteer.launch({ headless: true, ...options });

  const page = await browser.newPage();
  const url = 'http://google.com'; // твой url
  await page.goto(url);
  const filename = 'example.png'; // файл в который хочешь сохранить скриншот страницы
  await page.screenshot({ path: filename, fullPage: true });

  page.close();
  browser.close();
};

main();
