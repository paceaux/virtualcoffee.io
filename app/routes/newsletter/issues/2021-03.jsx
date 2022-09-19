import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'March 2021',
	meta: {
		title: 'Virtual Coffee Newsletter, March 2021',
		description:
			"Our community was on 🔥 in February and they're bringing it into March",
	},
	date: '2021-03-01',
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
				February was an amazing month for us and March promises to be just as
				incredible. We polished our Month of Sharing, and we capped it off with
				our Lightning Talks; over a dozen members presented! We're keeping up
				that energy going into March with a ton of brownbag events for even more
				knowledge and goodness 💖
			</p>

			<hr />

			<h2>💞 Community Kindness</h2>
			<p className="lead text-muted">
				Spotlighting some of the kindness happening in our community.
			</p>
			<ul>
				<li>
					Thank you so much to Seth Hall and Ray Deck for pairing with our
					Virtual Coffee members on a variety of front-end topics, providing
					sound knowledge and a kind and caring demeanor.
				</li>
				<li>
					Shoutout to Meg Gutshall for bringing her positive energy and
					enthusiasm as a room leader and notetaker for our Coffees and for her
					work on the AV Team.
				</li>
				<li>
					A heartfelt thank you to all of our volunteers, especially the
					Lightning Talk Coordinators, Room Leaders and Notetakers, and AV Team,
					who support the community and make our events so special!
				</li>
				<li>
					A special thank you to Karen Dickenson for leading the book club
					reading of "Atomic Habits" this month.
				</li>
			</ul>

			<h2 className="my-5">📆 What's happening at Virtual Coffee</h2>

			<h3 className="mb-3 font-italic">February Recap:</h3>
			<ul>
				<li>
					Monthly challenge &gt; Show your work! Creating Audio/Visual content
				</li>
				<li>New members: 45 new members</li>
			</ul>

			<h4 className="mt-4">🥪 Lightning Talks</h4>
			<p>
				We had our 2nd ever Lightning Talk Event live-streamed on YouTube and it
				was amazing. A huge thank you to the speakers, volunteers, coordinators,
				and attendees who made this possible! We can't wait to share the
				recordings.
			</p>

			<h3 className="mb-3 font-italic">February Happenings:</h3>
			<h4 className="mt-4">💡 Monthly Challenge: Get Job Ready!</h4>
			<p>
				Time to make note of all the cool things that you do! Get job-ready!
				Resumes, Portfolios, Cover Letters, and Elevator Pitch! Whether you're
				actively looking, getting ready to look, or just want to update your
				materials in case that dream job comes along, this is a great time to do
				it with the community and to get some feedback.
			</p>

			<h4 className="mt-4">🎙️ Podcast</h4>
			<ul>
				<li>
					<a href="/podcast/0104-vic-vijayakumar/">
						Vic Vijayakumar - Indie Hacking
					</a>
				</li>
				<li>
					<a href="/podcast/0105-cameron-rahat/">
						Cameron Bardell and Rahat Chowdhury - Mental Health & Tech
					</a>
				</li>
				<li>
					<a href="/podcast/0106-drew/">
						Drew Clements - Building a career and community
					</a>
				</li>
				<li>
					<a href="/podcast/0107-colleen/">
						Colleen Schnettler - Tech: It's hard, but it's worth it
					</a>
				</li>
			</ul>

			<h4 className="mt-4">🥪 🙌 Livestream Q&A Collaboration</h4>
			<p>
				March 4th, 1:15pm EST - Bekah from Virtual Coffee, Drew from
				Protege.dev, and Andrew from The Collab Lab will be live streaming their
				panel, Empowering Junior Developers, and taking questions through
				YouTube chat.
			</p>

			<h4 className="mt-4">🥪 Brownbags</h4>
			<ul>
				<li>
					March 5th, 12:00pm EST - Salary Negotiations Q&A by Bryan Healey
				</li>
				<li>
					March 8th, 11:00am EST - Styling Emails Using HTML and MJML Framework
					by Elizabeth de Almeida
				</li>
				<li>
					March 12th,12:00pm EST - A Deep Dive into the World of Module/no
					module Bundlers by Jono Yeong
				</li>
				<li>
					March 15th, 12:00pm EST - Publishing a Book with TensorFlow.js and
					O'Reilly by Gant Laborde
				</li>
				<li>
					March 19th, 12:00pm EST- Discover Cloudflare Workers and KV by Justin
					Noel
				</li>
				<li>
					March 26th, 12:00pm EST - Type Driven Development with Typescript by
					Kirk Shillingford
				</li>
			</ul>
			<p>
				*Remember that brownbags are a member-only event and we post the zoom
				links approximately 1 hour before the event starts in the #announcements
				channel.
			</p>

			<h2>Member Blog Post Highlights</h2>
			<p>
				<em>Some of our member posts we loved in February</em>
			</p>
			<ul>
				<li>
					<a href="https://dev.to/andystitt829/how-to-learn-web-development-and-level-up-using-wordpress-5de7">
						How To Learn Web Development And Level Up Using Wordpress
					</a>{' '}
					, by Andy Stitt
				</li>

				<li>
					<a href="https://www.a11yproject.com/posts/2020-02-05-text-resizing-in-ios-and-android">
						Assistive Technology, Text Resizing in iOS and Android
					</a>{' '}
					, by Lucia Cerchie
				</li>
				<li>
					<a href="https://dev.to/saramccombs/tigew-mysql-views-4ei5">
						Things I Google Each Week: SQL Views
					</a>{' '}
					, by Sara McCombs
				</li>
			</ul>

			<div className="card my-5 border-primary">
				<div className="card-body">
					<h5 className="card-title text-primary font-italic">Slack Love</h5>
					<div className="card-text">
						<blockquote className="blockquote">
							<p className="mb-0">
								I am thankful that there are so many people going out of their
								way and helping me. I don't know if they had help when they were
								a junior so that's why they know the struggle but it feels truly
								amazing to be guided and I am extremely touched love this
								community."
							</p>
							<footer className="blockquote-footer">Jenny Ma</footer>
						</blockquote>
					</div>
				</div>
			</div>

			<h2>What our members are up to</h2>

			<ul>
				<li>
					Jono Yeong has started a{' '}
					<a href="https://www.youtube.com/watch?v=5ASt-kdy-pY">
						YouTube channel
					</a>
					! He's posted his first video, What I've Learned From Five Years As A
					Developer
				</li>
				<li>
					Mike Rogers has been creating content about front end development,
					Ruby, and Ruby on Rails on his{' '}
					<a href="https://www.youtube.com/c/MikeRogers0/videos">
						youtube channel
					</a>
				</li>
				<li>
					<a href="https://www.twitch.tv/sethburtonhall">Seth Hall</a> and{' '}
					<a href="https://www.twitch.tv/sherifr212">Sherif Refaat</a> have both
					started live-streaming on Twitch
				</li>
			</ul>

			<h3>Open Source Projects We Love!</h3>

			<ul>
				<li>
					<a href="https://github.com/Virtual-Coffee/virtualcoffee.io/issues">
						VirtualCoffee.io
					</a>
					, our Virtual Coffee community site - Dan Ott - 11ty
				</li>
				<li>
					<a href="https://github.com/drewclem/protege">Protege.dev</a>, remote
					jobs for junior developers - Drew Clements - React
				</li>
				<li>
					<a href="https://github.com/Rahat-ch/The_Sylar_Project">
						The Sylar Project
					</a>
					, a Mental Health Repository for easily finding local mental health
					resources - Rahat Chowdhury - React
				</li>
				<li>
					<a href="https://github.com/BekahHW/postpartum-wellness-app">
						Postpartum Wellness App
					</a>
					, an app to help moms monitor their well-being during the post-partum
					stage - BekahHW - React Native
				</li>
				<li>
					<a href="https://github.com/Rafi993/frontend-dev">frontend-dev</a>,
					Cli tool to setup developer tooling in your frontend repo - Rafi - JS
				</li>
				<li>
					<a href="https://github.com/tkshill/Quarto">Quarto</a>, An
					implementation of the Quarto boardgame - Kirk Shillingford - Elm
				</li>
				<li>
					<a href="https://github.com/marktnoonan/transcription">
						FreeLiveTranscript
					</a>
					, Live Transcription based on Speech Recognition API - Mark Noonan -
					JavaScript
				</li>
			</ul>
		</>
	);
}
