import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'June 2021',
	meta: {
		title: 'Virtual Coffee Newsletter, June 2021',
		description: "What we're up to in June: Learning in Public, together!",
	},
	date: '2021-06-01',
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
				May was great and we're cruising into the middle of the year the Virtual
				Coffee way; supporting each other in doing all the cool things.
			</p>

			<hr />

			<h2>💞 Community Kindness</h2>
			<p>
				<em>Spotlighting some of the kindness happening in our community. </em>
			</p>
			<blockquote className="blockquote">
				<p className="mb-0">
					"I'm grateful to Marie, Joshua, Ryan, Daniel and others who shared
					their job search stories this week with such frankness and
					vulnerability. You make this dark art less mysterious by sharing your
					stories, and show us all the definition of resilience. This is an
					amazing community!"
				</p>
				<footer className="blockquote-footer">Ray</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Really grateful for Kirk for being my accountability partner and
					letting me know when too much is too much. For Ray and his humor in
					the #co-working-room. Julia, Karen, Andrew for being cool project
					partners 💕 Glen for always listening to me being the chatterbox I am
					in the coworking room 😅😂"
				</p>
				<footer className="blockquote-footer">Marie</footer>
			</blockquote>
			<blockquote className="blockquote">
				<p className="mb-0">
					"Wanted to give a shoutout to Meg, Mike, and Nick for giving me
					feedback on my personal site redesign last night!!"
				</p>
				<footer className="blockquote-footer">Jono</footer>
			</blockquote>

			<hr />

			<h2 className="my-5">📆 What's happening at Virtual Coffee</h2>

			<h3 className="mb-5 font-italic">May Recap</h3>
			<ul>
				<li>
					Monthly challenge -&gt;{' '}
					<a href="https://virtualcoffee.io/monthlychallenges/may-2021/">
						Month of Feedback
					</a>
				</li>
				<li>New members: 15 new members</li>
			</ul>

			<h3 className="mb-3 font-italic">June Happenings</h3>

			<h4 className="mt-4">
				💡 Monthly Theme &amp; Challenge:{' '}
				<a href="https://virtualcoffee.io/monthlychallenges/june-2021/">
					Month of Learning in Public
				</a>
				!
			</h4>
			<p>
				Sometimes the best motivation is to get things done, and sometimes the
				best way to get your progress noticed is by communicating it to the
				world! This month, we're building a habit of being vocal about our
				training, tribulations, and triumphs by learning in public. Members are
				encouraged to share progress on their current projects in public forums
				and social media, in the VC slack and daily standups, or both!
			</p>

			<h4 className="mt-4">🎙️ Podcasts</h4>
			<p>
				<em>The second half of Season Two has dropped!</em>
			</p>
			<ul>
				<li>
					<a href="https://virtualcoffee.io/podcast/0205-tom-cudd/">
						Tom Cudd - Psychological Safety and DevOps
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0206-courtney-landau/">
						Courtney Landau - On Being Quiet in a Loud Tech World
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0207-nerando-johnson/">
						Nerando Johnson - Keeping Momentum, Community, and Socialization as
						a Service
					</a>
				</li>
				<li>
					<a href="https://virtualcoffee.io/podcast/0208-sara-mccombs/">
						Sara McCombs - Learning to Leverage your Past Experience and Embrace
						Your Whole Self
					</a>
				</li>
			</ul>

			<h4 className="mt-4">🥪 Brownbags</h4>
			<ul>
				<li>
					Jun 4, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6228">
						Brownbag: Building a Portfolio and Network with Civic Tech,
						presented by Mark Noonan -- a members-only event
					</a>
				</li>
				<li>
					Jun 11, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/5796">
						Brownbag: A Snake's Eye View of Python -- A members-only event,
						presented by Julia Seidman
					</a>
				</li>
				<li>
					Jun 18, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6025">
						Brownbag: Taking notes w/ Rafi-- A members-only event
					</a>
				</li>
				<li>
					Jun 25, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/5932">
						Brownbag: Resilient Job Searching with Todd Libby -- a VC
						members-only event
					</a>
				</li>
				<li>
					Jun 28, 12:00pm EDT:{' '}
					<a href="https://meetingplace.io/virtual-coffee/events/6024">
						Brownbag Session: Starting your first C# project w/ Marie A. -- a
						members' only event
					</a>
				</li>
			</ul>

			<h2>Member Blogpost Highlights</h2>
			<p>
				<em>Some of our member posts we loved in May</em>
			</p>
			<ul>
				<li>
					<a href="https://uxdesign.cc/systems-thinking-chess-when-the-iceberg-model-has-64-squares-652c3f70ccf">
						Systems thinking &amp; chess: When the iceberg model has 64 squares
						- Jessi Sharkarian
					</a>
				</li>
				<li>
					<a href="https://www.hellosign.com/blog/building-a-white-labeled-esignature-flow-using-django-and-the-hellosign-api">
						Building a White Labeled eSignature Flow using Django and HelloSign
						API - Julia Seidman
					</a>
				</li>
				<li>
					<a href="https://dev.to/clgolden/upping-my-accessibility-skills-5h0a">
						Updating My Accessibility Skills - Christine Goldon
					</a>
				</li>
				<li>
					<a href="https://dev.to/adiatiayu/tips-for-writing-good-alt-text-in-html-1hf2">
						Tips for Writing Good Alt Text in Html - Ayu Adiati
					</a>
				</li>
			</ul>

			<div className="card my-5 border-primary">
				<div className="card-body">
					<h5 className="card-title text-primary font-italic">Slack Love</h5>
					<div className="card-text">
						<blockquote className="blockquote">
							<p className="mb-0">
								"I want to say a HUGE ‘thank you’ to everyone who kept me
								company after my dental work. I’m so overjoyed at the support
								and love this community shows to its members. Thank you for
								everyone that distracted me. "
							</p>
							<footer className="blockquote-footer">Sara</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"I feel so privileged to be part of this community. You all made
								me believe that I could do it, that I belong here Thank you,
								thank you"
							</p>
							<footer className="blockquote-footer">Vanessa</footer>
						</blockquote>
						<blockquote className="blockquote">
							<p className="mb-0">
								"I am thankful for my friends at VC, upcoming revisions on my
								resume and portfolio site, decreased stress and anxiety,
								beautiful weather, new opportunities."
							</p>
							<footer className="blockquote-footer">Seth</footer>
						</blockquote>
					</div>
				</div>
			</div>

			<h2>What our members are up to</h2>

			<p>
				We had our first conference partnership with{' '}
				<a href="https://magnoliajs.com/">MagnoliaJS</a> and it was a huge
				success!
			</p>
			<ul>
				<li>
					Shoutout to our members Kayla Sween and Gant Laborde for being part of
					the organizing team of such an incredible event
				</li>
				<li>
					Cheers to all the members who gave talks at the event, including Sara
					McCombs, Bekah Hawrot Weigel, and Gant Laborde.
				</li>
				<li>
					Thank you to all the members who attended and participated. Your
					attendance truly made the event a success. Extra cheers for Mark
					Noonan and Ghameerah McCullers who won prizes!
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
					<a href="https://github.com/BekahHW/postpartum-wellness-app">
						Postpartum Wellness App
					</a>
					, a React Native project by BekahHW
				</li>
			</ul>
		</>
	);
}
