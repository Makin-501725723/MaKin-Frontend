import Link from 'next/link'

export default function LoginModal({
  isActive,
  handleRegisterClick,
  handleLoginClick,
}) {
  return (
    <>
      <div className="bg-primary">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div
                className={`custom-container ${
                  isActive ? 'active' : ''
                } mx-auto`}
                id="container"
              >
                <div className="form-container sign-up">
                  <form>
                    <h1>註冊帳戶</h1>
                    <div className="w-100">
                      <label htmlFor="name">姓名:</label>
                      <input type="text" placeholder="Name" id="name" />
                    </div>
                    <div className="w-100">
                      <label htmlFor="name">驗證碼:</label>
                      <div className="d-flex flex-row align-item-center mb-2">
                        <div className="w-75">
                          <input
                            type="password"
                            placeholder="Password"
                            id="passwords2"
                            className="m-0"
                          />
                        </div>
                        <div>
                          <div className="w-25">
                            <button className="btn m-0 text-nowrap px-2">
                              (60)重發驗證碼
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <label htmlFor="passwords1">密碼:</label>
                      <input
                        type="password"
                        placeholder="Password"
                        id="passwords1"
                      />
                    </div>
                    <div className="w-100">
                      <label htmlFor="passwords2">確認密碼:</label>
                      <input
                        type="password"
                        placeholder="Password"
                        id="passwords2"
                      />
                    </div>

                    <button>點我註冊</button>
                  </form>
                </div>
                <div className="form-container sign-in">
                  <form>
                    <h1 style={{ marginBottom: '20px' }}>登入</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Link href="/login/forget-password">忘記密碼?</Link>
                    <button>登入</button>
                    <button>
                      <a href="#" className="icon">
                        <i
                          className="fa-brands fa-google-plus-g"
                          style={{ color: 'aliceblue' }}
                        ></i>
                      </a>
                    </button>
                  </form>
                </div>
                <div className="toggle-container">
                  <div className="toggle">
                    <div className="toggle-panel toggle-left">
                      <h1>歡迎回來!</h1>
                      <p>輸入您的個人詳細資料以使用所有網站功能</p>
                      <button
                        className="hidden"
                        onClick={handleLoginClick}
                        id="login"
                      >
                        返回登入
                      </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                      <h1>嗨，歡迎!</h1>
                      <p>使用您的個人詳細資料註冊以使用所有網站功能</p>
                      <button
                        className="hidden"
                        onClick={handleRegisterClick}
                        id="register"
                      >
                        點我註冊
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            background-color: #c9d6ff;
            background: linear-gradient(to right, #e2e2e2, #c9d6ff);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
          }

          .custom-container {
            background-color: #fff;

            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
            position: relative;
            overflow: hidden;
            width: 768px;
            max-width: 100%;
            min-height: 480px;
          }

          .custom-container p {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.3px;
            margin: 20px 0;
          }

          .custom-container span {
            font-size: 12px;
          }

          .custom-container a {
            color: #333;
            font-size: 13px;
            text-decoration: none;
            margin: 15px 0 10px;
          }

          .custom-container button {
            background-color: #512da8;
            color: #fff;
            font-size: 12px;
            padding: 10px 45px;
            border: 1px solid transparent;

            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 10px;
            cursor: pointer;
          }

          .modal-content .btn-close {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1001; /* 确保按钮在所有内容的前面 */
          }

          .custom-container button.hidden {
            background-color: transparent;
            border-color: #fff;
          }

          .custom-container form {
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            height: 100%;
          }

          .custom-container input {
            background-color: #eee;
            border: none;
            margin: 8px 0;
            padding: 10px 15px;
            font-size: 13px;

            width: 100%;
            outline: none;
          }

          .form-container {
            position: absolute;
            top: 0;
            height: 100%;
            transition: all 0.6s ease-in-out;
          }

          .sign-in {
            left: 0;
            width: 50%;
            z-index: 2;
          }

          .custom-container.active .sign-in {
            transform: translateX(100%);
          }

          .sign-up {
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
          }

          .custom-container.active .sign-up {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: move 0.6s;
          }

          @keyframes move {
            0%,
            49.99% {
              opacity: 0;
              z-index: 1;
            }
            50%,
            100% {
              opacity: 1;
              z-index: 5;
            }
          }

          .social-icons {
            margin: 20px 0;
          }

          .social-icons a {
            border: 1px solid #ccc;

            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 3px;
            width: 40px;
            height: 40px;
          }

          .toggle-container {
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: all 0.6s ease-in-out;
            z-index: 1000;
          }

          .custom-container.active .toggle-container {
            transform: translateX(-100%);
          }

          .toggle {
            background-color: #512da8;
            height: 100%;
            background: linear-gradient(to right, #5c6bc0, #512da8);
            color: #fff;
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
          }

          .custom-container.active .toggle {
            transform: translateX(50%);
          }

          .toggle-panel {
            position: absolute;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 30px;
            text-align: center;
            top: 0;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
          }

          .toggle-left {
            transform: translateX(-200%);
          }

          .custom-container.active .toggle-left {
            transform: translateX(0);
          }

          .toggle-right {
            right: 0;
            transform: translateX(0);
          }

          .custom-container.active .toggle-right {
            transform: translateX(200%);
          }

          .modal-dialog {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }

          .modal-content {
            width: 800px;
            /* height: auto; */
          }
        `}
      </style>
    </>
  )
}
