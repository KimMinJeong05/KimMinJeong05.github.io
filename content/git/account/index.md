---
emoji: ⚙ 
title: "[Git] 특정 계정으로 설정 or commit 하기"
date: '2022-04-21 17:41:00'
author: Julie
tags: git commit 특정 계정 공용 서버
categories: git
---

## 🧐 왜 특정 계정으로 commit 하게 되었을까?

주로 로컬에서 개발하면, 처음 git global로 설정한 계정으로 계속 commit 하게 된다.  
그래서 계속 어떤 계정으로 commit 할지 고민하지 않고 git을 사용하다가, 공용 서버에서 특정 프로젝트를 내 계정으로 commit 해야하는 일이 생겼다.  
따라서 공용 서버에서 내가 원하는 계정으로 commit 하고 push 할 수 있는 설정을 찾아보게 되었다.  

## ⬇️ git 계정 설정 및 

### 1️⃣ 일회성으로 특정 계정으로 commit 하기

공용 서버에서 config 설정을 할 수 없을 경우, 일회성으로만 특정 계정을 사용하고 싶은 경우
```bash
git -c user.name="사용자 이름" -c user.email="사용자 이메일" commit -m "commit message"
```

### 2️⃣ 특정 프로젝트에 특정 계정 사용하기

특정 프로젝트 폴더로 이동 후, 아래 명령어 사용
```bash
git config user.name "사용자 이름"
git config user.email "사용자 이메일"
```

### 3️⃣ 시스템 전체에서 특정 계정 사용하기

```bash
git config --global user.name "사용자 이름"
git config --global user.email "사용자 이메일"
```

## 👁️‍🗨️ git 설정 확인

```bash
git config --list
```



```toc

```
