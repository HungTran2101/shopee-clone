import "./AddProduct.scss";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import AddProductQuantity from "./AddProductQuantity/AddProductQuantity";
import FormField from "./FormField/FormField";
import ImageField from "./ImageField/ImageField";
import { useSelector } from "react-redux";
import {
  APIAddProductImage,
  APIAddProductInfo,
  APIAddProductType,
  APIUpdateProductImage,
  APIUpdateProductInfo,
  APIUpdateProductType,
} from "../../../../../api/axios/productAPI";
import PuffLoader from "react-spinners/PuffLoader";

export default function AddProduct({
  initialFormValues,
  setInitialFormValues,
  isAddProduct,
  setIsAddProduct,
}) {
  const subCategoryList = useSelector((state) => state.admin.subCategories);

  const addProduct = async (fields, setSubmitting) => {
    console.log("calling api add product info");
    const resAddProductInfo = await APIAddProductInfo({
      name: fields.name,
      description: fields.describe,
      detail: fields.detail,
      subCategoryId: fields.subCategoryId,
    });
    if (resAddProductInfo.status === 200) {
      console.log("calling api add product type");
      const resAddProductType = await APIAddProductType(
        fields.types,
        resAddProductInfo.data.id
      );
      console.log("calling api add product image");
      const resAddProductImage = await APIAddProductImage(
        fields.imageProduct,
        fields.image1,
        fields.image2,
        fields.image3,
        fields.image4,
        resAddProductInfo.data.id
      );
      if (
        resAddProductImage.status === 200 &&
        resAddProductType.status === 200
      ) {
        console.log(resAddProductImage);
        setSubmitting(false);
        resetFormValues();
      }
    }
  };

  const editProduct = async (fields, setSubmitting) => {
    console.log("calling api update product info");
    const resAddProductInfo = await APIUpdateProductInfo({
      id: initialFormValues.id,
      name: fields.name,
      description: fields.describe,
      detail: fields.detail,
      subCategoryId: fields.subCategoryId,
    });
    if (resAddProductInfo.status === 200) {
      console.log("calling api update product type");
      const resAddProductType = await APIUpdateProductType(
        fields.types,
        resAddProductInfo.data.id
      );
      console.log("calling api add product image");
      const resAddProductImage = await APIUpdateProductImage(
        fields.imageProduct,
        fields.image1,
        fields.image2,
        fields.image3,
        fields.image4,
        resAddProductInfo.data.id
      );
      if (resAddProductType.status === 200 || resAddProductImage.status === 200) {
        setSubmitting(false);
        resetFormValues();
      }
    }
  };

  const onSubmit = async (fields, { setSubmitting }) => {
    if (isAddProduct) await addProduct(fields, setSubmitting);
    else await editProduct(fields, setSubmitting);
  };

  const resetFormValues = () => {
    setInitialFormValues({
      id: -1,
      name: "",
      types: [
        {
          quantity: 1,
          price: 0,
          type: "",
        },
      ],
      imageProduct: null,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      detail: "",
      describe: "",
      subCategoryId: "",
    });
    setIsAddProduct(true);
  };

  const initialValues = initialFormValues;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("T??n tr???ng"),
    types: Yup.array()
      .of(
        Yup.object().shape({
          type: Yup.string().required("T??n lo???i tr???ng"),
          price: Yup.number()
            .min(1, "Gi?? ti???n l???n h??n 0")
            .required("Gi?? ti???n tr???ng"),
          quantity: Yup.number()
            .min(1, "S??? l?????ng l???n h??n 0")
            .required("S??? l?????ng l???n h??n 0"),
        })
      )
      .required("Ph??n lo???i tr???ng"),
    imageProduct: Yup.mixed().required("H??nh ???nh tr???ng"),
    image1: Yup.mixed().required("H??nh ???nh tr???ng"),
    image2: Yup.mixed().required("H??nh ???nh tr???ng"),
    image3: Yup.mixed().required("H??nh ???nh tr???ng"),
    image4: Yup.mixed().required("H??nh ???nh tr???ng"),
    detail: Yup.string().required("Chi ti???t s???n ph???m tr???ng"),
    describe: Yup.string().required("M?? t??? s???n ph???m tr???ng"),
    subCategoryId: Yup.string().required("Vui l??ng ch???n danh m???c con"),
  });

  useEffect(() => {
    setImgPreview({
      imageProduct: initialFormValues?.imageProduct,
      image1: initialFormValues?.image1,
      image2: initialFormValues?.image2,
      image3: initialFormValues?.image3,
      image4: initialFormValues?.image4,
    });
  }, [initialFormValues]);

  const [imgPreview, setImgPreview] = useState({
    imageProduct: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });
  const [imgValid, setImgValid] = useState(false);
  const FILE_SIZE = 500 * 1024; //Byte
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
    "image/jfif",
  ];
  const imgChoosen = (e, setFieldValue, name) => {
    let file = e.target.files[0];
    if (file) {
      if (!SUPPORTED_FORMATS.includes(file.type))
        setImgValid("?????nh d???ng ???nh kh??ng h???p l???");
      else if (file.size > FILE_SIZE) setImgValid("Dung l?????ng ???nh v?????t 500KB");
      else {
        setFieldValue(name, file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () => {
          setImgPreview({ ...imgPreview, [name]: reader.result });
        });
      }
    }
  };

  const handleError = (imageProduct, image1, image2, image3, image4) => {
    let haveEmpty = false;
    if (imageProduct) haveEmpty = true;
    if (image1) haveEmpty = true;
    if (image2) haveEmpty = true;
    if (image3) haveEmpty = true;
    if (image4) haveEmpty = true;

    return (
      <div className="error">
        {haveEmpty && <div>H??y t???i ????? 5 h??nh ???nh</div>}
        {imgValid && <div>{imgValid}</div>}
      </div>
    );
  };

  const resetProductImage = (setFieldValue) => {
    setImgPreview({
      imageProduct: null,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    });
    setFieldValue("imageProduct", null);
    setFieldValue("image1", null);
    setFieldValue("image2", null);
    setFieldValue("image3", null);
    setFieldValue("image4", null);
  };

  const loading = {
    margin: "0 2px",
  };

  return (
    <div className="addProduct">
      <div className="wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ errors, touched, values, setFieldValue, isSubmitting }) => (
            <>
              <Form className="adminProductForm">
                <div className="infoProduct">
                  <div className="title">
                    {isAddProduct ? "Th??m s???n ph???m" : "Ch???nh s???a s???n ph???m"}
                    {!isAddProduct && (
                      <span
                        className="titleAddButton"
                        onClick={() => resetFormValues()}
                      >
                        Th??m
                      </span>
                    )}
                  </div>
                  <div className="addName">
                    <label htmlFor="productName" className="label">
                      T??n s???n ph???m
                    </label>
                    <FormField
                      name="name"
                      placeholder="??o thun"
                      id="productName"
                    />
                  </div>
                  <div className="addCategory">
                    <label htmlFor="productSubCategory" className="label">
                      T??n danh m???c
                    </label>
                    <Field
                      name="subCategoryId"
                      placeholder="??o thun"
                      id="productSubCategory"
                      as="select"
                      className="input select"
                    >
                      <option value="">Danh m???c con</option>
                      {subCategoryList &&
                        subCategoryList.map((data, index) => (
                          <option value={data.id} key={index}>
                            {data.name}
                          </option>
                        ))}
                    </Field>
                    <ErrorMessage
                      component="div"
                      name="subCategoryId"
                      className="error"
                    />
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div className="addType">
                    <FieldArray name="types">
                      {({ remove, push }) => (
                        <>
                          <div className="moreType">
                            <span className="content">Ph??n lo???i</span>
                            <span
                              className="typeButton"
                              onClick={() =>
                                push({ type: "", price: 0, quantity: 1 })
                              }
                            >
                              +
                            </span>
                          </div>
                          <div className="type">
                            <div className="typeLabel">
                              <span className="label">T??n lo???i</span>
                              <span className="label margin-left">
                                Gi?? (VND)
                              </span>
                              <span className="label margin-left">
                                S??? l?????ng
                              </span>
                            </div>
                            {values.types.length > 0 &&
                              values.types.map((data, index) => (
                                <div className="subType" key={index}>
                                  <FormField
                                    name={`types.${index}.type`}
                                    placeholder="M??u - Size"
                                  />
                                  <FormField
                                    name={`types.${index}.price`}
                                    type="number"
                                  />
                                  <AddProductQuantity
                                    index={index}
                                    values={values}
                                    setFieldValue={setFieldValue}
                                  />
                                  <span
                                    className={`typeButton ${!isAddProduct && "hidden"}`}
                                    onClick={() => {
                                      if (values.types.length > 1)
                                        remove(index);
                                    }}
                                  >
                                    -
                                  </span>
                                </div>
                              ))}
                          </div>
                        </>
                      )}
                    </FieldArray>
                  </div>
                  <div className="addDetail">
                    <label htmlFor="detail" className="label">
                      Chi ti???t s???n ph???m
                    </label>
                    <FormField
                      name="detail"
                      id="detail"
                      className="input big"
                      as="textarea"
                    />
                  </div>
                  <div className="addDescribe">
                    <label htmlFor="describe" className="label">
                      M?? t??? s???n ph???m
                    </label>
                    <FormField
                      name="describe"
                      id="describe"
                      className="input big"
                      as="textarea"
                    />
                  </div>
                  <button type="submit" className="btn saveButton">
                    {isSubmitting ? (
                      <PuffLoader
                        color="#ffffff"
                        size={30}
                        cssOverride={loading}
                      />
                    ) : (
                      isAddProduct ? "Th??m" : "L??u"
                    )}
                  </button>
                </div>
                <div className="imageProduct">
                  <div className="imgContainer">
                    <ImageField
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                      name="imageProduct"
                    />
                    <ImageField
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                      name="image1"
                    />
                    <ImageField
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                      name="image2"
                    />
                    <ImageField
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                      name="image3"
                    />
                    <ImageField
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                      name="image4"
                    />
                    <div
                      className="deleteBtn"
                      onClick={() => resetProductImage(setFieldValue)}
                    >
                      X??a
                    </div>
                    {(errors.imageProduct && touched.imageProduct) ||
                    (errors.image1 && touched.image1) ||
                    (errors.image2 && touched.image2) ||
                    (errors.image3 && touched.image3) ||
                    (errors.image4 && touched.image4)
                      ? handleError(
                          errors.imageProduct,
                          errors.image1,
                          errors.image2,
                          errors.image3,
                          errors.image4
                        )
                      : null}
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}
