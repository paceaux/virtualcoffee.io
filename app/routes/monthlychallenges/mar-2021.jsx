import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';

export const handle = {
	listTitle:
		'March, 2021: Get job ready! Resumes, Portfolios, Cover Letters, and Elevator Pitch',
	meta: {
		title:
			'Monthly Theme & Challenge for March, 2021: Get job ready! Resumes, Portfolios, Cover Letters, and Elevator Pitch',
		description:
			'March challenge -> There is never a bad time to work on job application materials and your elevator pitch',
	},
	date: '2021-03-01',
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
				<small>Monthly Challenge for March, 2021:</small> Get job ready!
				Resumes, Portfolios, Cover Letters, and Elevator Pitch
			</h1>
			<p className="lead">
				It is never a bad thing to keep your job packet updated, and we're going
				to challenge you to do it, whether or not you're actively applying to
				jobs.
			</p>
			<p className="lead">
				During this month, we'll work on creating, revising, or updating your
				job packet materials and that elevator pitch that might get you in the
				door. Each week, we'll work on a new piece, starting with the resume.
			</p>
			<hr />
			<h2>Theme</h2>
			<p>
				Get job ready! Resumes, Portfolios, Cover Letters, and Elevator Pitch
			</p>
			<h2>Goals</h2>
			To end the month with:
			<ul>
				<li>
					A complete and updated resume tailored to your job search or position
				</li>
				<li>
					A plan for updating or creating your portfolio with clear and
					actionable steps
				</li>
				<li>
					A complete and updated Cover Letter that creates a personal connection
				</li>
				<li>A captivating elevator pitch</li>
			</ul>
			<h2>How it works</h2>
			<ul>
				<li>
					For the month of March we're focusing on creating job application
					materials. Whether you're actively looking, getting ready to look, or
					just want to update your materials in case that dream job comes along,
					this is a great time to do it with the community and to get some
					feedback.
				</li>
				<li>
					We encourage you to post your ideas, questions, and even your fears in
					slack. We're all learning and growing together!
				</li>
				<li>
					Each week, we'll do a slack check-in to brainstorm, support, and learn
					from each other.
				</li>
				<li>
					Keep in mind that different experiences will have different approaches
					to the materials, but we can all provide positive feedback.
				</li>
			</ul>
			<h3>Each week, we'll cover something new.</h3>
			<h5>Week one: Resume</h5>
			<ul>
				<li>Step one: Find a job post.</li>
				<li>Step two: Match your skills to the post.</li>
				<li>Step three: Make your resume standout.</li>
			</ul>
			<h5>Week two: portfolio</h5>
			<ul>
				<li>
					Step one: Create a clear purpose. Your portfolio should reflect the
					skills you would apply at your ideal job.
				</li>
				<li>Step two: Use a medium that works best for you.</li>
				<li>Step three: Create a connection.</li>
			</ul>
			<h5>Week three: Cover Letter (CL) or continue portfolio</h5>
			<ul>
				<li>
					Step one: Do some research. Learn about the company and make a
					connection.
				</li>
				<li>
					Step two: Do some storytelling. A CL isn't a written resume. It's an
					opportunity to go deeper.
				</li>
				<li>Step three: Connect your experience to the position.</li>
			</ul>
			<h5>Week four: Elevator Pitch</h5>
			<ul>
				<li>
					An elevator pitch is a short speech introducing yourself, what you do
					or your experience, and why you would be a good person to have on the
					team. The idea is to confidently convey information about yourself in
					a short amount of time and to leave an impression on the mind of the
					person who hears it.
				</li>
			</ul>
			<p>
				Each week, our project lead will start us off with some questions and
				resources. For this challenge to be fruitful, make sure you're sharing,
				providing feedback, and asking for help when you need it.
			</p>
			<p>And remember, we're always here to help ❤️</p>
		</>
	);
}
