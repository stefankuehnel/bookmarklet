import type React from "react";

import { Popover as RadixUIPopover } from "radix-ui";
import { InfoCircledIcon, Cross2Icon } from "@radix-ui/react-icons";

import styles from "./Popover.module.css" with { type: "text" };

export type PopoverProps = {
  children?: React.ReactNode;
};

export const Popover = ({ children }: PopoverProps) => {
  return (
    <>
      <style>{styles}</style>
      <RadixUIPopover.Root>
        <RadixUIPopover.Trigger className="PopoverTrigger">
          <InfoCircledIcon />
        </RadixUIPopover.Trigger>
        <RadixUIPopover.Portal
          container={document.querySelector("x-bookmarklet")?.shadowRoot}
        >
          <RadixUIPopover.Content
            className="PopoverContent"
            arrowPadding={5}
            sideOffset={5}
            align="start"
            side="right"
          >
            {children}
            <RadixUIPopover.Close className="PopoverClose">
              <Cross2Icon />
            </RadixUIPopover.Close>
            <RadixUIPopover.Arrow className="PopoverArrow" />
          </RadixUIPopover.Content>
        </RadixUIPopover.Portal>
      </RadixUIPopover.Root>
    </>
  );
};
