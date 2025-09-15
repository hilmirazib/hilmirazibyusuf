"use client";

import { useEffect } from "react";
import hljs from "highlight.js/lib/core";

import ts from "highlight.js/lib/languages/typescript";
import js from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import diff from "highlight.js/lib/languages/diff";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("ts", ts);
hljs.registerLanguage("tsx", ts);
hljs.registerLanguage("js", js);
hljs.registerLanguage("jsx", js);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("diff", diff);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);

export default function CodeHighlighter() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return null;
}
