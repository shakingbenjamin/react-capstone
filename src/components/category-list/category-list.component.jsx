import './category-list.styles.scss'
import CategoryItem from "../category-item/category-item.component";

const CategoryList = () => {

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
    
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))
            }
        </div>
    )
}

export default CategoryList