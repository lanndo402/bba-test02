# Cơ bản về GIT
_Git:_ phần mềm quản lý code trên máy cá nhân

_GitHub:_ web quản lý code chung có thể chia sẻ code. là nơi upload GIT repositiry lên

**3 vùng trong GIT:**
- working direction: những việc đang làm dở  __V1: lưu các file mới hoặc các file có thay đổi
- staging area  : những việc tạm coi như xong,chuẩn bị đưa vào commit  __V2
- repository: những việc done, chuẩn bị đẩy ra __V3

 
B1: khởi tạo 

```
git int 
``` 
=>tạo ra 3 vùng , các file nào đang có sẽ đưa vào vùng working

sau đó cần tạo repo GitHup và liên kết với repo local: 
    git remote add origin git@github.com:lanndo402/tests.git
=> 2 bước này chỉ làm 1 lần duy nhất

B2:  đẩy file từ V1 -> V2:
-đẩy từng file: 
```
git add <tên file>
```

-đẩy tất cả file: 
```
git add .
``` 

-đẩy nhiều file: 
 ```
 git add <file_1> <file_2>
 ```
   ( cần có dấu cách giữa các file )

B3: đẩy lên V3: 
```
git commit -m"message"
```
Cuối cùng: 
```
git push origin main
```

----
**Kiểm tra trạng thái hiên tại của file ( đang ở vùng nào )**
```
git status
````

-----
**Kiểm tra danh sách commit**
```
git log
```
----
**Kiểm tra cấu hình hiện tại**
```
git config --list
```

**Set cấu hình user đẩy git**  
_global_
```
git config --global user.name "tên"
git config --global user.email "email"
```

_trong phạm vi 1 project_

```
git config user.name "Tên Của Bạn"
git config user.email "email_cua_ban@example.com"
```


**Commit convention: quy tắc khi commit code**    

type: <mô tả ngắn gọn>  
type =  
      **fix**: sửa code do bug...  
      **feat**: tính năng mới   
      **chore**: sửa nhỏ lẻ chính tả, xóa file ko dùng tới, ...