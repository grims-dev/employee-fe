import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function ContentContainer({ children, className }: Props) {
    return (
        <div className={`max-w-screen-xl m-auto p-6 ${className}`}>
            {children}
        </div>
    );
}