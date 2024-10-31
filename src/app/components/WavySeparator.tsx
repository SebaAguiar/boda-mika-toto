import type React from "react";

const WavySeparator = ({ className = "" }): React.JSX.Element => (
	<div className={`w-full h-24 relative overflow-hidden ${className}`}>
		<svg
			viewBox="0 0 500 150"
			preserveAspectRatio="none"
			className="w-full h-full absolute bottom-0"
		>
			<title>Wavy Separator</title>
			<path
				d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
				className="fill-gray-800 opacity-50"
			>
				<animate
					attributeName="d"
					dur="10s"
					repeatCount="indefinite"
					values="
            M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z;
            M0.00,49.98 C149.99,0.00 349.20,150.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z;
            M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z
          "
				/>
			</path>
		</svg>
	</div>
);

export default WavySeparator;
