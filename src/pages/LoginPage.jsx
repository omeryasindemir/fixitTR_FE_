import React, { useState } from 'react';
import ICO from "../img/ico.png";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='loginBox'>
      <div className='loginInBox'>
        <img src={ICO} alt="" />
        <div>Giriş Yap veya Kayıt Ol</div>

        <div className="loginInputs">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={inputValue ? 'filled' : ''}
          />
          <label className={inputValue ? 'filled' : ''}>test</label>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
