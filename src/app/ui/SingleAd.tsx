import React from "react";
import { SingleAdType } from "../../../types";
import { formatDate } from "@/lib/utils";
import EditAdDialog from "./EditAdDialog";

type SingleAdProps = {
  ad: SingleAdType;
  userCredits: number;
  authId: string;
};

export default async function SingleAd({
  ad,
  userCredits,
  authId,
}: SingleAdProps) {
  const apiKey: string = process.env.YANTAR_API_KEY!;

  return (
    <>
      <div
        key={ad.id}
        className="flex items-center justify-between w-full mb-3 text-sm text-skin-base"
      >
        <div className="flex items-center gap-2">
          <div className="p-3 bg-gray-100 h-min min-w-40 border border-gray-200 rounded-lg">
            <h3 className="max-w-[25ch]">{ad.one_liner}</h3>
          </div>
          <EditAdDialog
            ad={ad}
            apiKey={apiKey}
            authId={authId}
            userCredits={userCredits}
          />
        </div>
        <div className="flex w-1/3 justify-between">
          <p>{ad.clicks_amount}</p>
          <p>{ad.credits_left}</p>
          <p>{formatDate(ad.created_at)}</p>
        </div>
      </div>
    </>
  );
}
