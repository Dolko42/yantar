import Button from "@/app/ui/Button";
import { CtaDropdown } from "@/app/ui/CtaDropdown";
import Input from "@/app/ui/Input";
import NewAd from "@/app/ui/NewAd";

export default function Page() {
  return (
    <div className="p-4 mt-2 lg:mt-8">
      <h1 className="text-skin-base text-5xl">New ad</h1>
      <NewAd />
    </div>
  );
}
