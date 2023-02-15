import React from 'react'
import { useForm } from "react-hook-form";

const FormComp = ({confirmPurchase}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (dataDelFormulario) => {
        confirmPurchase(dataDelFormulario)
      }; // your form submit function which will invoke after successful validation
        
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            {...register("firstName", {
              required: true,
              minLength: 2,
            })}
          />
          {errors?.firstName?.type === "required" && <p>This field is required</p>}
          {errors?.firstName?.type === "minLength" && (
            <p>Name must exceed 2 characters</p>
          )}
          <label>Email</label>
          <input type= 'email' {...register("email", {minLength: 3, required: true})} />
          {errors?.email?.type === "minLength" && (
            <p>The email must have a minimum of 3 characters</p>
          )}
          {errors?.email?.type === "required" && <p>This field is required</p>}
          <label>Telefono</label>
          <input type='number' {...register("phone", { minLength: 10, required: true })} />
          {errors.phone?.type === "minLength" && (
            <p>The phone must have a minimum of 10 characters</p>
          )}
          {errors?.phone?.type === "required" && <p>This field is required</p>}
          <input type="submit" />
        </form>
      );
}

export default FormComp