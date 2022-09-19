import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'October 2021',
	meta: {
		title: 'Virtual Coffee Newsletter, October 2021',
		description: 'Hacktoberfest is here!',
	},
	date: '2021-10-01',
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
				September was all about getting prepped and powered up for
				Hacktoberfest, and now we're finally here! Time for some success in OSS!
			</p>

			<hr />

			<h2>💞 Community Kindness</h2>
			<p>
				<em>Spotlighting some of the kindness happening in our community.</em>
			</p>
			<blockquote className="blockquote">
				<p className="mb-0">
					"I'm so grateful for everyone here, and I'm so happy to see everyone's
					progression since I joined VC. Love my peeps!"
				</p>
				<footer className="blockquote-footer">NickyT</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"I'm grateful for still nice weather, my family, Virtual Coffee, that
					I got accepted in The Collab Lab cohort, and being part in the process
					of CodeLand ❤"
				</p>
				<footer className="blockquote-footer">Ayu</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Grateful for family, tech community, Virtual Coffee friends, my
					bootcamp cohort, and current (good) health. Life is good."
				</p>
				<footer className="blockquote-footer">Jennifer T.</footer>
			</blockquote>

			<hr />

			<h2 className="my-5">📆 What's happening at Virtual Coffee</h2>

			<h3 className="mb-5 font-italic">September Recap</h3>
			<ul>
				<li>
					Monthly challenge -&gt;{' '}
					<a href="https://virtualcoffee.io/monthlychallenges/sept-2021/">
						Preptember! Gearing up for Hacktoberfest
					</a>
				</li>
				<li>New members: 25 new members</li>
			</ul>

			<h3 className="mb-3 font-italic">October Happenings</h3>

			<h4 className="mt-4">
				💡 Monthly Theme &amp; Challenge:{' '}
				<a href="https://virtualcoffee.io/monthlychallenges/oct-2021/">
					Hacktoberfest! Participate in open source, learn, and have fun!
				</a>
				!
			</h4>
			<p>This month we have three tracks:</p>
			<p>
				Maintainers - They provide issues labeled Hacktoberfest on their
				repository(ies), review the PRs for these issues, and validate and merge
				following the rules of the contest. They also answer the contributors'
				questions.
			</p>
			<p>
				Contributors - They find issues labeled Hacktoberfest they want to
				solve. The goal of the contest is to have 4 PRs validated during the
				month of October.
			</p>
			<p>
				Mentors - They will be paired with a mentee (contributor or maintainer).
				They provide support either on Slack, during a 1:1, a pairing session,
				or whatever works best for the team!
			</p>
			<p>
				We also have a #hacktoberfest-co-working-room open in slack for all of
				our members co-working needs. Special thanks to{' '}
				<a href="https://www.decentology.com/">Decentology</a> for sponsoring
				our Hacktoberfest Initiative.
			</p>

			<h4 className="mt-4">🎙️ Podcasts</h4>
			<p>
				<em>We successfully finished season 3 of the podcast!</em>
			</p>
			<ul>
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
					October 8th 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6908">
						Lunch & Learn: Accessibility Audits: Tools and Tips For Auditing
						Your Work w/ Todd Libby
					</a>
				</li>
			</ul>

			<h2>Member Blogpost Highlights</h2>
			<p>
				<em>Some of our member posts we loved last month!</em>
			</p>
			<ul>
				<li>
					<a href="https://www.freecodecamp.org/news/mvc-architecture-what-is-a-model-view-controller-framework/">
						MVC Architecture – What is a Model View Controller Framework? -
						Jessica Wilkins
					</a>
				</li>
				<li>
					<a href="https://sustained.substack.com/p/no-code-just-the-hard-parts?r=9a6v&utm_campaign=post&utm_medium=web&utm_source=copy">
						No-Code: Just The Hard Parts - Ray Deck
					</a>
				</li>
				<li>
					<a href="https://www.jenkens.dev/blog/leading-first-hackathon/">
						What I learned after leading my first hackathon team - Jen Kennedy
					</a>
				</li>
				<li>
					<a href="https://dev.to/adiatiayu/i-have-been-writing-a-blog-for-10-months-here-is-my-story-401a">
						I Have Been Writing A Blog For 10 Months: Here Is My Story - Ayu
						Adiati
					</a>
				</li>
				<li>
					<a href="https://dev.to/abbeyperini/8-things-i-ve-learned-working-in-a-legacy-codebase-4h6c">
						8 Things I've Learned Working in a Legacy Codebase - Abbey Perini
					</a>
				</li>
			</ul>

			<div className="card my-5 border-primary">
				<div className="card-body">
					<h5 className="card-title text-primary font-italic">Member Wins!</h5>
					<div className="card-text">
						<blockquote className="blockquote">
							<p className="mb-0">
								Ayu, Andrea, and Mandi will be joining the upcoming cohort of
								The Collab Lab.
							</p>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								Cristien got a big shoutout from VP of Product at her company.
							</p>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								Ayu, Jono, Julia, and Dan all helped to make Codeland awesome
								this year!
							</p>
						</blockquote>
					</div>
				</div>
			</div>

			<h2>What our members are up to</h2>
			<ul>
				<li>
					Brian creates amazing events with{' '}
					<a href="https://cfe.dev/">Certified Fresh</a>, which is a friendly
					online meetup for developers. They meet at 1:00 p.m. EDT every other
					Friday and bring access to a ton of high-quality speakers and
					presenters.
				</li>
				<li>
					Shoutout to all our members who are working on Hacktoberfest
					submissions this year as part of our{' '}
					<a href="https://virtualcoffee.io/monthlychallenges/oct-2021/">
						monthly challenge
					</a>
					.
				</li>
				<li>Ray Deck is continuing his amazing work with CodeMentor!</li>
				<li>
					Nick Taylor has been doing an amazing job streaming with{' '}
					<a href="https://www.twitch.tv/thepracticaldev">Dev.to</a>.
				</li>
			</ul>

			<h3>Open Source Projects We Love!</h3>
			<ul>
				<li>
					<a href="https://github.com/Virtual-Coffee/virtualcoffee.io/issues">
						VirtualCoffee.io
					</a>
					, an 11ty Web App for our community created by Dan Ott - Our very own
					site!
				</li>
				<li>
					<a href="https://protege.dev/">Protege.dev</a>, a React Web App to
					help junior devs find remote jobs by Drew Clements.
				</li>
				<li>
					<a href="https://github.com/drone/drone">DRONE</a> - a Continuous
					Delivery system built on container technology.
				</li>
				<li>
					<a href="https://github.com/dominicduffin1/python-turtle-art-canvas">
						Python Turtle Art Canvas
					</a>{' '}
					- The aim of this project is to create a collaborative piece of
					creative coding using Python Turtle Graphics.
				</li>
				<li>
					<a href="https://jesscss.github.io/">JESS CSS</a> - a CSS
					pre-processor that compiles to Javascript!
				</li>
				<li>
					<a href="https://github.com/stepzen-samples/stepzen-spacex-graphql">
						Stepzen SpaceX GraphQL
					</a>{' '}
					- This repository is a React app with a StepZen SpaceX endpoint
					consumed using Apollo. It currently displays data from the SpaceX API.
				</li>
				<li>
					<a href="https://github.com/tkshill/Quarto">Quarto</a> - An
					implementation of the Quarto boardgame using Elm and Netlify. An
					exploration of game development, oss, build automation, accessiblity,
					and machine learning.
				</li>
				<li>
					<a href="https://github.com/bacloud14/Classified-ads-48">
						Classified Ads 48
					</a>{' '}
					- A lightweight classified-ads web-app with maps. NodeJS + Leaflet 🗺️
					+ MongoDB 💽.
				</li>
				<li>
					<a href="https://github.com/forem/forem">Forem</a> - Forem is open
					source software for building communities.
				</li>
				<li>
					<a href="https://github.com/open-sauced/open-sauced">Open Sauced</a> -
					Open Sauced provides structured onboarding for new contributors to
					open source. This structure provides a way to track your next
					contributions by leveraging a unique dashboard built on top of the
					GitHub GraphQL API.
				</li>
				<li>
					<a href="https://github.com/BekahHW/postpartum-wellness-app">
						Postpartum Wellness App
					</a>{' '}
					- A React Native app to help moms monitor their well-being during the
					post-partum stage.
				</li>
			</ul>
		</>
	);
}
