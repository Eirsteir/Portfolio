import Link from "next/link";
import { Button } from "~/components/Button";
import { ComputerIcon } from "~/icons/ComputerIcon";

export const LiveDemoButton = ({ link }: { link: string }) => (
  <Link href={link}>
    <Button>
      <ComputerIcon /> View Live
    </Button>
  </Link>
);
