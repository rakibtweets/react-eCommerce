import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //posting data
    fetch('https://infinite-lowlands-55861.herokuapp.com/allProducts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Product Added', '', 'success');
          reset();
        }
        console.log(result);
      });
  };
  return (
    <div>
      <div
        style={{
          background: '#FFFFF',
          boxShadow: '0 0 5px 0 gray',
          marginBottom: '4em',
        }}
      >
        <h4 className="fw-bold text-center py-4">
          Add <span className="text-info">Product</span>{' '}
        </h4>
      </div>

      {/* Add Product Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-75 mx-auto px-3 px-lg-5 bg-light p-4"
      >
        <h4 className=" text-center  py-3 fw-bold">
          product <span className="text-info">Details</span>
        </h4>
        <input
          type="text"
          className=" form-control "
          placeholder="Product Name"
          {...register('productName', { required: true })}
        />
        <br />
        <input
          type="text"
          className=" form-control "
          placeholder="Categories"
          {...register('categories', { required: true })}
        />
        <br />

        <input
          type="number"
          className=" form-control "
          placeholder="Product Price"
          {...register('pricing', { required: true })}
        />
        <br />

        <input
          type="text"
          className=" form-control "
          placeholder="Product Image Link"
          {...register('productImg', { required: true })}
        />
        <br />
        <input
          type="text"
          className=" form-control "
          placeholder="Availablity"
          {...register('availability', { required: true })}
        />
        <br />
        <textarea
          type="text"
          className=" form-control "
          placeholder="Product Details"
          {...register('productDescription', { required: true })}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <button
          className="btn btn-primary text-uppercase container-fluid px-5"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
