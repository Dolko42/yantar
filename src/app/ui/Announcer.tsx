import React from "react";

type AnnouncerProps = {};

const Announcer: React.FC<AnnouncerProps> = () => {
  return (
    <div className="relative flex overflow-x-hidden text-white bg-skin-secondary">
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="mx-8 font-mono">product in development</span>
        <span className="mx-8">join waitlist</span>
        <span className="mx-8 font-mono">product in development</span>
        <span className="mx-8">join waitlist</span>
        <span className="mx-8 font-mono">product in development</span>
        <span className="mx-8">join waitlist</span>
      </div>

      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
        <span className="mx-8 font-mono">product in development</span>
        <span className="mx-8">join waitlist</span>
        <span className="mx-8 font-mono">product in development</span>
        <span className="mx-8">join waitlist</span>
        <span className="mx-8 font-mono">product in development</span>
        <span className="mx-8">join waitlist</span>
      </div>
    </div>
  );
};
export default Announcer;
