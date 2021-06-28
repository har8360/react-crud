import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  console.log(props.currentUser);

  const onSubmit = (data) => {
    console.log(data);
    props.updateUser(props.currentUser.id, data);
    reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name", { required: true })} />
        <span style={{ color: "red" }}>{errors.name && "required field"}</span>
        <label>Username</label>
        <input type="text" {...register("username", { required: true })} />
        <span style={{ color: "red" }}>
          {errors.username && "required field"}
        </span>
        <button>Save</button>
      </form>
    </Fragment>
  );
};

export default EditUserForm;
