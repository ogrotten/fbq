import React from "react";

import {
	Button,
	ButtonGroup,
	Card,
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

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<h3>Queries</h3>
			<ul>
				<li>Feature One</li>
				<li>Second Thing</li>
				<li>One More</li>
			</ul>
			<h3>Elsewhere</h3>
			<ul>
				<li>Reddit</li>
				<li>Twitter</li>
				<li>Facebook</li>
			</ul>
		</div>
	);
};
