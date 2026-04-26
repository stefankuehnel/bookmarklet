import { Theme } from "@/components/Theme";
import { Popover } from "@/components/Popover";

export const Bookmarklet = () => {
  return (
    <Theme>
      <Popover>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span>
            <strong>Bookmarklet</strong>
          </span>
          <span>
            This is a <code>Popover</code> which is rendered via Radix UI
            <br />
            through a Web Browser Bookmarklet.
          </span>
        </div>
      </Popover>
    </Theme>
  );
};
