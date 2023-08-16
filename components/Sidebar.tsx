"use client";

import { cn } from "@/lib/utils";
import {usePathname} from "next/navigation"
import { Home, Plus, Settings } from "lucide-react";

const Sidebar = () => {
  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
      pro: false,
    },
    {
      icon: Plus,
      href: "/companion/new",
      label: "Create",
      pro: true,
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
      pro: false,
    },
  ];

  const pathName = usePathname();
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className=" space-y-2">
          {routes.map((route, index) => (
            <div
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathName === route.href && "bg-primary/10 text-primary"
              )}
              key={route.href}
            >
<div className="flex flex-col gap-y-2 items-center flex-1">
    <route.icon className="h-5 w-5" />
    {route.label}
    </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
