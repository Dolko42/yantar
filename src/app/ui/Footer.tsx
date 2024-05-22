"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="px-6 text-skin-base mt-10">
      <div className="border-t pt-3 pb-10 border-skin-base">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full bg-skin-subtle p-4 rounded-md">
          <div className="flex flex-col lg:flex-row gap-6">
            <Link
              href="/"
              className={`text-sm ${
                isActive("/") ? "text-skin-base" : "text-skin-muted"
              }`}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm ${
                isActive("/dashboard") ? "text-skin-base" : "text-skin-muted"
              }`}
            >
              Dummy dashboard
            </Link>
            <a
              href="https://tally.so/r/3yl5v8"
              className={`text-sm ${
                isActive("/desired-path") ? "text-skin-base" : "text-skin-muted"
              }`}
            >
              Join waitlist
            </a>
          </div>
          <div className="flex gap-1 text-sm mt-8 lg:mt-0">
            by
            <a href="https://www.yazero.io/" target="_blank">
              <p className="underline font-semibold"> yazero.io 💚</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
