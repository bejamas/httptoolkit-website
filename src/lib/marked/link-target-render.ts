import { marked } from 'marked';

export const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);
  return html
    .replace(/^<a /, `<a target="_blank" rel="noopener noreferrer" `)
    .replace(/<\/a>/, `<span class="visually-hidden">opens in a new tab</span></a>`);
};
