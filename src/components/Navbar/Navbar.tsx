import { Component, createSignal , For } from "solid-js";
import { A } from "@solidjs/router";

const menuItems = [
    {label : "Home", href : '#' },
    {label : "Projects", href : '#' },
    {label : "About", href : '#' },
    {label : "Contanct", href : '#' },
]

const Navbar : Component  = () =>{
    const [isOpen, setIsOpen] = createSignal(false);

    return (
        <nav class="flex items-center justify-between px-6 py-4 bg-neutral-900 text-white relative">
            <div class="font-bold text-lg">
                Shawn.dev
            </div>
            {/* <ul class="hidden md:flex gap-6">
                <For each={menuItems}>
                    {(items) => (
                        <li>
                            <A
                            href={items.href}
                            end={items.href === "/"}
                            class="text-neutral-300 hover:text-white transition-colors"
                            activeClass="text-white font-semibold"
                            >
                                {items.label}
                            </A>
                        </li>
                    )}
                </For>
            </ul> */}

            <button
                class="md:hidden text-neutral-300"
                onClick={()=>{setIsOpen(!isOpen())}}
            >
                {isOpen() ? "Close" : "Open"}
            </button>
        </nav>
    )
}

export default Navbar;