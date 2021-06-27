import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.addUsers(data);
    reset();
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name", { required: true })} />
        <span>{errors.name && "Required field"}</span>
        <label>Username</label>
        <input type="text" {...register("username", { required: true })} />
        <span>{errors.username && "Required field"}</span>
        <button>Add new user</button>
      </form>
    </Fragment>
  );
};

export default AddUserForm;
