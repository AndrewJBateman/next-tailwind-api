import Link from 'next/link';

const Navbar = () => {
	const links = [
		{ href: '/', label: 'home' },
		{ href: '/news/1', label: 'news' },
		{ href: '/datalist', label: 'data' },
		{ href: '/about', label: 'about' },
	];

	return (
		<nav>
			<ul className="flex flex-row content-center justify-between w-4/5 mx-auto font-sans text-center shadow sm:items-baseline">
				{links.map(({ href, label }) => (
					<li
						key={`${href}${label}`}
						className="p-0 m-0 list-none pointer-events-auto"
					>
						<Link href={href} aria={label}>
							<a className="text-blue-800">{label}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar