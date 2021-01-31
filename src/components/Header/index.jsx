import React from "react";

import {
	AppBar,
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
	Toolbar,
	Typography,
} from "@material-ui/core";

export const Header = () => {
	return (
		<AppBar style={{ height: 80 }}>
			<Toolbar className="header">
				<ButtonGroup
					variant="text"
					size="small"
					aria-label="small contained button group"
				>
					<Button style={{ color: "white" }}>Home</Button>
					<Button style={{ color: "white" }}>Press</Button>
					<Button style={{ color: "white" }}>New Hires</Button>
					<Button style={{ color: "white" }}>About</Button>
				</ButtonGroup>
				<div className="logo">
					<h2>Football Queries</h2>
					<p>Doing the dirty work for NFL nerds.</p>
				</div>
			</Toolbar>
		</AppBar>
	);
};
