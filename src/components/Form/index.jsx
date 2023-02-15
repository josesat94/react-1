import React from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormComp = ({ confirmPurchase, formVis, setFormVis }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (dataDelFormulario) => {
        confirmPurchase(dataDelFormulario)
    }; // your form submit function which will invoke after successful validation

    const handleClose = () => {
        setFormVis(false);
    }

    return (
        <>
            <Modal show={formVis} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
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
                        <input type='email' {...register("email", { minLength: 3, required: true })} />
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Confirm purchase
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default FormComp