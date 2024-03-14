import React from "react";
import { Link, Accordion, AccordionItem } from "@nextui-org/react";

const Help = () => {
    return (
        <div className="w-full flex flex-col" style={{ gap: "3.5rem", marginBottom:"3rem" }}>
            <div> 
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Help & Support</h2>
            </div>

            <div>
                <h3 style={{fontSize:"1.1rem"}}>Contact Email</h3>
                <Link isExternal href="startup.knowflow@gmail.com">
                    startup.knowflow@gmail.com
                </Link>
            </div>

            <div>
                <h3 style={{marginBottom:".8rem", fontSize:"1.1rem"}}>Frequently Asked Questions</h3>
                <Accordion variant="bordered">
                    <AccordionItem key="1" aria-label="Accordion 1" title="What's QuikPic all about?">
                    QuikPic is your go-to spot for sharing photos and hanging out with your crew online. Snap, share, and connect—it's that simple.
                    </AccordionItem>

                    <AccordionItem key="2" aria-label="Accordion 2" title="How do I dive into QuikPic?">
                    Easy-peasy! Just hop on our website, sign up, and start sharing your favorite pics with your pals. No hassle, all fun.
                    </AccordionItem>

                    <AccordionItem key="3" aria-label="Accordion 3" title="Can I post videos on QuikPic?">
                    Not yet, amigo. Right now, it's all about the pics. But hey, we're always cooking up something new!
                    </AccordionItem>

                    <AccordionItem key="4" aria-label="Accordion 4" title="Is QuikPic free?">
                    Absolutely! QuikPic's on the house. No fees, no fuss. Just pure photo-sharing goodness.
                    </AccordionItem>

                    <AccordionItem key="5" aria-label="Accordion 5" title="How can I discover new people to follow on QuikPic?">
                    Easy peasy! Check out the Explore page to discover new users and epic content. It's like stumbling upon a treasure trove of awesomeness.
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Help;