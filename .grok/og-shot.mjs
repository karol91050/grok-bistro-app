import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const html = pathToFileURL("/workspace/.grok/og-card.html").href;
const out = "/workspace/.grok/og-raw.png";
const chrome =
  "/opt/pw-browsers/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath: chrome,
  args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto(html, { waitUntil: "load", timeout: 30000 });
await page.evaluate(async () => {
  await document.fonts.ready;
  const imgs = [...document.images];
  await Promise.all(
    imgs.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((res, rej) => {
            img.onload = res;
            img.onerror = rej;
          }),
    ),
  );
});
await page.waitForTimeout(200);
await page.screenshot({ path: out, type: "png", omitBackground: false });
await browser.close();
console.log("wrote", out);
