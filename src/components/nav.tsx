import { motion } from 'framer-motion';
import { useState } from 'react';
import { ThemeToggle } from './themeToggle';

const navMotion = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.15 } },
};

const navItemMotion = {
	hidden: { opacity: 0, x: 555 },
	visible: { opacity: 1, x: 0 },
};

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="relative flex justify-between items-center font-medium pt-12 pb-6 mb-24">
			<div>
				<a href="/">
					<svg
						id="logo-70"
						width="78"
						height="30"
						viewBox="0 0 78 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
							className="logo fill-current text-foreground"
						/>
						<path
							d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
							className="logo fill-current text-foreground"
						/>
					</svg>
				</a>
			</div>
			<div className="relative">
				<svg
					width={250}
					height={4}
					className="absolute -bottom-6 left-1/2 -translate-x-1/2"
					viewBox="0 0 250 4"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 2L428 2"
						className="stroke-current text-foreground"
						strokeWidth={2}
						strokeLinecap="round"
					/>
				</svg>
				<h1>
					<a href="/">newkidontheblock</a>
				</h1>
			</div>

			{/* desktop view */}
			<div className="hidden lg:block">
				<div className="flex justify-center items-center gap-12">
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</div>
				<div className="absolute -right-12 bottom-5">
					<ThemeToggle />
				</div>
			</div>

			{/* mobile view */}
			<div
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				className="lg:hidden space-y-1.5 cursor-pointer z-10"
			>
				<motion.span
					animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
					className="block h-0.5 w-8 bg-foreground"
				></motion.span>
				<motion.span
					animate={{ width: isOpen ? 0 : 24 }}
					className="block h-0.5 w-6 bg-foreground"
				></motion.span>
				<motion.span
					animate={{ rotateZ: isOpen ? -45 : 0, y: isOpen ? -8 : 0, width: isOpen ? 32 : 16 }}
					className="block h-0.5 w-4 bg-foreground"
				></motion.span>
			</div>
			{isOpen && (
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 25 }}
					className="lg:hidden bg-background fixed bottom-0 left-0 w-full h-screen flex items-center justify-center"
				>
					<motion.div
						variants={navMotion}
						animate="visible"
						initial="hidden"
						className="flex flex-col gap-24 text-lg text-foreground"
					>
						<motion.a variants={navItemMotion} href="/">
							Home
						</motion.a>
						<motion.a variants={navItemMotion} href="/about">
							About
						</motion.a>
						<motion.a variants={navItemMotion} href="/contact">
							Contact
						</motion.a>
						<motion.div variants={navItemMotion} className="ml-5">
							<ThemeToggle />
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</nav>
	);
}
