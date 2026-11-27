import type { AnchorHTMLAttributes, ReactNode } from "react";
import { url } from "../../lib/paths";

type SiteLinkProps = {
  to: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function SiteLink({ to, children, ...rest }: SiteLinkProps) {
  return (
    <a href={url(to)} {...rest}>
      {children}
    </a>
  );
}
