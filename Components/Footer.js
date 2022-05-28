import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import Typography from "@mui/material/Typography";

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
	const isBreakpoint = useMediaQuery(620);
	return <div>{isBreakpoint ? <FooterM /> : <FooterW />}</div>;
}

function FooterW() {
	return (
		<footer>
			<Container maxWidth="xl">
				<Grid container spacing={0} direction="row">
					<Grid item xs={12} md={12} lg={12} xl={12}>
						<img
							src="/logow.svg"
							style={{ height: "40px", width: "auto", paddingTop: "60px" }}
							alt="logo"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
						<Typography
							variant="body2"
							color="secondary.main"
							style={{ paddingTop: "30px" }}
						>
							TEXSAS Engineering CO. LTD is a trading house with extensive
							experience in printing and finishing acquired over the years while meeting the challenges of
							current business contests whose success is inextricably linked to
							the professional and technical capabilities and team of highly
							competent team.{" "}
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						alignItems="flex-end"
						justifyContent="flex-start"
					>
						<a href="tel: +8801713129762">
							{" "}
							<Typography
								variant="body1"
								color="secondary.main"
								style={{ paddingTop: "30px" }}
							>
								+8801713129762
							</Typography>
						</a>
						<a
							href="mailto:amirul@texsasbd.com"
						className="mail"
						>
							<Typography variant="body1" color="secondary.main">
								amirul@texsasbd.com
							</Typography>
						</a>
						<a
							href="mailto:sales@texsasbd.com"
							style={{ paddingBottom: "24px" }}
							className="mail"
						>
							<Typography variant="body1" color="secondary.main">
								sales@texsasbd.com
							</Typography>
						</a>
						<span className="button1">
							<Link href="/contact">Get In Touch</Link>
						</span>
					</Grid>
					<Grid
						item
						xs={12}
						md={12}
						lg={12}
						xl={12}
						container
						direction="column"
						alignItems="flex-end"
						justifyContent="flex-start"
					>
						<div className="menus">
							<ul>
								<li>
									<a href="#" className="btn1">
										Facebook
									</a>
								</li>
								<li>
									<a href="#" className="btn1">
										Youtube
									</a>
								</li>
								<li>
									<a href="#" className="btn1">
										Linkedin
									</a>
								</li>
							</ul>
						</div>
						<div className="line"></div>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						alignItems="flex-start"
						justifyContent="flex-start"
					>
						<Typography
							variant="body2"
							color="secondary.light"
							style={{ opacity: "0.64", paddingTop: "8px" }}
						>
							© 2022 - TEXSAS Engineering Company LTD.
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						alignItems="flex-end"
						justifyContent="flex-start"
					>
						<div style={{ display: "flex" }}>
						<Link href='/privacy-policy' passHref >
							<Typography
								variant="body2"
								color="secondary.light"
								style={{
									opacity: "0.64",
									paddingTop: "8px",
									paddingRight: "8px",
									cursor:'pointer'
								}}
							>
								PRIVACY POLICY
							</Typography>
							</Link>
							<Link href='/terms-of-service' passHref >
							<Typography
								variant="body2"
								color="secondary.light"
								style={{ opacity: "0.64", paddingTop: "8px" ,cursor:'pointer'}}
							>
								TERMS OF SERVICE
							</Typography>
							</Link>
						</div>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
}

function FooterM() {
	return (
		<footer>
			<Container maxWidth="xl">
				<Grid container spacing={0} direction="row">
					<Grid item xs={12} md={12} lg={12} xl={12}>
						<img
							src="/logow.svg"
							style={{ height: "40px", width: "auto", paddingTop: "60px" }}
							alt="logo"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
						<Typography
							variant="body2"
							color="secondary.main"
							style={{ paddingTop: "30px" }}
						>
							TEXSAS Engineering CO. LTD is a trading house with extensive
							experience in printing and finishing acquired over the years while meeting the challenges of
							current business contests whose success is inextricably linked to
							the professional and technical capabilities and team of highly
							competent team.{" "}
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						alignItems="flex-start"
						justifyContent="flex-start"
					>
						<a href="tel: +8801713129762">
							{" "}
							<Typography
								variant="body1"
								color="secondary.main"
								style={{ paddingTop: "30px" }}
							>
								+8801713129762
							</Typography>
						</a>
						<a
							href="mailto:contact@texsasbd.com"
							style={{ paddingBottom: "24px" }}
						>
							<Typography variant="body1" color="secondary.main">
								contact@texsasbd.com
							</Typography>
						</a>
						<span className="button1">
							<Link href="/contact">Get In Touch</Link>
						</span>
					</Grid>
					<Grid
						item
						xs={12}
						md={12}
						lg={12}
						xl={12}
						container
						direction="column"
						alignItems="flex-end"
						justifyContent="flex-start"
					>
						<div className="menus">
							<ul>
								<li>
									<a href="#" className="btn1">
										Facebook
									</a>
								</li>
								<li>
									<a href="#" className="btn1">
										Youtube
									</a>
								</li>
								<li>
									<a href="#" className="btn1">
										Linkedin
									</a>
								</li>
							</ul>
						</div>
						<div className="line"></div>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						alignItems="flex-end"
						justifyContent="flex-start"
					>
						<div style={{ display: "flex" }}>
							<Link href='/privacy-policy' passHref >
							<Typography
								variant="body2"
								color="secondary.light"
								style={{
									opacity: "0.64",
									paddingTop: "8px",
									paddingRight: "8px",
									cursor:'pointer'
								}}
							>
								PRIVACY POLICY
							</Typography>
							</Link>
							<Link href='/terms-of-service' passHref style={{cursor:'pointer'}}>
							<Typography
								variant="body2"
								color="secondary.light"
								style={{ opacity: "0.64", paddingTop: "8px" ,cursor:'pointer'}}
							>
								TERMS OF SERVICE
							</Typography>
							</Link>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						alignItems="flex-end"
						justifyContent="flex-start"
					>
						<Typography
							variant="body2"
							color="secondary.light"
							style={{
								opacity: "0.64",
								paddingTop: "8px",
								paddingBottom: "8px",
							}}
						>
							© 2022 - TEXSAS Engineering Company LTD.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
}
