export function extractTextFromHtml(html: string): string {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || '';
}

export function extractTextFromElements(elements: any[]): string[] {
  return elements.map(element => {
    switch (element.type) {
      case 'text':
        return extractTextFromHtml(element.htmlContent);
      case 'mcq':
        return `Question: ${element.question}. Options: ${element.options
          .map((opt: any, index: number) => `${index + 1}: ${opt.text}`)
          .join('. ')}`;
      case 'image':
        return `Image: ${element.alt}${element.caption ? `. ${element.caption}` : ''}`;
      case 'video':
        return `Video: ${element.title}${element.description ? `. ${element.description}` : ''}`;
      default:
        return '';
    }
  }).filter(text => text);
}