import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function NavLink({
  href,
  children,
  className,
  exact = false,
  active,
}: {
  href: string;
  children: ReactNode;
  className: string;
  exact?: boolean;
  active: string;
}) {
  const router = useRouter();
  const path = router.asPath;
  const isActive = path.endsWith(href);
  const classes = `${className} ${isActive ? active : ""}`;
  return (
    <Link href={href} passHref>
      <a className={classes}>{children}</a>
    </Link>
  );
}

export default NavLink;
