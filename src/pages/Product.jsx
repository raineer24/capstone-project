import PageLayout from '../components/layouts/PageLayout';
import ProductDisplay from '../components/organisms/ProductDisplay';
import { samleProduct} from '../data/sampleProduct';

const Product = () => {
    return (
        <PageLayout title='Product Details'>
            <div className="bg-white rounded-lg shadow p-6">
                <ProductDisplay product={samleProduct}/>
            </div>
        </PageLayout>
    )
};

export default Product;