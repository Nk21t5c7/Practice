import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

import React from "react";

const Nav = () => {
    return <div>
        <NavigationMenu>
            <NavigationMenuList >

                <NavigationMenuItem>
                    <Link href="/">
                        Home
                    </Link>

                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/add">
                        Add
                    </Link>

                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

    </div>;
};

export default Nav;

