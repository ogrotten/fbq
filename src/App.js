import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import {Block} from 'baseui/block'
import { StatefulInput } from 'baseui/input';

import Nav from "./Nav"

import './App.css';

const engine = new Styletron();
const Centered = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
});

const App = () => {
	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<Block as="div" className="container">
					<nav><Nav /></nav>
					{/* <Nav /> */}
					<aside></aside>
					<section></section>
					<footer></footer>
				</Block>
			</BaseProvider>
		</StyletronProvider>
	);
}

export default App;
