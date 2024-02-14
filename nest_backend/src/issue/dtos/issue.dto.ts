export class IssueDTO{
    id: number;
    issueNumber: number;
    title: string;
    state: "open" | "closed";
    labels: {
        id: number;
        name: string;
        color: string;
    }[];
    author: string;
    created_at: string;
    closed_at: string;
    comments: number;
    description: string;
}

export class RequestQueryDTO{
    state: string;
    page: number;
}