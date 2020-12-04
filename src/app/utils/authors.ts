
export class Authors {
    public static authors : Array<Author> = [
        {
            _id: "1234",
            email: "is@s.s",
            full_name: "islam"
        }
    ];
}


export default interface Author{
    _id: string,
    email: string,
    full_name: string
}

