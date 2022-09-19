import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';

export const handle = {
	listTitle: 'May, 2021: Giving meaningful and empathetic feedback',
	meta: {
		title:
			'Monthly Theme & Challenge for May, 2021: Giving meaningful and empathetic feedback',
		description: `May Challenge -> Being a developer is more than writing code, so this month let's work on providing each other with honest and empathetic feedback.`,
	},
	date: '2021-05-01',
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
				<small>Monthly Theme for May, 2021:</small> Feedback
			</h1>

			<p className="lead">
				Earlier this year, we read <em>Radical Candor</em> for book club. To
				keep the spirit of radical candor going, we're challenging you to both
				give and accept feedback from others.
			</p>

			<h2>Theme</h2>
			<p>Giving Meaningful and Empathetic Feedback</p>

			<h3>Let's work together!</h3>
			<p>
				When we care about our community members, we can offer empathetic
				responses that are honest and allow them to grow and to fix a problem.
				Sometimes these conversations are hard. But sometimes we need hard
				conversations to help us grow. Let's approach each other with kindness
				and honesty, and allow this kind of feedback to be a regular part of our
				process.
			</p>

			<p>
				For the month of May, we're asking members to both ask for feedback and
				to give feedback to others. It could be on a blog post, an idea, a
				coding project, a talk, or whatever you could use feedback on.
			</p>

			<p>
				And to go along with our monthly theme, let's also collect resources on
				how to give good feedback and post them in the #articles-and-resources
				channel. Don't worry, we've got it started with a list at the bottom of
				this page.
			</p>

			<h3>The Challenge</h3>
			<p>
				If you want to take a more structured approach, join the challenge in
				the #monthly-challenge channel!
			</p>

			<p>
				For the challenge, we're asking you to provide feedback four times this
				month. For each week, we'll highlight a different opportunity for
				feedback--but don't let that limit you! Check out the themed weeks and
				post your content in the #monthly-challenge channel. When you've
				finished providing feedback, let's keep track of who and what you
				provided feedback for.
			</p>
			<ul>
				<li>
					Week 1: Code Feedback - What code are you working on, or do you have
					sitting in a repo that you'd like someone to look at?
				</li>
				<li>
					Week 2: Blog posts and Writing- Do you have some writing that needs
					proofreading? Do you have a concept that you've worked on, but isn't
					quite where you want it but you can't figure out why? Need some
					feedback on a ReadMe or other technical document?
				</li>
				<li>
					Week 3: Talks and Videos- Are you practicing a talk or have an idea
					for one? Did you make a video and you want some feedback before you
					post?
				</li>
				<li>
					Week 4: Wildcard- Did you miss one of the weeks or have you made
					updates? Do you have something that doesn't quite fit? This week is
					for anything you need feedback on.
				</li>

				<li>And remember, we're always here to help ❤️</li>
			</ul>

			<h3>Resources</h3>
			<ul>
				<li>
					<a href="https://www.amazon.com/Kim-Scott-Insights-for-Entrepreneurs/b?ie=UTF8&node=17395104011&ref=soussoa_ks_auth_insights&ld=SOUSSOA-KS-Auth-Insights">
						Kim Scott: How to give useful feedback
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/watch?v=YLBDkz0TwLM">
						Radical Candor in 6 Minutes with Kim Scott
					</a>
				</li>
				<li>
					<a href="https://youtu.be/f-Tcr0T9Tyw">
						Kim Scott: How to be a kick-ass boss
					</a>
				</li>
				<li>
					<a href="https://hbr.org/2017/10/how-to-give-feedback-people-can-actually-use">
						How to Give Feedback People Can Actually Use
					</a>
				</li>
				<li>
					<a href="https://simpleleadership.io/april-wensel/">
						Compassionate Coding and Diversity with April Wensel
					</a>
				</li>
			</ul>
		</>
	);
}
