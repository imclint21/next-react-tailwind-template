import { ReactNode } from "react";

type ContainerProps = {
	children?: ReactNode
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className={"mx-auto max-w-7xl"}>
			{children}
		</div>
	)
}

export default Container;