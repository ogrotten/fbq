import React from 'react'

import {
	Button,
	Container,
	Divider,
	Grid,
	List, ListItem,
	Menu,
	// Segment,
	Table, TableHead, TableBody, TableCell, TableRow,
	Typography,
} from "@material-ui/core";

function App() {
	const stat = JSON.parse('{ "status": "OK", "payload": [{ "rank": 1, "season": 2015, "team": "Carolina Panthers", "record": "15-1" }, { "rank": 2, "season": 2011, "team": "Green Bay Packers", "record": "15-1" }, { "rank": 3, "season": 2004, "team": "Pittsburgh Steelers", "record": "15-1" }, { "rank": 4, "season": 1998, "team": "Minnesota Vikings", "record": "15-1" }, { "rank": 5, "season": 1985, "team": "Chicago Bears", "record": "15-1" }, { "rank": 6, "season": 1984, "team": "San Francisco 49ers", "record": "15-1" }, { "rank": 7, "season": 1976, "team": "Las Vegas Raiders", "record": "15-1" }, { "rank": 8, "season": 1968, "team": "Indianapolis Colts", "record": "15-1" }] }')
	const { status, payload } = stat

	return (
		<div>
			<div>
				<div>
					<div>Home</div>
					<div>New feature</div>
					<div>Press</div>
					<div>New hires</div>
					<div>About</div>
					<div>
						<h2>Football Queries</h2>
					</div>
				</div>
				<Divider />
			</div>
			<div>
				<div>
					{/* Left Sidebar */}
					<div>
						<Typography as="h4">Queries</Typography>
						<List>
							<ListItem>Feature One</ListItem>
							<ListItem>Second Thing</ListItem>
							<ListItem>One More</ListItem>
						</List>
						<Typography as="h4">Elsewhere</Typography>
						<List>
							<ListItem>Reddit</ListItem>
							<ListItem>Twitter</ListItem>
							<ListItem>Facebook</ListItem>
						</List>
					</div>

					{/* Main */}
					<div>
						{/* Main Title */}
						{/* <Segment basic>
							<Header as="h1" size="huge">
								<Header.Content></Header.Content>
								<Header.Subheader>
									Doing the dirty work for NFL nerds.
								</Header.Subheader>
							</Header>
						</Segment> */}

						{/* Main Content */}
						<div>
							<div>
								<h3>Team Record Search</h3>
								<Button.Group basic
									buttons={["Team Record", "Team Record Streaks", "Team Record Counts"]}
								/>
							</div>
							<h4>Rest of the form goes in here.</h4>
						</div>
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
											<TableCell collapsing>{line.season}</TableCell>
											<TableCell collapsing>{line.record}</TableCell>
											<TableCell selectable collapsing>{line.team}</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>

					</div>
				</div>
			</div>
			<div>
				<Container>
					<p>Copyright 2020 footballqueries.com</p>
					<a href="#root">Back to top</a>
				</Container>
			</div>
		</div>
	);
}

export default App;
