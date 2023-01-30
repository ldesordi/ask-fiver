import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import UpdateAccountView from "./updateAccountView";
import { UpdateAccountModel } from '../../../models/account/UpdateAccountModel'
import { Modal as MuiModal } from "@mui/material";
import { Modal as ModalUtil } from "../../../utils/modal_utils";
import UploadMediaService from "../../../services/api/media/uploadMediaService";

const CreateUserFormSchema = yup.object().shape({
  accountId: yup.string().min(36).required(),
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string(),
  bio: yup.string(),
  language: yup.string().required(),
  accountType: yup.string().required(),
  addressId: yup.string().required(),
});

interface Props {
  defaultValues: UpdateAccountModel;
  onSubmit: (data: UpdateAccountModel) => Promise<Response>;
}

const UpdateAccountLogic = ({ defaultValues, onSubmit }: Props) => {
  const router = useRouter()

  const [isModalVisible, setIsModalVisible] = useState(false);

  const form = useForm<UpdateAccountModel>({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(CreateUserFormSchema)
  });

  // ERROR HEREI: function "handleSubmit" does not execute. Must call function "onSubmit" from UpdateAccountService.
  const handleSubmit = async (data: UpdateAccountModel) => {
    console.log(data)

    await onSubmit(data)
      .then(() => {
        UploadMediaService()
      })
      .then(() => form.reset(data))
      .catch((err) => console.error(err));

    router.back()
  };

  const openModal = () => {
    ModalUtil.open({
      // title: "Modal Title",
      component: UpdateAccountView,
      props: {
        form: form,
        onSubmit: handleSubmit,
        callback: () => {
          //closes the modal
          ModalUtil.close();
        },
      },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className='bg-white' onClick={openModal}>Edit Profile</button>

      <MuiModal
        // title="Basic Modal"
        open={isModalVisible}
        // onOk={handleOk}
        onClose={handleCancel}
      >
        <p>Modal data...</p>
        {/* <p>Some contents...</p>
                        <p>Some contents...</p> */}
      </MuiModal>
    </div>
  );
};

export default UpdateAccountLogic;