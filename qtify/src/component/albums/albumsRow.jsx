import './albums.css';
import heroImg from "../../assets/hero_headphones.png";
import axios from 'axios';
import { useEffect, useState } from 'react';

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
                
                {
                    data?.map((al)=>{
                        return (
                            <SingleAlbumBox 
                                key={al.id}
                                id={al.id}
                                title={al.title}
                                image={al.image}
                                follows={al.follows}
                                slug={al.slug}
                            />
                        )
                    })
                }
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
  