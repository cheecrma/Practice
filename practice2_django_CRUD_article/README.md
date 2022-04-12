## Django_Articles_flow_Practice

#### 처음 장고 시작전에 준비 단계

1. 폴더 생성
2. vscode 켜기
3. git init (지금 여기 practice에선 이미 되어있으므로 할 필요 없음)
4. python -m venv venv (가상환경 생성)
5. source venv/Scripts/activate(깃배쉬에서만 적용) (혹은 5번 걍 안해도 깃배쉬창 지웠다가 다시키면 가상환경 적용되긴 함)
6. ctrl + shift + p를 통해 Interpreter 들어가서 가상환경 전체 적용
7. .gitignore생성해주기 venv에 양이 너무 많아서 이건 깃 애드커밋 할 필요 없도록 해주기 위함. 그외에도 상황따라 다를 수 있음. 현재는 gitignore.io 들어가서 입력해주는데 윈도우, 파이썬, 장고, 비쥬얼스튜디오 복붙해줬음 (저장하면 venv에 초록불 꺼짐 vsc에서도 왼쪽바에 나타나는 커밋부분 1k에서 1개로 바뀜)
8. requirement.txt 가져오기 pip list 해서 확인해보면 가상환경이어서 뭐 설치된게 없음
9. pip install -r requirements.txt 를 통해 requirement 전부 설치해주기

----

#### 장고 프로젝트 생성부터 시작!

1. `django-admin startproject crud .` 여기서 crud 프로젝트 뒤에 점찍는 이유는 현재 위치에 생성하도록 하기 위해서임. 점 없으면 안에 폴더 또 만들어지고 그안에 생성됨.
2. `python manage.py startapp articles` 앱 생성 (앱은 일반적으로 복수형으로 작성함)
3. 세팅에서 앱 등록 해주기 & LANGUAGE_CODE ='en-us' 를 한글로 바꿀려면 'ko-kr' 로 바꾸고 TIME_ZONE ='UTC'를 한국시간으로 바꿀려면 'Asia/Seoul' 로 바꿔주기 (지금 practice에서는 앱등록하고 시간만 바꿔줬음)
4. models.py 작성
5. `python manage.py makemigrations` 마이그레이션 해주기 (설계도느낌으로 새롭게 설계도 만들때 사용)
6. `python manage.py migrate` 까지 해주면 됨 (설계도를 실제 DB에 반영되는 거) 
7. 이후에도 models.py 변경 되면 다시 마이그레이션 해주면 됨 그러면 기존 행 어떻게 할 건지 1,2 선택지 나오는데 1번해서 디폴트 값 주는 거 하면 엔터만하면 타임존 나우 디폴트값 적용할 수 있다고 알려줌
8. 그리고 마지막으로 다시 마이그레이트 하면 됨

