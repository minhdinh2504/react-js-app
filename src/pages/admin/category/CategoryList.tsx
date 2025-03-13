import { useState } from "react";

const CategoryList = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Laptop' },
        { id: 1, name: 'Smartphone' },
        { id: 1, name: 'Fashion' },
        { id: 1, name: 'Home & Kitchen' },
    ]);

    const apiUrl = 'http://localhost:5176/api/v1/categories';

    return (
        <div className="card bg-white rounded-md shadow-md">
            <div className="card-header p-4">
                <h1 className="text-2xl font-bold">Category Management</h1>
            </div>
            <div className="card-body p-4 border-y border-gray-200">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left *:border *:border-gray-200 *:p-2">
                            <th>No</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id} className="text-left *:border *:border-gray-200 *:p-2">
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>Actions</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card-footer p-4">
                Pagination
            </div>
        </div>
    )
}
export default CategoryList;