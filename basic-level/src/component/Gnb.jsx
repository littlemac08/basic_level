import React from 'react'
import './Gnb.css'

//const Gnb =(props) => 를 이용하여 props.setTabState를 이용할 수 있습니다.
const Gnb = ({tabState, setTabState}) => {
  //탭을 눌렀을 때 해당 id를 기준으로 state값에 저장하는 함수를 생성합니다.
  const handlerTabClick = (e) => {
    const id = e.target.id
    setTabState(id)
  }

  return (
    <div className="Gnb_wrap">
        <ul>
          {/* 템플릿 리터럴과 중괄호 표현식을 이용하여 state값과 동일한 탭을 찾아서 on이라는 클래스를 추가해줍니다. */}
          <li id="normal" className={`${tabState === 'normal' ? 'on' : ''}`} onClick={(e)=>handlerTabClick(e)}>첫번째 탭</li>
          <li id="grayscale" className={`${tabState === 'grayscale' ? 'on' : ''}`} onClick={(e)=>handlerTabClick(e)}>두번째 탭</li>
          <li id="blur" className={`${tabState === 'blur' ? 'on' : ''}`} onClick={(e)=>handlerTabClick(e)}>세번째 탭</li>
          <li id="grayscale&blur" className={`${tabState === 'grayscale&blur' ? 'on' : ''}`} onClick={(e)=>handlerTabClick(e)}>네번째 탭</li>
        </ul>
    </div>
  )
}

export default Gnb