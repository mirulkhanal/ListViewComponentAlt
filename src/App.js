import DataTreeComponent from './components/DataTreeComponent';
import { categories, products } from './data';
function App() {
  return (
    <>
      <DataTreeComponent categories={categories} productsData={products} />
    </>
  );
}

export default App;
