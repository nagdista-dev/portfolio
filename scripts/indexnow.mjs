const HOST = "nagdista.com";
const KEY = "68b0bbd009b8b307bbde4b0480eabfaf";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;

const sitemap = await fetch(SITEMAP, { headers: { "user-agent": "nagdista-indexnow/1.0" } });
if (!sitemap.ok) {
  console.error(`Could not fetch sitemap: ${sitemap.status}`);
  process.exit(1);
}

const xml = await sitemap.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());

if (urlList.length === 0) {
  console.error("No URLs found in sitemap.");
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs — HTTP ${response.status}`);
if (response.status >= 400) {
  console.error(await response.text());
  process.exit(1);
}
