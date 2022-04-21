---
emoji: 📘
title: window에 rsync 설치하는 방법
date: '2022-02-09 00:00:00'
author: Julie
tags: window 윈도우 rsync install 설치 git bash 깃
categories: window git
---

## window에 rsync 설치하는 방법

<br/>

**window에서 git bash에 rsync 설치**

<br/>

### Rsync란?
원격으로 파일과 디렉토리를 동기화하기 위해 사용하는 툴이다.  

<br/>

나는 로컬에서 개발한 후 서버에 배포할 때 Rsync를 사용하려 했다.  
window에는 Rsync가 설치되어있지 않아 git bash에 직접 설치해야하는 상황이었다.
하지만 window git bash에 Rsync를 설치하는 건 그리 간단하지 않았다.

<br/>

### Window git bash에서 Rsync 사용하기

<br/>

전제 조건으로 Git 버전 2.28.0 이상이어야 한다.  

**사용법**
1. window Git과 호환되는 rsync 패키지 다운로드하기  
    https://repo.msys2.org/msys/x86_64/rsync-3.2.3-1-x86_64.pkg.tar.zst 다운로드한다.

2. rsync 패키지 압축해제하기  
    1에서 다운로드한 패키지는 ZStandard 압축 알고리즘을 사용한다.  
    rsync 패키지를 압축해제하려면 zstd를 사용해야한다.  

    ``` bash
    # 프롬프트창에서 아래 명령어를 사용하여 압축을 해제한다.
    zstd -d rsync-3.2.3–1-x86_64.pkg.tar.zst
    ```

3. Git에 rsync 패키지 복사하기  
    `C:\Program Files\Git\usr\bin\` 경로에 `rsync-3.2.3–1-x86_64.pkg\usr\bin\`에 있는 rsync.exe파일을 복사한다.  
4. dependent 패키지 다운로드 및 Git 폴더에 복사하기  
    rsync.exe 만 있으면 dependent한 파일이 없어서 실행되지 않는다.  
    따라서 아래 2개의 dependent 패키지를 다운로드해서 압축해제 후 `C:\Program Files\Git\usr\bin\`에 복사한다.  
    a. [libzst 패키지](https://packages.msys2.org/package/libzstd?repo=msys&variant=x86_64)  
    https://repo.msys2.org/msys/x86_64/libzstd-1.4.7-1-x86_64.pkg.tar.xz  
    b. [libxxhash 패키지](https://packages.msys2.org/package/libxxhash?repo=msys&variant=x86_64)  
    https://repo.msys2.org/msys/x86_64/libxxhash-0.8.0-1-x86_64.pkg.tar.zst

    ``` bash
    # libxxhash 패키지는 위의 2와 같이 프롬프트창에서 아래 명령어를 사용하여 압축해제
    zstd -d libxxhash-0.8.0-1-x86_64.pkg.tar.zst
    ```


```toc

```
