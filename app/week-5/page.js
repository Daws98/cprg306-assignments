import ItemList from './item-list';

const Page = () => {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Indie Flower', color: 'lightgray' }}>Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;
