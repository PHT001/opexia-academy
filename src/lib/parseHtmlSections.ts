export interface ContentSection {
  id: string;
  title: string;
  titleHtml: string;
  bodyHtml: string;
  html: string;
  index: number;
}

/**
 * Split raw HTML content by <h2> tags into an array of sections.
 * Each section contains the h2 title and all HTML until the next h2.
 * titleHtml = just the <h2>...</h2> tag
 * bodyHtml  = everything after the </h2> tag
 */
export function parseHtmlSections(content: string): ContentSection[] {
  if (!content) return [];

  // Split on <h2> tags, keeping the delimiter
  const parts = content.split(/(?=<h2[\s>])/i);
  const sections: ContentSection[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (!part) continue;

    // Extract title from <h2>...</h2>
    const h2Match = part.match(/<h2[^>]*>.*?<\/h2>/i);
    const titleHtml = h2Match ? h2Match[0] : "";
    const title = h2Match
      ? h2Match[0].replace(/<[^>]*>/g, "").trim()
      : `Section ${sections.length + 1}`;

    // Body = everything after the </h2> tag
    const bodyHtml = h2Match
      ? part.slice(part.indexOf(h2Match[0]) + h2Match[0].length).trim()
      : part;

    sections.push({
      id: `section-${sections.length}`,
      title,
      titleHtml,
      bodyHtml,
      html: part,
      index: sections.length,
    });
  }

  // If no h2 found, return the whole content as one section
  if (sections.length === 0 && content.trim()) {
    sections.push({
      id: "section-0",
      title: "Introduction",
      titleHtml: "",
      bodyHtml: content,
      html: content,
      index: 0,
    });
  }

  return sections;
}
