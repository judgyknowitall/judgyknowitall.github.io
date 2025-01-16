import { useState } from "react";

export default interface PageProps {
    title: string;
    onPageChanged: (newTitle: string) => void;
}

export function InitPageProps() : PageProps {
    const [title, setTitle] = useState<string>("Home");
    function handlePageChanged(pageTitle: string){
        setTitle(pageTitle);
    }
    return { title: title, onPageChanged: handlePageChanged} as PageProps;
}