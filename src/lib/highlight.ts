import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/stackoverflow-light.css';
hljs.registerLanguage('javascript', javascript);

export function highlight(code: string) {
    return hljs.highlight(code, { language: 'javascript' }).value;
}
