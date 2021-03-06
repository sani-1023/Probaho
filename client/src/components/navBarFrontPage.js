import React from "react";
import css from "./navBarFrontPage.module.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

//const { Header, Content, Footer } = Layout;

export default function Navbar() {
	return (
		<header className={css.header}>
		  <div className={css.logo}>Probaho</div>
		  <nav>
			<ul>
			  <li>
				<Link to='/Post'>Post</Link>
			  </li>
			  <li>
				<Link to='/Register'>Sign Up</Link>
			  </li>
			  <li>
				<Link to='/Login'>Sign In</Link>
			  </li>
			  <li>
				<Link to='/BloodbankSignUpPage'>Blood Bank</Link>
			  </li>
			</ul>
		  </nav>
		</header>
	  );
}
