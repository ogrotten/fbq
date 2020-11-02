import React, { Component } from "react";

import { Container, Grid, Header, List, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";



class App extends Component {
	render() {
		return (
			<div style={{width:900, margin:"0 auto"}}>
				<Menu borderless inverted pointing color="blue">
					<Container>
						<Menu.Item header active>
							Home
            			</Menu.Item>
						<Menu.Item>New feature</Menu.Item>
						<Menu.Item>Press</Menu.Item>
						<Menu.Item>New hires</Menu.Item>
						<Menu.Item>About</Menu.Item>
					</Container>
				</Menu>
				<Grid container stackable>
					<Grid.Row>
						<Grid.Column width={4} floated="left">
							<Segment secondary>
								<Header as="h4">About</Header>
								<p>
									Etiam porta <i>sem malesuada magna mollis euismod</i>. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
							</Segment>
							<Header as="h4">Archives</Header>
							<List>
								<List.Item as="a">Septempber 2017</List.Item>
								<List.Item as="a">August 2017</List.Item>
								<List.Item as="a">June 2017</List.Item>
								<List.Item as="a">April 2017</List.Item>
								<List.Item as="a">March 2017</List.Item>
								<List.Item as="a">February 2017</List.Item>
								<List.Item as="a">January 2017</List.Item>
								<List.Item as="a">December 2016</List.Item>
								<List.Item as="a">October 2016</List.Item>
								<List.Item as="a">July 2016</List.Item>
								<List.Item as="a">July 2016</List.Item>
								<List.Item as="a">May 2016</List.Item>
								<List.Item as="a">April 2016</List.Item>
								<List.Item as="a">January 2016</List.Item>
								<List.Item as="a">May 2015</List.Item>
							</List>
							<Header as="h4">Elsewhere</Header>
							<List>
								<List.Item as="a">Github</List.Item>
								<List.Item as="a">Twitter</List.Item>
								<List.Item as="a">Facebook</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={12}>
							<Segment basic>
								<Header as="h1" size="huge">
									<Header.Content>The Semantic-UI Blog</Header.Content>
									<Header.Subheader>
										A simple example of creating a blog with Semantic-UI.
								</Header.Subheader>
								</Header>
							</Segment>
							<Segment>
								<Header size="large" as="h2">
									<Header.Content>Sample blog post</Header.Content>
									<Header.Subheader>
										March 6, 2017 by <a href="#root">Jack</a>
									</Header.Subheader>
								</Header>

								<Header as="h3" size="large">
									Heading</Header>
								<p>
									Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
									auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
									ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
								ac consectetur ac, vestibulum at eros.</p>
								<Header as="h3" size="medium">
									Sub-heading</Header>
								<p>
									Cum sociis natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus.</p>
								<Segment secondary>
									<code>Example code block</code>
								</Segment>
								<p>
									Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
									malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
								commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
								<Header size="medium">Sub-heading</Header>
								<p>
									Cum sociis natoque penatibus et magnis dis parturient montes,
									nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
									consectetur. Etiam porta sem malesuada magna mollis euismod.
									Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet risus.</p>
								<ul>
									<li>
										Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et.</li>
									<li>Donec id elit non mi porta gravida at eget metus.</li>
									<li>Nulla vitae elit libero, a pharetra augue.</li>
								</ul>
								<p>
									Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
								elit libero, a pharetra augue.</p>
								<ol>
									<li>Vestibulum id ligula porta felis euismod semper.</li>
									<li>
										Cum sociis natoque penatibus et magnis dis parturient montes,
									nascetur ridiculus mus.</li>
									<li>
										Maecenas sed diam eget risus varius blandit sit amet non
									magna.</li>
								</ol>
								<p>
									Cras mattis consectetur purus sit amet fermentum. Sed posuere
								consectetur est at lobortis.</p>
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
}

export default App;
