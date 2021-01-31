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

export const Main = () => {
	const stat = JSON.parse(
		'{ "status": "OK", "payload": [{ "rank": 1, "season": 2015, "team": "Carolina Panthers", "record": "15-1" }, { "rank": 2, "season": 2011, "team": "Green Bay Packers", "record": "15-1" }, { "rank": 3, "season": 2004, "team": "Pittsburgh Steelers", "record": "15-1" }, { "rank": 4, "season": 1998, "team": "Minnesota Vikings", "record": "15-1" }, { "rank": 5, "season": 1985, "team": "Chicago Bears", "record": "15-1" }, { "rank": 6, "season": 1984, "team": "San Francisco 49ers", "record": "15-1" }, { "rank": 7, "season": 1976, "team": "Las Vegas Raiders", "record": "15-1" }, { "rank": 8, "season": 1968, "team": "Indianapolis Colts", "record": "15-1" }] }'
	);
	const { status, payload } = stat;

	return (
		<div className="main">
			{/* Main Content */}
			<div>
				<div>
					<h3>Team Record Search</h3>
					{/* button group <Button.Group basic
									buttons={["Team Record", "Team Record Streaks", "Team Record Counts"]}
								/> */}
					<ButtonGroup
						variant="contained"
						color="primary"
						size="small"
						aria-label="small contained button group"
					>
						<Button>Team Record</Button>
						<Button>Team Record Streaks</Button>
						<Button>Team Record Counts</Button>
					</ButtonGroup>
				</div>
				<h4>Rest of the form goes in here.</h4>
			</div>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell width={1}>Season</TableCell>
							<TableCell width={1}>Record</TableCell>
							<TableCell>Team</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{payload.map((line, idx) => {
							return (
								// <p>{line.team}</p>
								<TableRow key={idx}>
									<TableCell>{line.season}</TableCell>
									<TableCell>{line.record}</TableCell>
									<TableCell>{line.team}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
			<Divider style={{ margin: 36 }} />
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell width={1}>Season</TableCell>
							<TableCell width={1}>Record</TableCell>
							<TableCell>Team</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{payload.map((line, idx) => {
							return (
								// <p>{line.team}</p>
								<TableRow key={idx}>
									<TableCell>{line.season}</TableCell>
									<TableCell>{line.record}</TableCell>
									<TableCell>{line.team}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		</div>
	);
};
