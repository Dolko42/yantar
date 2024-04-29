import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CtaDropdown() {
  return (
    <div className="relative z-50 text-skin-base">
      <Select>
        <SelectTrigger className="w-full border-b-2 border-skin-base focus:border-blue-500 bg-white rounded-none">
          <SelectValue placeholder="Last 30 days" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup className="bg-skin-light">
            <SelectLabel className="text-skin-base">CTA</SelectLabel>
            <SelectItem
              value="today"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Shop now
            </SelectItem>
            <SelectItem
              value="7"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Browse all
            </SelectItem>
            <SelectItem
              value="30"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Learn more
            </SelectItem>
            <SelectItem
              value="all"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Book a demo
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
