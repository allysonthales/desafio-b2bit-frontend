import type { ProfileResponse } from "@/api/profile/domain/types";
import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { ProfileInfoItem } from "@/components/Profile/ProfileInfoItem";
import { Card, CardContent } from "@/components/ui/card";

export interface ProfileProps {
	profile?: ProfileResponse;
}

export default function Profile({ profile }: ProfileProps) {
	if (!profile) return;
	return (
		<>
			<Header />
			<PageWrapper className="bg-[#F1F5F9]">
				<Card className="w-96 mx-auto">
					<CardContent className="">
						<figure className="space-y-2 flex flex-col items-center justify-center mb-4">
							<figcaption className="text-xs">Profile picture</figcaption>
							<img
								src={profile?.avatar.low}
								alt="Profile avatar"
								height={120}
								width={120}
								className="rounded-md w-16 h-16 object-cover"
							/>
						</figure>
						<div className="flex flex-col items-start">
							<ProfileInfoItem label="Name" value={profile.name} />
							<ProfileInfoItem label="E-mail" value={profile.email} />
						</div>
					</CardContent>
				</Card>
			</PageWrapper>
		</>
	);
}
