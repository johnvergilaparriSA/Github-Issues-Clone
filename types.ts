export type Label={
    id: number;
    name: string;
    color: string;
} 

export type Issue={
    id: number;
    issueNumber: number;
    title: string;
    state: "open" | "closed";
    labels: Label[];
    author: string;
    created_at: string;
    closed_at: string;
    comments: number;
} 