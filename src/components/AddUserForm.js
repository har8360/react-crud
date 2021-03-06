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
    props.addUser(data);
    reset();
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name", { required: true })} />
        <span style={{ color: "red" }}>{errors.name && "Required field"}</span>
        <label>Username</label>
        <input type="text" {...register("username", { required: true })} />
        <span style={{ color: "red" }}>
          {errors.username && "Required field"}
        </span>
        <button>Add new user</button>
      </form>
    </Fragment>
  );
};

export default AddUserForm;
