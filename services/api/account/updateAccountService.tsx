import React from "react";
import UpdateAccountLogic from "../../../components/profile/updateAccount/updateAccountLogic";
import { UpdateAccountModel } from '../../../models/account/UpdateAccountModel'
import { UPDATE_ACCOUNT_ENDPOINT } from '../../endpoints'


const UpdateAccountService = () => {

  const data = {
    accountId: "30d319cf-eb31-4fea-8b55-3fa4aee471d9",
    name: "Erik",
    email: "xxx",
    phone: "xxx",
    bio: "xxx",
    language: "xxx",
    type: "xxx",
    addressId: "xxx",
  }

  const defaultValues = {
    accountId: data?.accountId ?? "",
    name: data?.name ?? "",
    email: data?.email ?? "",
    phone: data?.phone ?? "",
    bio: data?.bio ?? "",
    language: data?.language ?? "",
    type: data?.type ?? "",
    addressId: data?.addressId ?? "",
  };


  const handleSubmit = async (data: UpdateAccountModel) => {
    const submitData = {
      accountId: data.accountId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      bio: data.bio,
      language: data.language,
      type: data.type,
      addressId: data.addressId,
    };

    return fetch(UPDATE_ACCOUNT_ENDPOINT, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submitData)
    });
  };

  return (
    <UpdateAccountLogic defaultValues={defaultValues} onSubmit={handleSubmit} />
  );
};

export default UpdateAccountService;