import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'November 2021',
	meta: {
		title: 'Virtual Coffee Newsletter, November 2021',
		description: 'Get ready to write!',
	},
	date: '2021-11-01',
};

export async function loader() {
	const { title, description } = handle.meta;
	return json({
		meta: createMetaData({ title, description }),
	});
}

export function meta({ data: { meta } = {} } = {}) {
	return meta;
}

export default function Issue() {
	return (
		<>
			<h2>Hey friends!</h2>

			<p className="lead">
				Year two of the Virtual Coffee Hacktoberfest Initiative was a resounding
				success, and we're very excited to celebrate ONE YEAR of monthly
				challenges!
			</p>

			<hr />

			<h2>💞 Community Kindness</h2>
			<p>
				<em>Spotlighting some of the kindness happening in our community.</em>
			</p>
			<blockquote className="blockquote">
				<p className="mb-0">
					"So grateful for this community!! I dove into hacktoberfest got the
					support and community I was searching for and knew I need with yall!
					Now because of that, I'm gonna be speaking at an IBM program!! I'm
					adding this to my resume, I'm so proud hahaha"
				</p>
				<footer className="blockquote-footer">Sadie</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"You know what I'm thankful for the VC community. I hardly make it to
					any meetings as work gets in the way, but I read every message and
					listen to the podcasts and feel I know y'all anyway!!"
				</p>
				<footer className="blockquote-footer">Viccy</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Grateful for VC! Grateful for Courtney L as a brilliant hacktoberfest
					mentor and nickytonline for helping me navigate forem stuff. Also
					grateful for David Alpert for helping me unstuck and explaining git
					concepts really well"
				</p>
				<footer className="blockquote-footer">Cristien</footer>
			</blockquote>

			<hr />

			<h2 className="my-5">📆 What's happening at Virtual Coffee</h2>

			<h3 className="font-italic">October Recap</h3>
			<ul className="mb-5">
				<li>
					Monthly challenge -&gt;{' '}
					<a href="https://virtualcoffee.io/monthlychallenges/oct-2021/">
						Month of Hacktoberfest
					</a>
				</li>
				<li>New members: 25 new members</li>
			</ul>

			<h3 className="mb-3 font-italic">November Happenings</h3>

			<h4 className="mt-4">
				💡 Monthly Theme &amp; Challenge:{' '}
				<a href="https://virtualcoffee.io/monthlychallenges/nov-2021/">
					Month of Blogging
				</a>
				!
			</h4>
			<p>
				This month we're working together to blog 50,000 words! Based off the{' '}
				<a href="https://nanowrimo.org/">
					NanWriMo (National Novel Writing Month) Challenge
				</a>
				, we'll be doing the tech take on writing and working together towards
				the goal while posting on our own blogs.
			</p>

			<h4 className="mt-4">🎙️ Podcasts</h4>
			<p>
				<em>Season 4 of the podcast is here!</em>
			</p>
			<ul>
				<li>
					<a href="https://virtualcoffee.io/podcast/0404-mark-noonan/">
						Mark Noonan - Civic tech, accessibility, holding the door open for
						other career changers
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0403-jennifer-konikowski/">
						Jennifer Konikowski - Hot Takes on Being a Woman in Tech
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0402-todd-libby/">
						Todd Libby - Making the web equal and accessible
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0401-jessi-shakarian/">
						Jessi Shakarian - You aren't your tech stack: sharing your passion
					</a>
				</li>
			</ul>

			<h4 className="mt-4">🥪 Member Events</h4>
			<p>
				<em>These are members-only events that last for 45 - 90 minutes.</em>
			</p>
			<ul>
				<li>
					Nov 12, 2021, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/7243">
						Lunch & Learn: Getting Started with GraphQL , The How and Why w/
						Lucia Cerchie
					</a>
				</li>
				<li>
					Nov 19, 2021, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/8001">
						Web 0.1 - Real Dinosaurs Use FTP! w/ Justin Noel
					</a>
				</li>
			</ul>

			<h2>Member Blogpost Highlights</h2>
			<p>
				<em>Some of our member posts we loved in October</em>
			</p>
			<ul>
				<li>
					<a href="https://jshakarian.medium.com/i-cant-find-what-i-m-looking-for-why-taxonomy-is-critical-for-your-site-116e862fd583">
						I Can’t Find What I’m Looking For: Why Taxonomy Is Critical For Your
						Site - Jessi Shakarian
					</a>
				</li>
				<li>
					<a href="https://dev.to/mtfoley/a-righteous-pr-3404">
						A righteous PR - Matt Foley
					</a>
				</li>
				<li>
					<a href="https://dev.to/nickytonline/i-built-my-first-dapp-3pbm">
						I built my first dApp! - Nick Taylor
					</a>
				</li>
				<li>
					<a href="https://www.jenkens.dev/blog/retiring-a-side-project/">
						Retiring your side projects - Jen Kennedy
					</a>
				</li>
				<li>
					<a href="https://dev.to/jarvisscript/css-halloween-the-code-is-sus-3of">
						CSS Halloween: The Code is Sus. - Chris Jarvis
					</a>
				</li>
			</ul>

			<div className="card my-5 border-primary">
				<div className="card-body">
					<h5 className="card-title text-primary font-italic">Member Wins</h5>
					<div className="card-text">
						<blockquote className="blockquote">
							<p className="mb-0">
								"WIN: I was interviewed this morning for my 1st tech podcast
								talking about my journey into tech and was able to highlight
								this amazing community!!"
							</p>
							<footer className="blockquote-footer">Maeling</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"I had my fourth HacktoberFest PR approved yesterday. ThisDot
								lab retweeted my tweet about it. The last PR was for them. I've
								almost finished another CSS Halloween build, Now I'll write the
								blog and maybe make alterations. I find stuff to fix while I
								write."
							</p>
							<footer className="blockquote-footer">Chris J.</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"WIN: paired with Raphael Rafatpanah to get my four
								Hacktoberfest PRs merged! It’s my first Hacktoberfest and happy
								to contribute finally!"
							</p>
							<footer className="blockquote-footer">Maria L.</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"WIN: Finished talk for Web Directions AAA and sent all my files
								in for the talk. Now to wait for the conference."
							</p>
							<footer className="blockquote-footer">Todd L.</footer>
						</blockquote>
					</div>
				</div>
			</div>

			<h2>What our members are up to</h2>
			<p>
				We devoted so much of our month to open source contributions, we wanted
				to take the time to congratulate all of our members on their hardwork
				this year. We had about 80 pull requests merged into Virtual Coffee, 85
				members sign up for our Hacktoberfest Initiative, at least 8 of our
				members were active maintainers, 23 of our members were official
				mentors, and Aurelie Verrot and Andrew Bush lead our monthly challenge
				team! Thank you for all your involvement!
			</p>

			<h3>Open Source Projects</h3>
			<ul>
				<li>
					<a href="https://github.com/Virtual-Coffee/virtualcoffee.io/issues">
						VirtualCoffee.io
					</a>
					, an 11ty Web App for our community created by Dan Ott
				</li>
				<li>
					<a href="https://protege.dev/">Protege.dev</a>, a React Web App to
					help junior devs find remote jobs by Drew Clements
				</li>
				<li>
					<a href="https://github.com/drone/drone">DRONE</a> - a Continuous
					Delivery system built on container technology
				</li>
				<li>
					<a href="https://jesscss.github.io/">JESS CSS</a> - a CSS
					pre-processor that compiles to Javascript!
				</li>
			</ul>
		</>
	);
}
