# GIT 

**UNSTAGED**
Restored 1 file từ vùng staging trở lại vùng working
```
git restore --staged .
```
=> restored toàn bộ file
```
git restore --staged ten_file
```
=> restore từng file

--------
**UN RESET**

```
git reset --soft HEAD~1
``` 
=> chuyển commit cuối cùng từ vùng repository về vùng staging

```
git reset --soft HEAD~3
```
=> chuyển 3 commit cuối cùng từ repository về staging

```
git reset HEAD~3
```        
=> chuyển 3 commit cuối cùng từ vùng repository về working direction

*trong các commit này có những file nào thì những file đó sẽ được chuyển*

----
Thay đổi nội dung commit gần nhất
```
git commit --amend -m"message mới"
```