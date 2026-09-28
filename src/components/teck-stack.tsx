import Image from "next/image";

import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { TECH_STACK } from "@/portfolio/data/tech-stack";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-3 select-none">
          {TECH_STACK.map((tech) => {
            const iconSrc = tech.icon || `https://cdn.simpleicons.org/${tech.key}`;
            return (
              <li key={tech.key} className="flex">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.title}
                  title={tech.title}
                  className="group relative flex items-center gap-2 rounded-lg border border-edge bg-background/60 px-3 py-2 transition-all duration-200 hover:border-primary/40 hover:bg-accent2 hover:shadow-xs"
                >
                  <Image
                    src={iconSrc}
                    alt={`${tech.title} icon`}
                    width={20}
                    height={20}
                    unoptimized
                    className="size-5 object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="font-mono text-xs font-medium text-foreground">
                    {tech.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}

