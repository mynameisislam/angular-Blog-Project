import Author from './authors';
import Category from './categories';
import {Authors} from './authors';



export class Blogs {
    public static  blogs : Array<Blog> = [
        {
            _id: "12315",
            title: "Lorem ipsum",
            author: {
                _id: "5354634",
                email: "is@s.s",
                full_name:"Boubellouta Islam",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula pretium efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin velit Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula pretium efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin velit",
            category: {
                _id: "",
                name: "",
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            coverUrl: "./assets/Puffins.jpg",
            read_count: 30
        }
    ];
}


export default interface Blog{
    _id: string,
    title: string,
    author: Author,
    content: string,
    category: Category,
    createdAt: Date,
    updatedAt: Date,
    coverUrl: string,
    read_count : number
}

