// Copyright 2025 Binkce. All rights reserved.

import { Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./Header.module.css"

// Main header component of the Binkce website.
export default function Header() {
    // State to handle whether the dropdown menu is open or closed.
    const [isOpen, setIsOpen] = useState(false);

    // Reference to store the timer used for delayed menu closing.
    const closeTimer = useRef<NodeJS.Timeout>(undefined);

    // Function to open the menu (cancels the close timer if active).
    const openMenu = (): void => {
        if (closeTimer.current)
            clearTimeout(closeTimer.current);
        setIsOpen(true);
    };

    // Function to close the menu after a short delay (200 ms).
    const closeMenu = (): void => {
        if (closeTimer.current)
            clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setIsOpen(false), 200);
    };

    /* This component returns the complete structure of the website header,
     * including a navigation bar that integrates the logo and the main menu
     * links. It also features an animated dropdown menu, managed
     * with Framer Motion, which smoothly appears when the user hovers over
     * the “Our services” section.
     */
    return (
        <div className={styles["nav-font"]}>
                <header className={styles["nav-header"]}>
                    <div className={`${styles["nav-header-inner"]} layout-container`}>
                        <Link to="/">
                            <img className={styles["nav-logo"]}
                                 src="/logos/logotype.svg"
                                 width={130}
                                 height={30}
                                 alt=""/>
                        </Link>
                        <ul className={styles["nav-menu"]}>
                            <li onMouseEnter={openMenu}
                                onMouseLeave={closeMenu}>
                                <Link to="/public">
                                    Our services
                                    <img className={styles["nav-icon-chevron"]}
                                         src="/icons/angle-down.svg"
                                         width={13}
                                         height={13}
                                         alt=""
                                    />
                                </Link>
                            </li>
                            <li><Link to={"/resources"}>Resources</Link></li>
                            <li><Link to={"/about"}>About us</Link></li>
                        </ul>
                    </div>
                </header>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className={styles["nav-dropdown-menu"]}
                            initial={{opacity: 0, y: -15}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -15}}
                            transition={{duration: 0.5}}
                            onMouseEnter={openMenu}
                            onMouseLeave={closeMenu}>
                            <li><Link to="/services/discretionary-portfolio-management">Discretionary Portfolio Management</Link></li>
                            <li><Link to="/services/investment-advisory">Investment Advisory</Link></li>
                            <li><Link to="/services/client-portfolio-evaluation">Client Portfolio Evaluation</Link></li>
                        </motion.ul>
                    )}
                </AnimatePresence>
        </div>
    )
}
