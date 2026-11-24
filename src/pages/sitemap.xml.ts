import type { APIRoute } from 'astro';

// El sitio es de una sola página: si se agregan más, añadirlas aquí
const pages = [''];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((page) => `<url><loc>${new URL(page, site)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
