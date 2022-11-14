import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import stylesheet from 'public/styles/app.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'typesth',
	viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
	{ type: 'image/png', rel: 'icon', href: '/favicon.png' },
];

export default function App() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<html lang="en" data-theme="lofi">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
