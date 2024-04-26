import './albums.css';
import axios from 'axios';
import { useEffect, useState,useRef } from 'react';

//swiper

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';






const Album =({image,follows})=>{
    return(
        <div className='SingleAlbum'>
            <div className='SingleAlbumBody'>
                <img src={image} alt="album img" />
            </div>
            <div className='SingleAlbumFooter'>
                <button className='SingleAlbumFooterButton'>{follows} Follows</button>
            </div>
        </div>
    )
}

const SingleAlbumBox =({id,title,image,follows,slug})=>{
    return(
        <div className='SingleAlbumBox'>
            <Album image={image} follows={follows} />
            <p>{title}</p>
        </div>
    )
}


const AlbumBox =({rowname,data})=>{
    console.log(data)
    return(
        <div className='alumsBox'>
            <div className='alumsheader'>
                <p>{rowname}</p>
                <p className='showall'>Show all</p>
            </div>
            <div className='alumsbody'>

           
                <Swiper
                    slidesPerView={7}
                    //spaceBetween={1}
                    className="mySwiper"
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                {
                    data?.map((al)=>{
                        return (
                            <SwiperSlide>
                            <SingleAlbumBox 
                                key={al.id}
                                id={al.id}
                                title={al.title}
                                image={al.image}
                                follows={al.follows}
                                slug={al.slug}
                            />
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
        </div>
    )
}


const RowAlbums = ({apiName,rowname})=> {
    const [data,setData] = useState([])
    
    const getAlbumData= async()=>{
        try{
            await axios.get(`https://qtify-backend-labs.crio.do/albums/${apiName}`)
            .then(function (response) {
                //console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getAlbumData()
    },[])

    return (
      <>
        <AlbumBox rowname="Top Albums" data={data}  />
      </>
    )
}


const AlbumsRow = ()=> {
    return (
      <div className='alumsRow'>
        <RowAlbums apiName='top' rowname="Top Albums" />
        <RowAlbums apiName='new' rowname="New Albums" />
       </div>
    )
}
  

export default AlbumsRow;
  