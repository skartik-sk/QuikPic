import React from "react";
import { Link, Accordion, AccordionItem } from "@nextui-org/react";

const Help = () => {
    return (
        <div className="w-full flex flex-col" style={{ gap: "3.5rem", paddingRight:"15rem", marginBottom:"3rem" }}>
            <div> 
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Help & Support</h2>
            </div>

            <div>
                <h3 style={{fontSize:"1.1rem"}}>Contact Email</h3>
                <Link isExternal href="https://github.com/nextui-org/nextui">
                    https://github.com/nextui-org/nextui
                </Link>
            </div>

            <div>
                <h3 style={{marginBottom:".8rem", fontSize:"1.1rem"}}>Frequently Asked Questions</h3>
                <Accordion variant="bordered">
                    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>

                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>

                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>

                    <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>

                    <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Help;