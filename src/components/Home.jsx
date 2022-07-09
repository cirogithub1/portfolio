import React from "react";
import { useState } from "react";
import "./Home.css";
import logo from "../assets/img/french-flag.gif";
import { useEffect } from 'react'
import { BsJustify } from 'react-icons/bs'

const Home = () => {
	const [showSideBar, setShowSideBar] = useState(false)
	// fix the Header
	useEffect(() => {
		const listener = () => {
			if (window.scrollY > 100) {
				document.querySelector('.header').classList.add('active')
			} else {
				document.querySelector('.header').classList.remove('active')
			}
		}
		document.addEventListener('scroll', listener)

		return () => {
			document.removeEventListener('scroll', listener)
		}
	}, [])

	return (
		<div className="home" id="Home">
			<div className="home__bg">
				<div className="header d__flex align__items__center  pxy__30">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="navigation pxy__30">
						<ul className="navbar d__flex">
							<a href="#Home">
								<li className="nav__items mx__15">Home</li>
							</a>
							<a href="#Service">
								<li className="nav__items mx__15">Services</li>
							</a>
							<a href="#About">
								<li className="nav__items mx__15">About</li>
							</a>
							<a href="#Contact">
								<li className="nav__items mx__15">Contact</li>
							</a>
						</ul>
					</div>

					{/* Toggle navigation menu */}
					<div className="toggle__nav__menu">
						<BsJustify onClick={() => setShowSideBar(!showSideBar)} />
					</div>
					{showSideBar && (
						<div className="side__nav__bar">

							<ul className="side__bar d__flex">
								<li className="side__nav__bar">
									<a href="#Home">Home</a>
								</li>
								<li className="side__nav__bar">
									<a href="#Service">Services</a>
								</li>
								<li className="side__nav__bar">
									<a href="#About">About</a>
								</li>
								<li className="side__nav__bar">
									<a href="#Contact">Contact</a>
								</li>
							</ul>
						</div>
					)}

				</div>

				<div className="container">
					<div className="home__content">
						<div className="home__meta">
							<h1 className="home__text pz__10">Hi, I'm Suzanne B.</h1>
							<h2 className="home__text pz__10">Language Teacher</h2>
							<h3 className="home__text sweet pz__10">Total Inmersion Curses</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
