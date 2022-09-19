import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'July 2021',
	meta: {
		title: 'Virtual Coffee Newsletter, July 2021',
		description: "What we're up to in July: Demoing in Public ✨",
	},
	date: '2021-07-01',
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
				June was great for learning in public and we're carrying that energy
				into July by demoing all the amazing things we've done!
			</p>

			<hr />

			<h2>💞 Community Kindness</h2>
			<p>
				<em>Spotlighting some of the kindness happening in our community.</em>
			</p>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Huggggeeee thank you to Mike Rogers today, whose package of British
					treats kept me full during an intensely packed day."
				</p>
				<footer className="blockquote-footer">Bekah</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Grateful to Andrew for supporting me on hosting the
					building-in-public standups. Thank you!"
				</p>
				<footer className="blockquote-footer">Vanessa</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Grateful for Kirk, Abbey and Justin helping me in the standup
					yesterday. And Abbey for going the extra mile by having everyone help
					me figure things out."
				</p>
				<footer className="blockquote-footer">Debra-Kaye</footer>
			</blockquote>

			<hr />

			<h2 className="my-5">📆 What's happening at Virtual Coffee</h2>

			<h3 className="mb-5 font-italic">June Recap</h3>
			<ul>
				<li>
					Monthly challenge -&gt;{' '}
					<a href="https://virtualcoffee.io/monthlychallenges/june-2021/">
						Month of Learn in Public
					</a>
				</li>
				<li>New members: 27 new members</li>
			</ul>

			<h3 className="mb-3 font-italic">July Happenings</h3>

			<h4 className="mt-4">
				💡 Monthly Theme &amp; Challenge:{' '}
				<a href="https://virtualcoffee.io/monthlychallenges/july-2021/">
					Month of Demos
				</a>
				!
			</h4>
			<p>
				This month we're all about demoing in public. The idea is to learn to
				communicate around a project as you demo it, show the finished product
				or parts, gain confidence, and learn to be proud of any progress made.
				We'll be weekly check-ins with designated Demo Days where folks can
				share!
			</p>

			<h4 className="mt-4">🎙️ Podcasts</h4>
			<p>
				<em>We successfully finished season 2 of the podcast!</em>
			</p>
			<ul>
				<li>
					<a href="https://virtualcoffee.io/podcast/0209-season-two-wrapup/">
						Season Two Wrap-Up: Code and Community
					</a>
				</li>
			</ul>

			<h4 className="mt-4">🥪 Brownbags and Workshops</h4>
			<p>
				<em>These are members-only events that last for 45 - 90 minutes.</em>
			</p>
			<ul>
				<li>
					Jul 7, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6371">
						Call for Proposals (CFP) Workshop
					</a>
				</li>
				<li>
					Jul 16, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6078">
						Brownbag Session: Building a Chrome extension w/ Courtney L.
					</a>
				</li>
				<li>
					Jul 23, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6276">
						Brownbag: Introduction to Redis for Application Developers with
						Simon Prickett
					</a>
				</li>
				<li>
					Jul 26, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6370">
						Moms In Tech Meetup! hosted by Aurelie V. and Bekah H.W.
					</a>
				</li>
				<li>
					Jul 30, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6279">
						Brownbag: Security and Compliance 101 with Roger Gentry
					</a>
				</li>
			</ul>

			<h2>Member Blogpost Highlights</h2>
			<p>
				<em>Some of our member posts we loved in June</em>
			</p>
			<ul>
				<li>
					<a href="https://sustainedventures.com/essays/in-praise-of-small-online-meetups">
						In Praise of Small Online Meet-ups - Ray Deck
					</a>
				</li>
				<li>
					<a href="https://www.jonathanyeong.com/garden/the-ancestral-hall-of-side-projects/">
						The Ancestral Hall of Side Projects - Jonathan Yeong
					</a>
				</li>
				<li>
					<a href="https://dev.to/rafi993/optimizing-pull-request-for-developer-happiness-1gj2">
						Optimizing Pull Request for Developer Happiness - Mohamed Rafi
					</a>
				</li>
				<li>
					<a href="https://dev.to/sophiabrandt/notes-on-ramping-up-at-your-first-developer-job-74j">
						Notes on "Ramping Up At Your First Developer Job" - Sophia Brandt
					</a>
				</li>
			</ul>

			<div className="card my-5 border-primary">
				<div className="card-body">
					<h5 className="card-title text-primary font-italic">Slack Love</h5>
					<div className="card-text">
						<blockquote className="blockquote">
							<p className="mb-0">
								"I just want to say that I'm so thankful to know so many amazing
								people here. Thank you for being awesome and caring and patient,
								and for helping me to grow."
							</p>
							<footer className="blockquote-footer">Bekah</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"I’m grateful for VC and a safe place to share without fear.
								Thankful for my new job and new teammates. Because of VC, I now
								ask icebreaker questions at our monthly lunches which makes
								things less awkward. (They didn't seem to do lunches together
								much before I started)"
							</p>
							<footer className="blockquote-footer">Kenny</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"I am grateful that I decided to finally join VC! It has
								seriously helped my motivation."
							</p>
							<footer className="blockquote-footer">Holly</footer>
						</blockquote>
					</div>
				</div>
			</div>

			<h2>What our members are up to</h2>

			<p>
				Virtual Coffee is partnering up with{' '}
				<a href="https://cfe.dev/">Certified Fresh</a>, which is a friendly
				online meetup for developers. They meet at 1:00 p.m. EDT every other
				Thursday and bring access to a ton of high-quality speakers and
				presenters.
			</p>
			<ul>
				<li>
					A big thank you to Andrew Bush for his amazing job in spearheading the
					Month of Learn in Public challenge in June!
				</li>
				<li>
					Nick Taylor is doing weekly{' '}
					<a href="https://www.twitch.tv/nickytonline/">Javascript Hours</a>{' '}
					where he streams his progress through learning JS.
				</li>
				<li>
					Shoutout to all the members who started new jobs this month! We wish
					you all the success in your new roles.
				</li>
			</ul>

			<h3>Open Source Projects We Love!</h3>
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
