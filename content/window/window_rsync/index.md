---
emoji: ๐
title: window์ rsync ์ค์นํ๋ ๋ฐฉ๋ฒ
date: '2022-02-09 00:00:00'
author: Julie
tags: window ์๋์ฐ rsync install ์ค์น git bash ๊น
categories: window git
---

## window์ rsync ์ค์นํ๋ ๋ฐฉ๋ฒ

<br/>

**window์์ git bash์ rsync ์ค์น**

<br/>

### Rsync๋?
์๊ฒฉ์ผ๋ก ํ์ผ๊ณผ ๋๋ ํ ๋ฆฌ๋ฅผ ๋๊ธฐํํ๊ธฐ ์ํด ์ฌ์ฉํ๋ ํด์ด๋ค.  

<br/>

๋๋ ๋ก์ปฌ์์ ๊ฐ๋ฐํ ํ ์๋ฒ์ ๋ฐฐํฌํ  ๋ Rsync๋ฅผ ์ฌ์ฉํ๋ ค ํ๋ค.  
window์๋ Rsync๊ฐ ์ค์น๋์ด์์ง ์์ git bash์ ์ง์  ์ค์นํด์ผํ๋ ์ํฉ์ด์๋ค.
ํ์ง๋ง window git bash์ Rsync๋ฅผ ์ค์นํ๋ ๊ฑด ๊ทธ๋ฆฌ ๊ฐ๋จํ์ง ์์๋ค.

<br/>

### Window git bash์์ Rsync ์ฌ์ฉํ๊ธฐ

<br/>

์ ์  ์กฐ๊ฑด์ผ๋ก Git ๋ฒ์  2.28.0 ์ด์์ด์ด์ผ ํ๋ค.  

**์ฌ์ฉ๋ฒ**
1. window Git๊ณผ ํธํ๋๋ rsync ํจํค์ง ๋ค์ด๋ก๋ํ๊ธฐ  
    https://repo.msys2.org/msys/x86_64/rsync-3.2.3-1-x86_64.pkg.tar.zst ๋ค์ด๋ก๋ํ๋ค.

2. rsync ํจํค์ง ์์ถํด์ ํ๊ธฐ  
    1์์ ๋ค์ด๋ก๋ํ ํจํค์ง๋ ZStandard ์์ถ ์๊ณ ๋ฆฌ์ฆ์ ์ฌ์ฉํ๋ค.  
    rsync ํจํค์ง๋ฅผ ์์ถํด์ ํ๋ ค๋ฉด zstd๋ฅผ ์ฌ์ฉํด์ผํ๋ค.  

    ``` bash
    # ํ๋กฌํํธ์ฐฝ์์ ์๋ ๋ช๋ น์ด๋ฅผ ์ฌ์ฉํ์ฌ ์์ถ์ ํด์ ํ๋ค.
    zstd -d rsync-3.2.3โ1-x86_64.pkg.tar.zst
    ```

3. Git์ rsync ํจํค์ง ๋ณต์ฌํ๊ธฐ  
    `C:\Program Files\Git\usr\bin\` ๊ฒฝ๋ก์ `rsync-3.2.3โ1-x86_64.pkg\usr\bin\`์ ์๋ rsync.exeํ์ผ์ ๋ณต์ฌํ๋ค.  
4. dependent ํจํค์ง ๋ค์ด๋ก๋ ๋ฐ Git ํด๋์ ๋ณต์ฌํ๊ธฐ  
    rsync.exe ๋ง ์์ผ๋ฉด dependentํ ํ์ผ์ด ์์ด์ ์คํ๋์ง ์๋๋ค.  
    ๋ฐ๋ผ์ ์๋ 2๊ฐ์ dependent ํจํค์ง๋ฅผ ๋ค์ด๋ก๋ํด์ ์์ถํด์  ํ `C:\Program Files\Git\usr\bin\`์ ๋ณต์ฌํ๋ค.  
    a. [libzst ํจํค์ง](https://packages.msys2.org/package/libzstd?repo=msys&variant=x86_64)  
    https://repo.msys2.org/msys/x86_64/libzstd-1.4.7-1-x86_64.pkg.tar.xz  
    b. [libxxhash ํจํค์ง](https://packages.msys2.org/package/libxxhash?repo=msys&variant=x86_64)  
    https://repo.msys2.org/msys/x86_64/libxxhash-0.8.0-1-x86_64.pkg.tar.zst

    ``` bash
    # libxxhash ํจํค์ง๋ ์์ 2์ ๊ฐ์ด ํ๋กฌํํธ์ฐฝ์์ ์๋ ๋ช๋ น์ด๋ฅผ ์ฌ์ฉํ์ฌ ์์ถํด์ 
    zstd -d libxxhash-0.8.0-1-x86_64.pkg.tar.zst
    ```


```toc

```
