import { useEffect, useState } from 'react'
import CategoryForm from './CategoryForm';
import axios, { AxiosResponse } from 'axios';
import instance from '../../../api/api.service';
import { ICategory } from '../../../interfaces';
import { getCategory } from '../../../api/category.service';
import CategoryItem from './CategoryItem';
import CategoryModal from './CategoryModal';

const CategoryList = () => {
  // State of component - Noi luu tru du lieu trong component
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(true)

  const getCategories = async () => {
    const data = await getCategory()
    setCategories(data);
  }

  const updateCategory = () => {
    setOpenModal(true)
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <section className='relative'>
      <h1 className="text-3xl">Categories list</h1>
      <CategoryForm onGetCategories={getCategories} />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {categories.map((cat) => <CategoryItem onUpdateCategory={updateCategory} onGetCategories={getCategories} category={cat} />)}
          </tbody>
        </table>
      </div>
      {openModal && <CategoryModal onClose={() => setOpenModal(false)} />}
    </section>
  )
}
export default CategoryList;
