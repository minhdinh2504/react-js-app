import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ICategory } from "../../../interfaces";
import { getCategoryById, updateCategory } from "../../../api/category.service";

type CategoryModalProps = {
  onClose: () => void,
  id?: number
}

type Inputs = {
  id: number,
  name: string,
  createdAt: string
}

const CategoryModal = ({ onClose, id }: CategoryModalProps) => {
  const [category, setCategory] = useState<ICategory>()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();

  const submitForm: SubmitHandler<Inputs> = async (data) => {
    if (id) {
      await updateCategory(id, data)
      onClose()
    }
  }

  const fetchCategoryById = async () => {
    if (id) {
      const data = await getCategoryById(id)
      setCategory(data)
    }
  }

  useEffect(() => {
    fetchCategoryById()
  }, [])

  useEffect(() => {
    if (category) {
      reset(category)
    }
  }, [category])

  if (!category) {
    return "Loading category"
  }

  return <div className="bg-gray-400 h-full w-full top-0 absolute flex justify-center items-center">
    <div className="relative w-1/2 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
      <button onClick={onClose} className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
        <span className="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="flex items-center gap-4">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          <svg
            className="size-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>

        <p className="font-medium sm:text-lg">Update categories</p>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">ID</label>
          <div className="relative">
            <input
              // {...register("name", { required: true })}
              {...register("id", { required: true })}
              type="text"
              disabled
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="ID"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Tên danh mục</label>
          <div className="relative">
            <input
              // {...register("name", { required: true })}
              {...register("name", { required: true })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Nhập vào tên danh mục"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">CreatedAt</label>
          <div className="relative">
            <input
              // {...register("name", { required: true })}
              {...register("createdAt", { required: true })}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
              placeholder="Created at"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default CategoryModal;
