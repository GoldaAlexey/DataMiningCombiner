interface User {
    accountId: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string[];
    _links: {
        self: {
            href: string;
        },
        accountsList: {
            href: string;
        },
        projectsList: {
            href: string;
        }
    };
    created: Date;
    token: any;
}
