import React from "react";
import {
	Button,
	ButtonGroup,
	Container,
	Divider,
	Grid,
	List,
	ListItem,
	Menu,
	Paper,
	Table,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from "@material-ui/core";

import "./App.frame.scss";
import "./App.styles.scss";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

function App() {
	return (
		<div className="container">
			<Header />
			<Sidebar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
