import { Button } from "@/components/ui/button";
import Link from "next/link";
import {iconSizes} from "@/lib/constants";

const NavButton = ({ href, icon: Icon, text, variant }: {
  href: string;
  icon: any;
  text: string;
  variant: "secondary" | "ghost" | "destructive" | "outline" | "link" | "default";
}) => (
  <Link href={href}>
    <Button size="sm" variant={variant} className="flex gap-x-2 items-center">
      <Icon size={iconSizes.sm}/>
      {text}
    </Button>
  </Link>
);


export default  NavButton;