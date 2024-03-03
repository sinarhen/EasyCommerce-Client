import {Button} from "@/components/ui/button";
import Link from "next/link";
import {iconSizes} from "@/lib/constants";
import {NavButtonProps} from "@/types/nav-button";


const NavButton = ({href, Icon, text, variant}: Readonly<NavButtonProps>) => (
  <Link href={href}>
    <Button size="sm" variant={variant} className="flex gap-x-2 items-center">
      <Icon size={iconSizes.sm}/>
      {text}
    </Button>
  </Link>
);


export default NavButton;