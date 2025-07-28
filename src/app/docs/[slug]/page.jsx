"use client";
import { useParams, notFound } from "next/navigation";
import { components } from "@/components/content/data/Components";
import Demos from "@/components/content/demos/demoImports";
import CodeBlock from "@/components/ui/CodeBlock";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MdCode } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Clipboard, Check } from "lucide-react";

export default function DocsPage() {
  const { slug } = useParams();
  const component = components.find((a) => a.slug === slug);
  if (!component) return notFound();

  const DemoComponent = Demos?.[component.demo];
  const [demoCode, setDemoCode] = useState("");
  const [codeSource, setCodeSource] = useState("");
  // State to manage clipboard copy status
  const [copiedDemo, setCopiedDemo] = useState(false);
  const [copiedSource, setCopiedSource] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);

  // Load demo code via raw-loader
  useEffect(() => {
    const loadCode = async () => {
      const code = await import(
        `@/components/content/demos/${component.demo}.jsx?raw`
      );
      setDemoCode(code.default);
    };
    loadCode();
  }, [component.demo]);
  // Load source code via raw-loader
  useEffect(() => {
    const loadSourceCode = async () => {
      const code = await import(
        `@/components/content/demos/${component.source}.jsx?raw`
      );
      setCodeSource(code.default);
    };
    loadSourceCode();
  }, [component.source]);

  // Function to copy text to clipboard
  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 text-white mt-20">
      <h1 className="text-3xl font-bold mb-2">{component.title}</h1>
      <p className="text-zinc-400 mb-6">{component.description}</p>
      <Tabs defaultValue="preview">
        <TabsList className="mb-4 bg-zinc-800">
          <TabsTrigger
            value="preview"
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaRegEye className="text-lg" />
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="flex items-center gap-2 cursor-pointer"
          >
            <MdCode className="text-lg" />
            Code
          </TabsTrigger>
        </TabsList>
        {/* demo preview */}
        <TabsContent value="preview">
          <div className="p-6 border border-border rounded-xl">
            {DemoComponent ? (
              <DemoComponent />
            ) : (
              <div className="text-red-500">Preview component not found.</div>
            )}
          </div>
        </TabsContent>
        {/* demo code */}
        <TabsContent value="code">
          <div className="relative">
            <CodeBlock
              showLineNumbers
              customStyle={{
                borderRadius: "0.5rem",
                padding: "1rem",
              }}
              code={demoCode}
              language="javascript"
            />
            <button
              onClick={() => copyToClipboard(demoCode, setCopiedDemo)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 p-2 rounded transition cursor-pointer"
            >
              {copiedDemo ? <Check className="size-4"/> : <Clipboard className="size-4"/> }
            </button>
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-xl font-bold mt-10 mb-4">Installation</h2>
        <p className="text-zinc-400 text-sm mb-2">Install dependencies</p>
        {component.install.map((cmd, i) => (
          <div key={i} className="relative mb-2">
            <pre className="bg-zinc-900 border border-zinc-800 rounded px-4 py-2 text-sm text-wrap">
              {cmd}
            </pre>
            <button
              onClick={() => copyToClipboard(cmd, setCopiedInstall)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 p-1 rounded transition cursor-pointer"
            >
              {copiedInstall ? <Check className="size-4"/> : <Clipboard className="size-4"/> }
            </button>
          </div>
        ))}
      </div>
      {/* source code view */}
      <div>
        <h2 className="text-xl font-bold mt-10 mb-4">Source code</h2>
        <p className="text-zinc-400 mb-4 text-xs bg-zinc-800 w-fit px-2 py-1 rounded-xs">
          {component.sourcePath}
        </p>
        <div className="relative">
          <CodeBlock
            showLineNumbers
            customStyle={{
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
            code={codeSource}
            language="javascript"
          />
          <button
              onClick={() => copyToClipboard(codeSource, setCopiedSource)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-xs p-2 rounded transition cursor-pointer"
            >
              {copiedSource ? <Check className="size-4 "/> : <Clipboard className="size-4"/>}
            </button>
        </div>
      </div>
    </div>
  );
}
