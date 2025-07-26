"use client"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function CodeBlock({ code, language = "javascript", showLineNumbers,  customStyle = {}, }) {
  return (
    <div className="text-sm">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines
        showLineNumbers={showLineNumbers}
        customStyle={customStyle}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
