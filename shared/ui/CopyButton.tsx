"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  iconSize?: number;
  label?: string;
}

export function CopyButton({
  text,
  className,
  iconSize = 16,
  label,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center justify-center rounded-md p-1.5 transition-all hover:bg-white/10 active:scale-90",
        copied ? "text-green-400" : "text-slate-400 hover:text-white",
        className,
      )}
      title={copied ? "Kopiert!" : "Kopieren"}
    >
      {copied ? <Check size={iconSize} /> : <Copy size={iconSize} />}
      {label && <span className="m-s-2 text-xs font-semibold">{label}</span>}
    </button>
  );
}
