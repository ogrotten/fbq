import React from "react";

import { Table, Container, Grid, Header, List, Menu, Segment, Divider, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


const App = () => {
	const stat = JSON.parse('{ "status": "OK", "payload": [{ "rank": 1, "season": 2015, "team": "Carolina Panthers", "record": "15-1" }, { "rank": 2, "season": 2011, "team": "Green Bay Packers", "record": "15-1" }, { "rank": 3, "season": 2004, "team": "Pittsburgh Steelers", "record": "15-1" }, { "rank": 4, "season": 1998, "team": "Minnesota Vikings", "record": "15-1" }, { "rank": 5, "season": 1985, "team": "Chicago Bears", "record": "15-1" }, { "rank": 6, "season": 1984, "team": "San Francisco 49ers", "record": "15-1" }, { "rank": 7, "season": 1976, "team": "Las Vegas Raiders", "record": "15-1" }, { "rank": 8, "season": 1968, "team": "Indianapolis Colts", "record": "15-1" }] }')
	const { status, payload } = stat

	return (
		<div style={{ width: 900, margin: "0 auto" }}>
			<Container>
				<Menu borderless inverted pointing color="blue">
					<Menu.Item header active>Home</Menu.Item>
					<Menu.Item>New feature</Menu.Item>
					<Menu.Item>Press</Menu.Item>
					<Menu.Item>New hires</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item position="right">
						<h2>Football Queries</h2>
					</Menu.Item>
				</Menu>
				<Divider hidden />
			</Container>
			<Grid container stackable>
				<Grid.Row>
					{/* Left Sidebar */}
					<Grid.Column width={4} floated="left">
						<Header as="h4">Queries</Header>
						<List>
							<List.Item as="a">Feature One</List.Item>
							<List.Item as="a">Second Thing</List.Item>
							<List.Item as="a">One More</List.Item>
						</List>
						<Header as="h4">Elsewhere</Header>
						<List>
							<List.Item as="a">Reddit</List.Item>
							<List.Item as="a">Twitter</List.Item>
							<List.Item as="a">Facebook</List.Item>
						</List>
					</Grid.Column>

					{/* Main */}
					<Grid.Column width={12}>
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
						<Segment>
							<div size="large" as="h2">
								<h3>Team Record Search</h3>
								<Button.Group basic
									buttons={["Team Record", "Team Record Streaks", "Team Record Counts"]}
								/>
							</div>
							<h4>Rest of the form goes in here.</h4>
						</Segment>
						<Table striped compact="very">
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell width={1}>Season</Table.HeaderCell>
									<Table.HeaderCell width={1}>Record</Table.HeaderCell>
									<Table.HeaderCell>Team</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{payload.map(line => {
									return (
										// <p>{line.team}</p>
										<Table.Row>
											<Table.Cell collapsing>{line.season}</Table.Cell>
											<Table.Cell collapsing>{line.record}</Table.Cell>
											<Table.Cell selectable collapsing>{line.team}</Table.Cell>
										</Table.Row>
									)
								})}
							</Table.Body>
						</Table>

					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Segment secondary as="footer">
				<Container textAlign="center">
					<p>Copyright 2020 footballqueries.com</p>
					<a href="#root">Back to top</a>
				</Container>
			</Segment>
		</div>
	);
}


export default App;
