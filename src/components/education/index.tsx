import { CalendarIcon, GraduationCapIcon, MapPinIcon } from "lucide-react";
import React from "react";

import { Panel, PanelHeader, PanelTitle } from "../panel";
import { Tag } from "@/components/ui/tag";
import { EDUCATION_LIST } from "@/portfolio/data/education";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="space-y-4 p-4">
        {EDUCATION_LIST.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl border border-edge bg-background/50 p-5 transition-all hover:border-primary/30 hover:bg-accent2"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-edge bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                  <GraduationCapIcon className="size-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-snug text-foreground">
                    {item.institution}
                  </h3>
                  <p className="mt-0.5 font-mono text-sm font-medium text-muted-foreground">
                    {item.degree}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pl-13 sm:pl-0 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CalendarIcon className="size-3.5" />
                  {item.period.start} — {item.period.end || "Present"}
                </span>
                <span className="flex items-center gap-1">
                  <MapPinIcon className="size-3.5" />
                  {item.location}
                </span>
              </div>
            </div>

            {item.description && (
              <p className="mt-3 pl-13 font-mono text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3.5 flex flex-wrap gap-1.5 pl-13">
                {item.highlights.map((highlight, index) => (
                  <li key={index} className="flex">
                    <Tag>{highlight}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Panel>
  );
}
