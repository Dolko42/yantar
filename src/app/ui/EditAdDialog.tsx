"use client";

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { SingleAdType } from "../../../types";
import { ChangeEvent, useState } from "react";
import { donateAdCredits } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type EditAdDialogProps = {
  ad: SingleAdType;
  apiKey: string;
  authId: string;
  userCredits: number;
};

const EditAdDialog: React.FC<EditAdDialogProps> = ({
  ad,
  apiKey,
  authId,
  userCredits,
}) => {
  const [creditsValue, setCreditsValue] = useState<string>("");
  const { toast } = useToast();

  const handleCreditsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^\d*$/.test(inputValue)) {
      setCreditsValue(inputValue);
    } else {
      setCreditsValue("");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const creditsNumber = parseInt(creditsValue, 10);
    if (creditsNumber <= userCredits) {
      await donateAdCredits(apiKey, authId, creditsNumber, ad.id);
      toast({
        title: "Budget increased successfully",
        description:
          "Please make sure that both Headline and Link are filled in.",
      });
    } else {
      toast({
        title: "Not enough credits.",
        description: "Buy more credits before increasing the budget.",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-skin-muted text-sm">Edit ad</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white">
        <DialogHeader className="">
          <DialogTitle>Edit ad</DialogTitle>
          <DialogDescription>{ad.one_liner}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="text-white mb-2">Credits</label>
            <input
              className={`bg-white border-b-2 w-full border-skin-base text-skin-base p-2 focus:border-skin-base outline-none`}
              type="text"
              value={creditsValue}
              onChange={handleCreditsChange}
              placeholder="Enter numbers only"
            />
            <Button
              type="submit"
              className="bg-white mt-3 text-skin-base text-md w-full py-2 px-12 font-medium rounded-md 3xl:text-lg"
            >
              Save changes
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditAdDialog;
