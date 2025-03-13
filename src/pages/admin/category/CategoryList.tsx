import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import CategoryDetails from "./CategoryDetails";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [isShowDetail, setIsShowDetail] = useState(false);

    const apiUrl = 'http://localhost:5176/api/v1/categories';

    const fetchData = () => {
        axios.get(apiUrl)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const editItem = (id) => {
        console.log(id);
        setIsShowDetail(true);
        console.log(isShowDetail);
    }

    const deleteItem = (id) => {
        axios.delete(apiUrl + `/${id}`)
            .then(response => {
                console.log(response);
                if (response) {
                    fetchData();
                }
            })
            .catch(error => {
                console.error(error);
            });

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            <div className="card bg-white rounded-md shadow-md mb-4">
                <div className="card-header p-4">
                    <h1 className="text-2xl font-bold">Category Management</h1>
                </div>
                <div className="card-body p-4 border-y border-gray-200">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left *:border *:border-gray-200 *:p-2">
                                <th>No</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Created At</th>
                                <th>Created By</th>
                                <th>Updated At</th>
                                <th>Updated By</th>
                                <th>Active</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={category.id} className="text-left *:border *:border-gray-200 *:p-2">
                                    <td>{index + 1}</td>
                                    <td>{category.name}</td>
                                    <td>{category.description}</td>
                                    <td>{category.createdAt}</td>
                                    <td>{category.createdBy}</td>
                                    <td>{category.updatedAt}</td>
                                    <td>{category.updatedBy}</td>
                                    <td>{category.isActive ? "Yes" : "No"}</td>
                                    <td>
                                        <div className="flex space-x-2 *:cursor-pointer *:border-0">
                                            <button type="button" title="Edit" onClick={() => editItem(category.id)}>
                                                <FontAwesomeIcon icon={faEdit} className="text-[#33adff]" />
                                            </button>
                                            <button type="button" title="Delete" onClick={() => deleteItem(category.id)}>
                                                <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer p-4">
                    Pagination
                </div>
            </div>

            {isShowDetail && <CategoryDetails />}
        </section>

    )
}
export default CategoryList;