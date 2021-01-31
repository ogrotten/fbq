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
		<AppBar>
			<Toolbar className="header">
				<ButtonGroup
					variant="text"
					size="small"
					aria-label="small contained button group"
				>
					<Button>Home</Button>
					<Button>Press</Button>
					<Button>New Hires</Button>
					<Button>About</Button>
				</ButtonGroup>
				<div>
					<h2>Football Queries</h2>
					{/* <p>Doing the dirty work for NFL nerds.</p> */}
				</div>
			</Toolbar>
		</AppBar>
	);
};
