### 20220411

- 문제가 발생했다.

  `from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.` 

  인 오류가 발생했으며 file:// 으로 해서는 보안상 문제로 실행을 할수가 없다고 한다.

  해결책으로 그냥 서버에 올리면 괜찮다. 서버에 올려서 확인을 하게되면 https로 해결이 된다.

  하지만 html 작업은 수시로 로컬에서 확인을 하며 작업하는 것이 편하며 그렇기에 다른 확장 프로그램들을 통해 해결할 수도 있다고 한다.

- 개선점1

  클릭시 점으로 바뀌도록 진행했으며 퍼지는 부분끝에 초록색인 것을 없애면 좋을 거 같다.

- 개선점2

  다시 클릭하면 원본으로 바뀌거나 일정시간이지나면 원본으로 돌아오도록 하면 좋을 거 같다.

- 개선점3

  원본의 크기를 조절하면 좋을 거 같다.

[practice1-wave-animation-picture](https://practice1-wave-animation-picture.netlify.app/)

