import React, { Fragment } from 'react';
import BottomNav from "../../components/BottomNav"
//
import { useDispatch } from 'react-redux'
import { getAccountSession } from '../../actions/account'
import UpdateAccountComp from "../../components/profile/updateAccount/updateAccountComp";

const Profile = ({ account }) => {
    const dispatch = useDispatch()
    dispatch(getAccountSession(account))

    return (
        <Fragment>

            <div className='flex items-center justify-center space-x-4'>
                <UpdateAccountComp />
            </div>

            <BottomNav name='profile' />
        </Fragment>

    )
}

export default Profile