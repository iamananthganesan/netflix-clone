import React from 'react'
import './banner.css'
const Banner = () => {
    const truncateDescription = (des, num) => {
        return (des.length > num) ? des.substring(0, num - 1) + '...' : des
    }
    return (
        <header className='banner' style={{
            backgroundImage: `url('https://torranceca.files.wordpress.com/2019/10/netflix.jpg')`,
            backgroundPoision: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='banner__content'>
                <h3 className='banner__title'>Movie Name</h3>
                <p className='banner__movie_description'>{truncateDescription(`The API service is for those of you interested in using our movie, TV show or actor images and/or data in your application. Our API is a system we provide for you and your team to programmatically fetch and use our data and/or images.`, 200)}</p>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My list</button>
                </div>
            </div>
        </header>
    )
}

export default Banner