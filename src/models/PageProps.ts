import { useState } from "react";

export default interface PageProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export function InitPageProps() : PageProps {
    const [title, setTitle] = useState<string>("Home");
    return { title: title, setTitle: setTitle} as PageProps;
}