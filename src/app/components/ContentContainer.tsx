import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function ContentContainer({ children }: Props) {
    return (
        <div className="max-w-screen-xl m-auto p-6">
            {children}
        </div>
    );
}