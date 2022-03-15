import VirtualCoffeeFullBanner from '~/svg/VirtualCoffeeFullBanner';
import UndrawCelebration from '~/svg/UndrawCelebration';
import getSponsors from '~/data/sponsors';
import { json, Link, useLoaderData } from 'remix';
import { getEvents } from '~/data/events';
import { dateForDisplay } from '~/util/date';
import { getEpisodes } from '~/data/podcast';
import HomePageBlock from '~/components/HomePageBlock';
import PostList from '~/components/PostList';

export const loader = async () => {
	const sponsors = await getSponsors();
	const events = await getEvents({
		limit: 5,
	});
	const podcastEpisodes = await getEpisodes();
	return json({ sponsors, events, podcastEpisodes });
};

const homePageLinks = [
	{
		url: '/about/',
		title: 'About Virtual Coffee',
		description: `Our Mission, Core Values, History, and more.`,
	},
	{
		url: '/code-of-conduct/',
		title: 'Code of Conduct',
		description: `In order to create a welcoming and inclusive community, we ask our members to abide by our Code of Conduct.`,
	},
	{
		url: '/members/',
		title: 'Our Members',
		description: `Meet our amazing members!`,
	},
	{
		url: 'https://store.virtualcoffee.io/',
		title: 'Merch Store',
		description: `Support Virtual Coffee and show your love ❤️`,
	},
	{
		url: 'https://github.com/Virtual-Coffee/',
		title: 'VC GitHub',
		description: `Join our Open Source efforts!`,
	},
	{
		url: 'https://youtube.com/c/virtualcoffeeio',
		title: 'VC Videos',
		description: `Recordings of Virtual Coffee Events and Live Streams.`,
	},
	{
		url: 'https://twitter.com/VirtualCoffeeIO',
		title: 'VC Twitter',
		description: `Stay up to date and join in the fun!`,
	},
];

export default function Index() {
	const { sponsors, events, podcastEpisodes } = useLoaderData();

	return (
		<>
			<div className="hero">
				<div className="container pt-5 pb-5 pt-sm-6">
					<h1>
						<VirtualCoffeeFullBanner />
					</h1>

					<h2 className="pt-5">
						<span>An intimate community for all devs,</span>
						<span>
							optimized for{' '}
							<strong className="gradient-text-primary">you</strong>
						</span>
					</h2>
				</div>

				<div className="container pt-3 pb-5">
					<div className="bodycopy lead">
						<p>
							Virtual Coffee is a laid-back conversation with developers twice a
							week. It's the conversation that keeps going in slack. It's the
							online events that support developers at all stages of the
							journey. It's the place you go to make friends.
						</p>

						<p>
							Anyone can join! Whether you're thinking about getting into tech
							or have been in it for decades.
						</p>
					</div>
				</div>
			</div>

			<main id="maincontent">
				<div className="container-lg py-5">
					<h2 className="text-center mb-5">What we're up to</h2>
					<div className="homepageblocks">
						<HomePageBlock
							Hero={UndrawCelebration}
							id="about"
							title="All Things Virtual Coffee"
							subtitle="Links and Goodies!"
						>
							<PostList items={homePageLinks} />
						</HomePageBlock>

						<HomePageBlock
							Hero={UndrawCelebration}
							id="about"
							title="Community Events"
							subtitle="See our upcoming events!"
							linkTo="/events"
							footer="See more Community Events"
						>
							<PostList
								items={events.map((event) => ({
									title: event.title,
									description: (
										<strong>{dateForDisplay(event.startDateLocalized)}</strong>
									),
								}))}
							/>
						</HomePageBlock>
					</div>
					<div className="homepageblocks">
						<HomePageBlock
							Hero={UndrawCelebration}
							id="about"
							title="Virtual Coffee Podcast"
							subtitle="Conversations with members of the community"
							linkTo="/podcast"
							footer="See more Podcast episodes"
						>
							<PostList
								items={podcastEpisodes.map(
									({ title, metaDescription: description, url }) => ({
										title,
										description,
										url,
									}),
								)}
							/>
						</HomePageBlock>
					</div>
				</div>
				<div className="bg-light">
					<div className="container-lg py-5">
						<h2 className="mb-4">Our Supporters</h2>

						<p className="lead">
							We are eternally grateful to our amazing supporters and sponsors!
						</p>

						<p className="lead">
							If you'd like to support Virtual Coffee, please visit{' '}
							<a href="https://github.com/sponsors/Virtual-Coffee">
								our sponsorship page
							</a>{' '}
							on GitHub.
						</p>

						<ul className="sponsors">
							{sponsors.logoSponsors.map((tier) =>
								tier.sponsors.map((supporter) => (
									<li key={supporter.id} data-id={supporter.id}>
										<a href={supporter.websiteUrl || supporter.url}>
											<img
												src={supporter.avatarUrl_80}
												alt=""
												width="240"
												height="240"
												loading="lazy"
												decoding="async"
												sizes="(min-width: 915px) 240px, 24vw"
												srcSet={`
              ${supporter.avatarUrl_80}   80w,
              ${supporter.avatarUrl_160} 160w,
              ${supporter.avatarUrl_240} 240w,
              ${supporter.avatarUrl_480} 480w,
              ${supporter.avatarUrl_720} 720w`}
											/>
											<div className="sponsors-body">
												<h3 className="h4">{supporter.name}</h3>
												{supporter.descriptionHTML && (
													<div
														dangerouslySetInnerHTML={{
															__html: supporter.descriptionHTML,
														}}
													/>
												)}
											</div>
										</a>
									</li>
								)),
							)}
						</ul>

						<ul className="supporters my-6">
							{sponsors.supporters.map((tier) =>
								tier.sponsors.map((supporter) => (
									<li
										className={`supporters-${tier.monthlyPriceInCents}`}
										key={supporter.id}
									>
										<a
											href={supporter.url}
											title={supporter.name || supporter.login}
										>
											<img
												src={supporter.avatarUrl_80}
												alt={supporter.name || supporter.login}
												width="80"
												height="80"
												loading="lazy"
												decoding="async"
												sizes="80px"
												srcSet={`
              ${supporter.avatarUrl_80}   80w,
              ${supporter.avatarUrl_160} 160w,
              ${supporter.avatarUrl_240} 240w
            `}
											/>
											<div className="supporters-name">
												<svg
													viewBox="0 0 130 130"
													xmlns="http://www.w3.org/2000/svg"
													fillRule="evenodd"
													clipRule="evenodd"
													strokeLinejoin="round"
													strokeMiterlimit="2"
													aria-hidden="true"
												>
													<path
														d="M 20 65 A 45 45 0 1 1 110 65 A 45 45 0 1 1 20 65"
														id="curve"
														fill="transparent"
														stroke="transparent"
													/>
													<text width="500">
														<textPath xlinkHref="#curve">
															✨{supporter.name || supporter.login}✨
														</textPath>
													</text>
												</svg>
											</div>
										</a>
									</li>
								)),
							)}
						</ul>

						<div className="text-center">
							<h2 className="mb-5">Thank you!!</h2>

							<p>
								<a
									href="https://github.com/sponsors/Virtual-Coffee"
									className="btn btn-primary btn-lg"
								>
									Sponsor Virtual Coffee
								</a>
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
