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
    webpack --mode development // 개발용
    webpack --mode production // 배포용
```

### 특징

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
        path: '/dist', // 번들 결과물 파일 경로
        filename: 'build.js' // build.js 라는 이름으로 빌드된다.
        # filename: '[name].js' // entry 에서 설정된 파일 이름별로 빌드된다.
        # filename: '[name].[hash].js' // 빌드 될 때마다 hash값이 생성된다. (캐시제거용)
        # filename: '[name].[chunkhash].js' // 파일이 변경 될 때마다 chunkhash값이 생성된다.
    }
```

## Loader

로더는 webpack이 자바 스크립트 파일을 처리하는 것을 가능하게합니다. 

이들은 webpack이 처리 할 수있는 유효한 모듈로 변환하여 모든 종류의 파일에 대해 webpack의 번들링 기능을 활용할 수있는 기능을 제공합니다.

- babel // (중요) 최신 문법의 자바스크립트를 es5 문법으로 트렌스파일해주는 라이브러리 
- css, 전처리기(sass, less)
- assets...
- files....

## plugin

플러그인을 사용하여보다 광범위한 작업을 수행 할 수 있습니다.
    
다음 세미나에서 더 다룹니다...

## Optimization

웹팩4에서 최적화 관련 플러그인 옵션

### splitChunks

청크 사이에서 공유되는 모듈을 찾아이를 별도의 청크로 분할하여 중복을 줄이거 나 공급 업체 모듈을 응용 프로그램 모듈과 분리합니다.

## Dev Tool

### source-map
