"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const sourcesVariants = cva("flex flex-col gap-2", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SourcesProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof sourcesVariants> { }

const Sources = React.forwardRef<HTMLDivElement, SourcesProps>(
  ({ className, variant, ...props }, ref) => (
    <Collapsible
      className={cn(sourcesVariants({ variant }), className)}
      {...props}
      ref={ref}
    />
  )
);
Sources.displayName = "Sources";

const SourcesContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CollapsibleContent>
>(({ className, ...props }, ref) => (
  <CollapsibleContent
    className={cn("space-y-2", className)}
    {...props}
    ref={ref}
  />
));
SourcesContent.displayName = "SourcesContent";

interface SourcesTriggerProps
  extends React.ComponentPropsWithoutRef<typeof CollapsibleTrigger> {
  count?: number;
}

const SourcesTrigger = React.forwardRef<
  HTMLButtonElement,
  SourcesTriggerProps
>(({ className, count = 0, ...props }, ref) => (
  <CollapsibleTrigger asChild>
    <Button
      variant="ghost"
      size="sm"
      className={cn("h-auto p-0", className)}
      {...props}
      ref={ref}
    >
      <LinkIcon className="mr-1 h-3 w-3" />
      <span className="text-xs">{count} sources</span>
    </Button>
  </CollapsibleTrigger>
));
SourcesTrigger.displayName = "SourcesTrigger";

interface SourceProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  title: string;
}

const Source = React.forwardRef<HTMLDivElement, SourceProps>(
  ({ className, href, title, ...props }, ref) => (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border p-2 text-sm",
        className
      )}
      {...props}
      ref={ref}
    >
      <LinkIcon className="h-4 w-4 shrink-0" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="line-clamp-1 flex-1 overflow-hidden text-ellipsis"
      >
        {title}
      </a>
    </div>
  )
);
Source.displayName = "Source";

export { Sources, SourcesContent, SourcesTrigger, Source };