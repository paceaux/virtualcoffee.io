import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'August 2021',
	meta: {
		title: 'Virtual Coffee Newsletter, August 2021',
		description: "What we're up to in August: Health and Self Care ✨",
	},
	date: '2021-08-01',
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
				We did some great work in July with Demo Days, but now it's time to
				reflect, regroup, and recharge in August.
			</p>

			<hr />

			<h2>💞 Community Kindness</h2>
			<p>
				<em>Spotlighting some of the kindness happening in our community.</em>
			</p>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Rahat, Meg, Rafi, thanks for the tips, you are the best!!!"
				</p>
				<footer className="blockquote-footer">Sophia</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Special thanks to Nick for boosting my mood up."
				</p>
				<footer className="blockquote-footer">Ayu</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"I am grateful for some peace and quiet away from school work, for new
					and interesting things that I will do with the VC community. Things I
					never would have thought I'd do."
				</p>
				<footer className="blockquote-footer">Taiwo</footer>
			</blockquote>

			<hr />

			<h2 className="my-5">📆 What's happening at Virtual Coffee</h2>

			<h3 className="mb-5 font-italic">July Recap</h3>
			<ul>
				<li>
					Monthly challenge -&gt;{' '}
					<a href="https://virtualcoffee.io/monthlychallenges/july-2021/">
						Month of Demo in Public
					</a>
				</li>
				<li>New members: 38 new members</li>
			</ul>

			<h3 className="mb-3 font-italic">August Happenings</h3>

			<h4 className="mt-4">
				💡 Monthly Theme &amp; Challenge:{' '}
				<a href="https://virtualcoffee.io/monthlychallenges/aug-2021/">
					Month of Healthy Habits!
				</a>
				!
			</h4>
			<p>
				This month's challenge is all about nourishing our bodies, minds, and
				spirits so that we can become healthier developers.
			</p>

			<h4 className="mt-4">🎙️ Podcasts</h4>
			<p>
				<em>Season 3 of the podcast has started off strong!</em>
			</p>
			<ul>
				<li>
					<a href="https://virtualcoffee.io/podcast/0301-jono-yeong/">
						Jono Yeong - Digital Gardening and Tim Tams
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0302-abbey-perini/">
						Abbey Perini - Finding Confidence and Opportunities
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0303-ayu-adiati/">
						Ayu Adiati - Working through burnout as a self-taught developer
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0304-joan-marie-verba/">
						Joan Marie Verba - Keeping hope through decades of challenges
					</a>
				</li>
			</ul>

			<h4 className="mt-4">🥪 Brownbags and Workshops</h4>
			<p>
				<em>These are members-only events that last for 45 - 90 minutes.</em>
			</p>
			<ul>
				<li>
					August 6th, 2021 - 12:00 P.M. EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6277">
						Brownbag: A Snake's Eye View of Python with Julia Seidman
					</a>
				</li>
				<li>
					August 20, 2021, 12:00 PM EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6023">
						Brownbag Session: Chess & AI - The Canary in the Coalmine of
						Technology w/ Jessi S.
					</a>
				</li>
			</ul>

			<h2>Member Blogpost Highlights</h2>
			<p>
				<em>Some of our member posts we loved in July</em>
			</p>
			<ul>
				<li>
					<a href="https://css-tricks.com/a-step-by-step-process-for-turning-designs-into-code/">
						A Step by Step Process for Turning Designs Into Code - Mark Noonan
					</a>
				</li>
				<li>
					<a href="https://shift.infinite.red/magic-arrow-puzzle-3d-geometry-50fa2844d65?gi=8c00f6a63cff">
						Magic Arrow Puzzle 3D-Geometry - Gant Laborde
					</a>
				</li>
				<li>
					<a href="https://dev.to/nickytonline/getting-started-with-regular-expressions-11dg">
						Getting Started With Regular Expressions - Nick Taylor
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/pulse/crm-jobseekers-best-friend-daniel-anderson">
						A CRM is a Job-Seeker's best friend - Daniel Anderson
					</a>
				</li>
			</ul>

			<div className="card my-5 border-primary">
				<div className="card-body">
					<h5 className="card-title text-primary font-italic">Slack Love</h5>
					<div className="card-text">
						<blockquote className="blockquote">
							<p className="mb-0">
								"I am so so so grateful for this community always having my back
								and hyping me up. It feels so nice to know there are people in
								my corner and rooting for me. It means so much!"
							</p>
							<footer className="blockquote-footer">Marie</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"I'm super grateful to Roger for helping me troubleshoot my
								Heroku deployment issues yesterday. After some rest, I was able
								to implement his advice and was able to successfully deploy my
								site with a working database!"
							</p>
							<footer className="blockquote-footer">Maeling</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"Hey y'all! I didn't have the chance to attend the latest VC
								meetings. Still, I'd like to thank you all for being such a
								great community. Even lurking around here on Slack gives me a
								lot of joy. Bestest community evaaar."
							</p>
							<footer className="blockquote-footer">Sophia</footer>
						</blockquote>
					</div>
				</div>
			</div>

			<h2>What our members are up to</h2>
			<ul>
				<li>
					A huge thank you to Andrew Bush for his amazing job in spearheading
					the Month of Demo in July, continuing from the amazing work from June.
				</li>
				<li>
					Thank you to Julia Seidman for doing an incredible job leading this
					month's mock technical interviews.
				</li>
				<li>
					Shoutout to Marie Antons for starting his streaming journey with Drone
				</li>
				<li>
					Kudos to Roger Gentry and Justin Lane for both releasing their apps in
					the Apple store!
				</li>
				<li>
					Shoutout to Aurelie for co-organizing and presenting at our Moms in
					Tech meetup!
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
