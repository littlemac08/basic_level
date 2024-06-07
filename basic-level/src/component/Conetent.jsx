import React from 'react'
import './Content.css'

const Conetent = ({tabState, data}) => {
    //data에 map을 이용하여 해당 이미지들을 순차적으로 렌더링 합니다.
    //slice를 이용하여 0번째부터 8개만 렌더링될 수 있도록 합니다.
    const handlerItemShow = data && data.slice(0, 8).map((img, index)=>{
        // imgSrc라는 변수를 할당하고 추후 조건부에 맞게 URL값 변경 후 재할당합니다.
        let imgSrc
        //switch문을 이용하여 state값에 따른 URL값을 지정합니다.
        switch (tabState) {
            case "normal":
                imgSrc = img.download_url
                break;
            case "grayscale":
                imgSrc = `${img.download_url}/?grayscale`
                break;
            case "blur":
                imgSrc = `${img.download_url}?blur=2`
                break;
            case "grayscale&blur":
                imgSrc = `${img.download_url}/?grayscale&blur=2`
                break;
            default:
                break;
        }
        //이미지를 눌렀을 때 해당이미지를 새탭에서 열어볼 수 있는 기능을 추가합니다.
        const openInNewTab = (url) => {
            window.open(url, '_blank', 'noopener,noreferrer');
        };
        
        return <li key={index}>
            {/*해당 이미지 url을 openInNewTab함수에 보내줍니다. */}
            <div onClick={()=>openInNewTab(imgSrc)}>
                <img src={imgSrc} alt={img.download_url} />
            </div>
            <span>{img.url}</span>
        </li>
    })
    return (
        <div className="content_wrap">
            <ul>
                {data && handlerItemShow}
            </ul>
        </div>
    )
}

export default Conetent