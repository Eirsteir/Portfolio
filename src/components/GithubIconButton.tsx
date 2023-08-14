import Link from "next/link";
import { Button } from "~/components/Button";
import { GithubIcon } from "~/icons/GithubIcon";

export const GithubIconButton = (link: { link: string }) => (
  <Link href={link.link}>
    <Button>
      <GithubIcon /> View on Github
    </Button>
  </Link>
);
