import React from "react";

interface B2BitLoadingAnimationProps {
	size?: number;
	className?: string;
	label?: string;
}

export const B2BitLoadingAnimation: React.FC<B2BitLoadingAnimationProps> = ({
	size = 200,
	className = "",
	label,
}) => {
	return (
		<div className={`flex items-center justify-center ${className}`}>
			<svg
				width={size}
				height={size * 0.4}
				viewBox="0 0 200 80"
				className="overflow-visible"
			>
				<title>B2bit Loading Animation</title>
				{/* Letter 'b' */}
				<g>
					<text
						x="30"
						y="60"
						fontSize="48"
						fontFamily="system-ui, -apple-system, sans-serif"
						fontWeight="700"
						fill="#02274f"
						opacity="0"
					>
						b
						<animate
							attributeName="opacity"
							values="0;1"
							dur="0.5s"
							begin="0s"
							fill="freeze"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							values="0.8;1.1;1"
							dur="0.6s"
							begin="0s"
							fill="freeze"
						/>
					</text>
				</g>

				{/* Letter '2' */}
				<g>
					<text
						x="55"
						y="60"
						fontSize="48"
						fontFamily="system-ui, -apple-system, sans-serif"
						fontWeight="700"
						fill="#02274f"
						opacity="0"
					>
						2
						<animate
							attributeName="opacity"
							values="0;1"
							dur="0.5s"
							begin="0.3s"
							fill="freeze"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							values="0.8;1.1;1"
							dur="0.6s"
							begin="0.3s"
							fill="freeze"
						/>
					</text>
				</g>

				{/* Letter 'b' (second) */}
				<g>
					<text
						x="80"
						y="60"
						fontSize="48"
						fontFamily="system-ui, -apple-system, sans-serif"
						fontWeight="700"
						fill="#02274f"
						opacity="0"
					>
						b
						<animate
							attributeName="opacity"
							values="0;1"
							dur="0.5s"
							begin="0.6s"
							fill="freeze"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							values="0.8;1.1;1"
							dur="0.6s"
							begin="0.6s"
							fill="freeze"
						/>
					</text>
				</g>

				{/* Letter 'i' */}
				<g>
					<text
						x="110"
						y="60"
						fontSize="48"
						fontFamily="system-ui, -apple-system, sans-serif"
						fontWeight="700"
						fill="#FDCF00"
						opacity="0"
					>
						i
						<animate
							attributeName="opacity"
							values="0;1"
							dur="0.5s"
							begin="0.9s"
							fill="freeze"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							values="0.8;1.1;1"
							dur="0.6s"
							begin="0.9s"
							fill="freeze"
						/>
					</text>
				</g>

				{/* Letter 't' */}
				<g>
					<text
						x="125"
						y="60"
						fontSize="48"
						fontFamily="system-ui, -apple-system, sans-serif"
						fontWeight="700"
						fill="#FDCF00"
						opacity="0"
					>
						t
						<animate
							attributeName="opacity"
							values="0;1"
							dur="0.5s"
							begin="1.2s"
							fill="freeze"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							values="0.8;1.1;1"
							dur="0.6s"
							begin="1.2s"
							fill="freeze"
						/>
					</text>
				</g>

				{/* Pulsing underline animation */}
				<line
					x1="30"
					y1="70"
					x2="150"
					y2="70"
					stroke="#fbbf24"
					strokeWidth="3"
					opacity="0"
					strokeDasharray="150"
					strokeDashoffset="150"
				>
					<animate
						attributeName="opacity"
						values="0;1"
						dur="0.3s"
						begin="1.8s"
						fill="freeze"
					/>
					<animate
						attributeName="stroke-dashoffset"
						values="150;0"
						dur="1s"
						begin="1.8s"
						fill="freeze"
					/>
				</line>

				{/* Loading dots */}
				<g opacity="0">
					<animate
						attributeName="opacity"
						values="0;1"
						dur="0.3s"
						begin="2.8s"
						fill="freeze"
					/>

					<circle cx="155" cy="60" r="2" fill="#1e3a8a">
						<animate
							attributeName="opacity"
							values="0.3;1;0.3"
							dur="1.5s"
							begin="3s"
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx="165" cy="60" r="2" fill="#1e3a8a">
						<animate
							attributeName="opacity"
							values="0.3;1;0.3"
							dur="1.5s"
							begin="3.3s"
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx="175" cy="60" r="2" fill="#1e3a8a">
						<animate
							attributeName="opacity"
							values="0.3;1;0.3"
							dur="1.5s"
							begin="3.6s"
							repeatCount="indefinite"
						/>
					</circle>
				</g>

				{/* Subtle glow effect */}
				<defs>
					<filter id="glow">
						<feGaussianBlur stdDeviation="3" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Repeating animation cycle */}
				<g opacity="1">
					<animateTransform
						attributeName="transform"
						type="scale"
						values="1;1.02;1"
						dur="3s"
						begin="4s"
						repeatCount="indefinite"
					/>
				</g>
			</svg>
			<p>{label}</p>
		</div>
	);
};
