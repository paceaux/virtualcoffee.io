import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'September 2021',
	meta: {
		title: 'Virtual Coffee Newsletter, September 2021',
		description: "September is Preptember! Let's talk Open Source!",
	},
	date: '2021-09-01',
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
				August was some time to reflect and recharge our batteries, but now
				we're ready to dive into all things open source!
			</p>

			<hr />

			<h2>💞 Community Kindness</h2>
			<p>
				<em>Spotlighting some of the kindness happening in our community.</em>
			</p>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Grateful to Jennifer for sharing amazing Ruby on Rails learning
					resources"
				</p>
				<footer className="blockquote-footer">Maeling</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Shoutout to Travis and Skyler in the co-working-room for helping me
					understand what was happening in my project."
				</p>
				<footer className="blockquote-footer">Bekah</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Shoutout to Dan for giving my team a big hand with not only{' '}
					<a href="http://forem.com">Forem</a>, but also{' '}
					<a href="http://codelandconf.com">CodeLandConf</a>!"
				</p>
				<footer className="blockquote-footer">Nick</footer>
			</blockquote>

			<hr />

			<h2 className="my-5">📆 What's happening at Virtual Coffee</h2>

			<h3 className="mb-5 font-italic">August Recap</h3>
			<ul>
				<li>
					Monthly challenge -&gt;{' '}
					<a href="https://virtualcoffee.io/monthlychallenges/aug-2021/">
						Month of Healthy Habits
					</a>
				</li>
				<li>New members: 35 new members</li>
			</ul>

			<h3 className="mb-3 font-italic">September Happenings</h3>

			<h4 className="mt-4">
				💡 Monthly Theme &amp; Challenge:{' '}
				<a href="https://virtualcoffee.io/monthlychallenges/sept-2021/">
					Preptember! Open Source Exploration
				</a>
				!
			</h4>
			<p>
				This month's challenge is all about learning about open source, prepping
				our repositories, and writing great issues for contribution.
			</p>

			<h4 className="mt-4">🎙️ Podcasts</h4>
			<p>
				<em>Season 3 of the podcast has started off strong!</em>
			</p>
			<ul>
				<li>
					<a href="https://virtualcoffee.io/podcast/0305-kevin-truong/">
						Kevin Truong - Tech Career Coaching
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0306-ray-deck/">
						Ray Deck - Rubber-Ducking your Life
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0307-mike-rogers/">
						Mike Rogers - Tend Your Career like a Garden
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0308-aurelie-verrot/">
						Aurelie Verrot - Learning and Working Remotely
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0309-season-three-wrap-up/">
						Season 3 Wrap Up: Hacktoberfest is Coming!
					</a>
				</li>
			</ul>

			<h4 className="mt-4">🥪 Member Events</h4>
			<p>
				<em>These are members-only events that last for 45 - 90 minutes.</em>
			</p>
			<ul>
				<li>
					September 10th, 2021 - 12:00 PM EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6907">
						Lunch & Learn: Introduction to Redis for Application Developers w/
						Simon Prickett
					</a>
				</li>
				<li>
					September 17th, 2021, 12:00 PM EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6904">
						Lunch & Learn: How to create an Open Source Software Repository
					</a>
				</li>
				<li>
					September 20th, 2021, 12:30 PM EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6771">
						MinT (Moms in Tech) Meetup
					</a>
				</li>
				<li>
					September 24th, 2021, 12:00 PM EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6905">
						Lunch & Learn: An Intro to Hacktoberfest and Open Source
						Contributions
					</a>
				</li>
				<li>
					October 1st, 2021, 12:00 PM EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/7070">
						Hacktoberfest Kickoff Event
					</a>
				</li>
			</ul>

			<h2>Member Blogpost Highlights</h2>
			<p>
				<em>Some of our member posts we loved in August</em>
			</p>
			<ul>
				<li>
					<a href="https://dev.to/nickytonline/impressions-of-polywork-3pbp">
						First impressions of Polywork as a software engineer - Nick Taylor
					</a>
				</li>
				<li>
					<a href="https://dev.to/abbeyperini/sourcing-images-and-optimizing-them-for-the-web-1j5b">
						Sourcing Images and Optimizing Them for the Web - Abbey Perini
					</a>
				</li>
				<li>
					<a href="https://dev.to/adiatiayu/a-letter-for-you-future-me-56gc">
						A Letter For You, Future Me. - Ayu Adiati
					</a>
				</li>
				<li>
					<a href="https://www.jenniferkonikowski.com/blog/2021/8/26/why-we-should-stop-talking-about-imposter-syndrome-in-tech">
						Why We Should Stop Talking About Imposter Syndrome In Tech -
						Jennifer Konikowski
					</a>
				</li>
			</ul>

			<div className="card my-5 border-primary">
				<div className="card-body">
					<h5 className="card-title text-primary font-italic">Slack Love</h5>
					<div className="card-text">
						<blockquote className="blockquote">
							<p className="mb-0">
								"Grateful for encouraging pairing sessions, generosity of VC
								members when it comes to their time and resources, interviews
								with engineering managers and the loving support of family and
								friends."
							</p>
							<footer className="blockquote-footer">Maeling</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"Grateful for this community and the chance to nerd out about
								things."
							</p>
							<footer className="blockquote-footer">Dan</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"I'm grateful for being able to learn creative coding and for
								this community."
							</p>
							<footer className="blockquote-footer">Om</footer>
						</blockquote>
					</div>
				</div>
			</div>

			<h2>What our members are up to</h2>
			<ul>
				<li>
					Rahat is documenting his journey into{' '}
					<a href="https://anchor.fm/sidechain">learning web3/blockchain</a>.
				</li>
				<li>Chris is leading the VC member guide project.</li>
				<li>
					Jessica has finished version two of the{' '}
					<a href="https://black-excellence-music-project.netlify.app/#/">
						Black Excellence Music Project
					</a>
					.
				</li>
				<li>
					Kudos to Julia Seidman and Jonathan Yeong for their upcoming talks at{' '}
					<a href="https://codelandconf.com/">CodeLandConf</a>.
				</li>
				<li>
					Shoutout to our members for a
					<strong>10 hour and 46 minute long</strong> coworking room session
					this month!
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
					<a href="https://www.npmjs.com/package/isidore">Isidore</a>, Natural
					language processing package by Frank Taylor
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
