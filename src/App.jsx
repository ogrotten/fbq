import React from "react";

import { Container, Grid, Header, List, Menu, Segment, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const { Row, Column } = Grid


const App = () => {
	return (
		<div style={{ width: 900, margin: "0 auto" }}>
			<Container>
				<Menu borderless inverted pointing color="blue">
					<Menu.Item header active>Home</Menu.Item>
					<Menu.Item>New feature</Menu.Item>
					<Menu.Item>Press</Menu.Item>
					<Menu.Item>New hires</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item className="right menu">
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
								<h2>Team Record Search</h2>
							</div>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Segment secondary as="footer">
				<Container textAlign="center">
					<p>
						Blog template built for Semantic-UI by{" "}
						<a href="https://semantic-ui-forest.com">@Semantic-UI-Forest</a>.
            </p>
					<a href="#root">Back to top</a>
				</Container>
			</Segment>
		</div>
	);
}


export default App;
