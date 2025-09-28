import type { ProfileResponse } from "@/api/profile/domain/types";
import { ProfileInfoItem } from "@/components/Profile/ProfileInfoItem";
import { Card, CardContent } from "@/components/ui/card";

export interface ProfileProps {
	profile?: ProfileResponse;
}

export default function Profile({ profile }: ProfileProps) {
	if (!profile) return;

	return (
		<Card className="max-w-2xl shadow-2xl py-10 w-full">
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
	);
}
