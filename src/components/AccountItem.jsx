import styles from '../sass/components/_accountitem.scss' 

function AccountItem() {
    return ( 
        <div className="wrapper">
            <img className='avatar' src="" />
            <div className='info'>
                <p className='name'>
                <span className='username'></span>
                </p>
            </div>
        </div>
     );
}

export default AccountItem;