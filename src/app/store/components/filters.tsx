import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Filter} from "lucide-react";
import {iconSizes} from "@/lib/constants";

export function Filters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"xs"}>
          <Filter size={iconSizes.sm}/>
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} >
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Filters for products
          </SheetDescription>
        </SheetHeader>
        <Label htmlFor="searchTerm">
          Search
        </Label>
        <Input type="text" id="searchTerm" placeholder="Search for products"/>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="mt-2" type="submit">Apply</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
