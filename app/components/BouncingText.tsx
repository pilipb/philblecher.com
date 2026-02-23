"use client";

import { ReactNode, isValidElement, ElementType } from "react";

interface BouncingTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    if (props.children) {
      return extractText(props.children);
    }
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  return "";
}

export default function BouncingText({ 
  children, 
  className = "", 
  as: Component = "span" 
}: BouncingTextProps) {
  const text = extractText(children);

  // Split text into characters, preserving spaces
  const characters = text.split("").map((char, index) => {
    if (char === " ") {
      return <span key={index} className="inline-block" style={{ width: "0.25em" }} />;
    }
    return (
      <span
        key={index}
        className="inline-block hover-bounce-letter"
        style={{
          animationDelay: `${index * 0.03}s`,
        }}
      >
        {char}
      </span>
    );
  });

  return (
    <Component className={`bouncing-text-group ${className}`}>
      {characters}
    </Component>
  );
}
