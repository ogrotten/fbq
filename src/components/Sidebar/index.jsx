import React from "react";

import { Link } from "@material-ui/core";

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<h3>Queries</h3>
			<ul>
				<li>
					<Link>Feature One</Link>
				</li>
				<li>
					<Link>Second Thing</Link>
				</li>
				<li>
					<Link>One More</Link>
				</li>
			</ul>
			<h3>Elsewhere</h3>
			<ul>
				<li>
					<Link>Reddit</Link>
				</li>
				<li>
					<Link>Twitter</Link>
				</li>
				<li>
					<Link>Facebook</Link>
				</li>
			</ul>
		</div>
	);
};
