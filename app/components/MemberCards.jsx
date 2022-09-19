import DisplayHtml from '~/components/DisplayHtml';

import GitHub from '~/svg/GitHub';
import LinkedIn from '~/svg/LinkedIn';
import Dev from '~/svg/Dev';
import Codenewbie from '~/svg/Codenewbie';
import Twitter from '~/svg/Twitter';
import Twitch from '~/svg/Twitch';
import Polywork from '~/svg/Polywork';
import Medium from '~/svg/Medium';
import HashNode from '~/svg/HashNode';
import YouTube from '~/svg/YouTube';
import Website from '~/svg/Website';

export default function MemberCards({ data }) {
	const Icons = {
		GitHub,
		LinkedIn,
		Dev,
		Codenewbie,
		Twitter,
		Twitch,
		Polywork,
		Medium,
		HashNode,
		YouTube,
		Website,
	};

	return (
		<>
			<div className="membercards">
				{data.map((member) => {
					return (
						<div
							key={member.github}
							className="membercard"
							id={`member_${member.github}`}
						>
							<div className="membercard-img">
								<img src={member.avatarUrl} alt="" />
							</div>

							<div className="membercard-header">
								<h3 className="membercard-name">{member.name}</h3>

								{member.teams?.length > 0 && (
									<div className="membercard-teams">
										{member.teams.map((team) => (
											<span key={team} className="badge badge-secondary">
												{team}
											</span>
										))}
									</div>
								)}
							</div>

							<div className="membercard-bd">
								{member.bio && (
									<DisplayHtml html={member.bio} className="text-muted" />
								)}

								{member.mainUrl && (
									<div className="text-truncate">
										<a
											href={member.mainUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											{member.mainUrl
												.replace('https://', '')
												.replace('http://', '')}
										</a>
									</div>
								)}
							</div>
							<div className="membercard-social">
								{member.accounts.map((item, i) => {
									if (!item.Icon || !Icons[item.Icon]) {
										return null;
									}
									const Icon = Icons[item.Icon];
									return (
										<a
											key={i}
											href={item.url}
											className="membercard-icon"
											title={item.title}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Icon />
										</a>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
