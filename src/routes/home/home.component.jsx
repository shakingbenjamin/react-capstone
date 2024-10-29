import CategoryList from "../../components/category-list/category-list.component";
import {Outlet} from "react-router-dom";

const categories = [
    {
        id: 1,
        title: 'Hats',
        subtitle: 'Shop Now',
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
        id: 2,
        title: 'Jackets',
        subtitle: 'Shop Now',
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
        id: 3,
        title: 'Sneakers',
        subtitle: 'Shop Now',
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
        id: 4,
        title: 'Womens',
        subtitle: 'Shop Now',
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
        id: 5,
        title: 'Mens',
        subtitle: 'Shop Now',
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    }
]
const Home = () => {
    return (
        <div>
            <Outlet />
            <CategoryList categories={categories}/>
        </div>
    )
}

export default Home;
