//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "https://api3.adbacklist.com/api/products/sitemap4";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->

       ${posts

         .map((id) => {
           return `
       <url>
           <loc>${`https://adbacklist.com/post/details/${id?.category}/${id?._id}`}</loc>
       </url>
       `;
         })
         .join("")}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const request = await fetch(EXTERNAL_DATA_URL);

  const posts = await request.json();
  const news = posts.data;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(news);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
