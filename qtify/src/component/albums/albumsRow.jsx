import './albums.css';
import heroImg from "../../assets/hero_headphones.png";

const Album =()=>{
    return(
        <div className='SingleAlbum'>
            <div className='SingleAlbumBody'>
                <img src={heroImg} alt="album img" />
            </div>
            <div className='SingleAlbumFooter'>
                <button className='SingleAlbumFooterButton'>100 Follows</button>
            </div>
        </div>
    )
}

const SingleAlbumBox =({albumname})=>{
    return(
        <div className='SingleAlbumBox'>
            <Album />
            <p>{albumname}</p>
        </div>
    )
}


const AlbumBox =({rowname})=>{
    return(
        <div className='alumsBox'>
            <div className='alumsheader'>
                <p>{rowname}</p>
                <p className='showall'>Show all</p>
            </div>
            <div className='alumsbody'>
                <SingleAlbumBox albumname='New Bollywood' />
                <SingleAlbumBox albumname='New English Songs' />
                <SingleAlbumBox albumname='New English Songs' />
                <SingleAlbumBox albumname='New English Songs' />
                <SingleAlbumBox albumname='New English Songs' />
                <SingleAlbumBox albumname='New English Songs' />
                <SingleAlbumBox albumname='New English Songs' />
                <SingleAlbumBox albumname='New English Songs' />
            </div>
        </div>
    )
}


const AlbumsRow = ()=> {
    return (
      <div className='alumsRow'>
        <AlbumBox rowname="Top Albums" />
        <AlbumBox rowname="New Albums" />
      </div>
    )
  }
  
  export default AlbumsRow;
  