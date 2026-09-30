
**1. Tạo SSH key**  
```
ssh-keygen -t rsa -b 4096 -C"your_email@gmail.com"
```
Lấy key public
```
cat~/.ssh/id_rsa.pub
```
=> tạo SSH key trên github  
**2. Khởi tạo 1 project**   
```
npm init playwright@latest
```
**3. Đưa code lên git**
- Tạo mới repository trên github
- Copy đường dẫn SSH với thư mục project mới tạo và chạy
```
git init

git remote add origin <copy từ github>  

git add .  

git commit -m"init project" 

git push origin main 
```
