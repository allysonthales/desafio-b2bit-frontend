interface ProfileInfoItemProps {
	label: string;
	value: string;
}

export function ProfileInfoItem({ label, value }: ProfileInfoItemProps) {
	return (
		<div className="mb-2 text-start w-full">
			<p className="">
				Your <span className="font-medium">{label}</span>
			</p>
			<div className="w-full px-4 py-4 bg-muted rounded-md">
				<p className="text-xs text-">{value}</p>
			</div>
		</div>
	);
}
