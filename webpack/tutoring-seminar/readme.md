# webpack

## JavaScript 모듈화 도구

![webpack](https://cdn.filepicker.io/api/file/QIuZVivBTFWIu8LN9i3E)

    모든 것을 모듈로 본다.
    js, css, img 등등...
    하나의 정적 파일로 통합한다. -> http 요청 속도 최적화 (빠른 클라이언트 로딩)

## Mode

    두 가지 기본 설정이 생겼다.
    배포 시 기존 최적화플러그인들이 대량으로 호환되지 않아서 편리하다.

```
    > webpack --mode development
    > webpack --mode production
```

1. development 
    - 브라우저 디버깅을 위한 도구
    - 빠른 개발을 위한 증분 컴파일
    - 런타임시 유용한 에러 메시지
    
2. production  
    - 작은 파일 크기
    - 런타임시 빠른 코드
    - 개발전용 코드 생략
    - 소스코드 or 파일 경로 노출 x
    - 사용하기 쉬운 output assets

## Entry

파일을 읽어들이기 시작하는 부분
    
```
    entry: {
        app: './src/app.js',    
        vendor: './src/vender.js',
        arr: ['file.js', 'file2.js']    // 배열도 가능
    }
```

## Output

빌드 결과물 설정

```
    output: {
        path: '/dist',
        filename: 'build.js' // dist 폴더에 build.js 라는 이름으로 빌드
    }
    
    or

    output: {
        path: '/dist',
        filename: '[name].js' // entry 의 파일 이름별로 빌드된다. app.js, vendor.js, arr.js ...
    }
```

## Loader

    - babel // (중요) 최신 문법의 자바스크립트를 es5 문법으로 트렌스파일해주는 라이브러리 
    - css, 전처리기(sass, less)
    - assets...
    - files....

## Optimization

    - 웹팩4에서 최적화 관련 플러그인 옵션

## Dev Tool

    source-map: build된 자바스크립트 ㅁㄴ으ㅏㅁㄴㅇ 보여주낟.

## plugin

부가기능