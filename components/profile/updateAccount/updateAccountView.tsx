import React, { Fragment } from "react";
import { UseFormReturn } from "react-hook-form";
import { UpdateAccountModel } from '../../../models/account/UpdateAccountModel'


// Transforma o useForm em UseFormReturn (da package react-hook-form) dentro de Props.
interface Props {
  form: UseFormReturn<UpdateAccountModel>;
  onSubmit: (data: UpdateAccountModel) => any;
  callback: any;
}

const UpdateAccountView = ({ form, onSubmit, callback }: Props) => {
  
  const { formState, register, handleSubmit } = form;
  const { errors, isSubmitting } = formState;

  return (
    <Fragment>

      <form onSubmit={handleSubmit(onSubmit)} >

        <div>
          <div>
            <input type="text" placeholder="accountId" {...register("accountId")} />
          </div>
          <div>{errors?.accountId?.message}</div>
        </div>

        <div>
          <div>
            <input type="text" placeholder="name" {...register("name")} />
          </div>
          <div>{errors?.name?.message}</div>
        </div>

        <div>
          <div>
            <input type="text" placeholder="email" {...register("email")} />
          </div>
          <div>{errors?.email?.message}</div>
        </div>

        <div>
          <div>
            <input type="boolean" placeholder="phone" {...register("phone")} />
          </div>
          <div>{errors?.phone?.message}</div>
        </div>

        <div>
          <div>
            <input type="text" placeholder="bio" {...register("bio")} />
          </div>
          <div>{errors?.bio?.message}</div>
        </div>

        <div>
          <div>
            <input type="text" placeholder="language" {...register("language")} />
          </div>
          <div>{errors?.language?.message}</div>
        </div>

        <div>
          <div>
            <input type="text" placeholder="type" {...register("type")} />
          </div>
          <div>{errors?.type?.message}</div>
        </div>

        <div>
          <div>
            <input type="text" placeholder="addressId" {...register("addressId")} />
          </div>
          <div>{errors?.addressId?.message}</div>
        </div>

        <div className='flex justify-around'>
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>

          <button onClick={callback}>
            Cancel
          </button>

        </div>

      </form>

    </Fragment>
  );
};

export default UpdateAccountView;