
import { useState } from 'react'
import { useRouter } from 'next/router'
import { RiHomeFill, RiHomeLine } from 'react-icons/ri'
import { RiUser3Fill, RiUser3Line } from 'react-icons/ri'

const BottomNav = props => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState(props.name)
    const accountId = '30d319cf-eb31-4fea-8b55-3fa4aee471d9'

    return (
        <div className='flex fixed bottom-0 justify-between p-4 inset-x-0 bg-green'>
            <div className='flex bg-white'>
                {activeTab === 'index' ?
                    <RiHomeFill
                        size='25'
                        color='#000'
                        onClick={() => setActiveTab('index')}
                    /> :
                    <RiHomeLine
                        size='25'
                        color='#000'
                        onClick={() => { setActiveTab('index'); router.push('/') }}
                    />}
            </div>
            <div className='flex bg-white'>
                {activeTab === 'profile' ?
                    <RiUser3Fill
                        size='25'
                        color='#000'
                        onClick={() => setActiveTab('profile')}
                    /> :
                    <RiUser3Line
                        size='25'
                        color='#000'
                        onClick={() => { setActiveTab('profile'); router.push('/profile/' + { accountId }) }}
                    />}
            </div>
        </div>
    )
}

export default BottomNav