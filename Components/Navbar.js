import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
const useMediaQuery = (width) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`);
		media.addListener(updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeListener(updateTarget);
	}, []);

	return targetReached;
};
export default function Navbar() {
	const isBreakpoint = useMediaQuery(1100);
	return <div>{isBreakpoint ? <HamburgerMenu /> : <NavbarDesktop />}</div>;
}
function NavbarDesktop() {
	return (
		<nav
			style={{
				borderBottom: "2px solid #828282",
				maxHeight: "100px",
				zIndex: "1",
			}}
		>
			<Container maxWidth="xl">
				<Grid container spacing={0}>
					<Grid
						item
						xs={3}
						md={3}
						lg={3}
						xl={3}
						className="borderNav"
						style={{ paddingTop: "30px" }}
						justifyContent="flex-end"
					>
						<Link href="/" passHref>
						<img
							src="/logo.svg"
							style={{ height: "40px", width: "auto",cursor:'pointer' }}
							alt="logo"
						/>
						</Link>
		
					</Grid>
					<Grid item xs={7} md={7} lg={7} xl={7} className="borderNav">
						<div className="menu">
							{" "}
							<ul>
								<li>
									<Link href="/">Home </Link>
								</li>
								<li>
									<Link href="/products">Products </Link>
								</li>
								<li>
									<Link href="/brands">Brands </Link>
								</li>
								<li>
									<Link href="/about">About</Link>
								</li>
								<li>
									<Link href="/gallery">Gallery </Link>
								</li>
								<li>
									<Link href="/blogs">Blogs</Link>
								</li>
							</ul>
						</div>
					</Grid>
					<Grid
						item
						xs={2}
						md={2}
						lg={2}
						xl={2}
		
						container
						direction="column"
						alignItems="flex-start"
						justifyContent="flex-start"
					>
					<Link href="/contact" passHref ><span className="navText"><span> Get In Touch </span></span></Link>
					</Grid>
				</Grid>
			</Container>
		</nav>
	);
}
function HamburgerMenu() {
	const [open, setopen] = useState(false);
	return (
		<div style={{ position: "fixed", zIndex: "1" }}>
			<div
				className="hamburger"
				style={{ borderBottom: "2px solid #828282", maxHeight: "100px" }}
			>
				<div style={{ paddingLeft: "16px", cursor: "pointer" }}>
					<img
						src="/logo.svg"
						alt="Logo"
						onClick={() => Router.push({ pathname: "/" })}
						style={{ height: "40px", width: "auto", paddingTop: "30px" ,cursor:'pointer'}}
					/>
				</div>
				<div style={{ paddingRight: "16px" }} onClick={() => setopen(true)}>
					<img
						src="/ham.svg"
						alt="icon"
						style={{ height: "40px", width: "auto", paddingTop: "30px" }}
					/>
				</div>
			</div>
			<Drawer anchor="right" open={open}>
				<Box
					role="presentation"
					onClick={() => setopen(false)}
					sx={{ width: "60vw" }}
				>
					<div
						style={{ paddingRight: "16px", direction: "rtl" }}
						onClick={() => setopen(false)}
					>
						<img
							src="/cross.svg"
							alt="icon"
							style={{ height: "40px", width: "auto", paddingTop: "30px" }}
						/>
					</div>
					<div className="ham">
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/products">Products</Link>
							</li>
							<li>
								<Link href="/brands">Brands</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/gallery">gallery</Link>
							</li>
							<li>
								<Link href="/blogs">Blogs</Link>
							</li>
							<li>
								<Link href="/contact">
									<a href="" style={{ color: "#0BBA60" }}>
										Get in Touch{" "}
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</Box>
			</Drawer>
		</div>
	);
}
