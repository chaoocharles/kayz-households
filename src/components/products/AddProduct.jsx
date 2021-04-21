import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../common/MyTextInput";
import FileBase64 from "react-file-base64";

const AddProduct = () => {
  return (
    <div className="form-container addproduct">
      <h3>Add a New Product</h3>
      <Formik
        initialValues={{
          productTitle: "",
          productSummary: "",
          productPrice: "",
          
        }}
        validationSchema={Yup.object({
          productTitle: Yup.string()
            .max(15, "Must be 30 characters or less")
            .required("Required"),
          productSummary: Yup.string()
            .max(15, "Must be 30 characters or less")
            .required("Required"),
          productPrice: Yup.string()
            .max(15, "Must be 7 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Product Title"
            name="productTitle"
            type="text"
            placeholder="Pots set"
          />
          <MyTextInput
            label="Product summary"
            name="productSummary"
            type="text"
            placeholder="Red"
          />
          <MyTextInput
            label="Product Price"
            name="productPrice"
            type="text"
            placeholder="99"
          />
          <MyTextInput
            label="Product Image"
            name="productImage"
            type="file"
            placeholder="99"
          />
          {/* <input
            id="file"
            name="file"
            type="file"
            onChange={(event) => {
              setFieldValue("file", event.currentTarget.files[0]);
            }}
          /> */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProduct;
