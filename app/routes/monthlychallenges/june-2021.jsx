import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';

export const handle = {
	listTitle: 'June, 2021: Build in Public',
	meta: {
		title: 'Monthly Theme & Challenge for June, 2021: Build in Public',
		description:
			'June challenge -> Working on building a habit to build in public, show our growth, and be proud of our progress',
	},
	date: '2021-06-01',
	hero: {
		heroHeader: '',
	},
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

export default function Challenge() {
	return (
		<>
			<div className="alert alert-success">
				This monthly challenge is complete. Congratulations! Please join us for
				the <a href="/monthlychallenges/">next challenge</a>!
			</div>

			<h1>
				<small>Monthly Challenge for June, 2021:</small> Let's build in public,
				starting with Daily Standup!
			</h1>

			<p className="lead">
				During this month, let's learn to communicate what we're working on,
				show our development, and be confident and proud of any progress made.
			</p>

			<hr />

			<h2>Theme</h2>
			<p>Let's build in public, starting with Daily Standup!</p>

			<h2>Goals</h2>
			<p>To end the month with:</p>
			<ul>
				<li>A habit of talking about the things we're working on.</li>
				<li>A plan for continuing progress.</li>
				<li>Feeling more comfortable sharing.</li>
				<li>Accountability!</li>
			</ul>

			<h3>Who can participate?</h3>
			<p>
				Virtual Coffee's goal is to support all developers, no matter where they
				are in their coding journey. This challenge is opened to non-coding
				projects as well. So if you want to talk about the projects you're doing
				in other areas of your life, we want to hear about it. We encourage all
				members to participate. This challenge can be done alone or in a group.
			</p>

			<h3>How it works</h3>
			<p>
				Share your progress in the #monthly-challenge channel in Slack. We have
				a slack reminder everyday, but feel free to post when you can. Some of
				our monthly-challenge team will also be holding video check-ins, so be
				on the lookout for those announcements!
			</p>

			<p>
				While no other platform is imposed, it can be a good idea to also share
				on social media for more reach but only if you are comfortable to do so
				(Twitter using -or not- the hashtag #buildinpublic, a personal blog, a
				post on DEV.to, etc.).
			</p>

			<p>
				Sharing every time some work is added is a good idea, small progress is
				still progress. You don't need to write a detailed blog post: a 140
				characters Tweet can be enough! For example: "Today I added some
				styling. I used Bootstrap and implemented some cards to display the
				users in the home page".
			</p>

			<h3>What if I need help?</h3>
			<p>
				You can ask a question in the #help-and-pairing VC channel, get 1:1 help
				during Office Hours (check #office-hours channel), join the VC
				co-working room, or ask at a coffee! Asking for help is part of the
				process.
			</p>

			<p>
				If you want to take on the challenge, see if you can participate in 15
				standups and create a plan for progress next month!
			</p>
			<p>And remember, we're always here to help ❤️</p>
		</>
	);
}
