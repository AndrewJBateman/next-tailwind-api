import Link from 'next/link';

const Navbar = () => {
	const links = [
		{ href: '/', label: 'home' },
		{ href: '/news/1', label: 'news' },
		{ href: '/datalist', label: 'data' },
		{ href: '/about', label: 'about' },
		{ href: 'https://github.com/AndrewJBateman', label: 'Github' },
	];

	return (
		<nav>
			<ul className="flex flex-row content-center justify-between w-4/5 mx-auto font-sans text-center shadow sm:items-baseline">
				{links.map(({ href, label }) => (
					<li
						key={`${href}${label}`}
						className="list-none pointer-events-auto p-0 m-0"
					>
						<Link href={href}>
							<a className="underline">{label.toLowerCase()}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar