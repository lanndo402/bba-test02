# JavaScript
# 4.1 Object 
**- Gói gọn dữ liệu về 1 đối tượng trong 1 biến**   
**- 2 cách khai báo**

*C1: Khai báo object bằng object literal ==> dùng*
```
let xe1 = {
    hangXe: "Honda",
    mauXe: "Do",
    namSanXuat: 2020
}
const xe2 = {
    hangXe: "Toyota",
    mauXe: "Trang",
    namSanXuat: 2021
}
```

*C2: Khai báo object bằng từ khóa new Object()*

```
    let xe3 = new Object();
    xe3.hangXe = "Ford";
    xe3.mauXe = "Den";
    xe3.namSanXuat = 2022;
```    

**- Gán:**
```
const student = { name:"Lan", age: 28};
console.log(student.name);
```   
**- Xóa:**
```
delete student.age;
```
**- Object lồng nhau**
```
const sinhVien = {
    hoten: "Lan Do",
    age: 28;
    diaChi:{
        xa: "Thọ Nghiệp",
        huyen: "Xuân Trường",
        tinh: {
            ten: "Nam Định",
            LockManager: 2222,
            abc: 444
        }
    }
}
```


# 4.2 Array
- Là kiểu dữ liệu dùng để lưu 1 danh sách các giá trị có thứ tự

- Thứ tự các giá trị trong array được bắt đầu từ 0 ->....
( giống index)

- Nếu lấy ra phần tử có thứ tự ko có trong danh sách -> trả undefine

# 4.3 Function

# 4.4 Array utils function
**1. map:** tạo mảng mới bằng cách áp dụng 1 hàm lên từng phần tử của mảng gốc
=> trả về mảng mới có cùng độ dài 

**2. filter**
lọc dữ liệu từ mảng theo 1 điều kiện nào đó => tạo ra mảng mới gồm các ptu thỏa mãn 

**3. find:** tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện , 
nếu ko có phần tử nào thì trả undèine 

**4. reduce:** tích lũy giá trị của các ptu trong mảng và trả về qua hàm callbaclk ( return ) 

**5. some:** kiểm tra có ít nhất 1 ptu trong mảng thỏa mãn đk ko --> trả về true/ false

**6. every:** kiểm tra TẤT CẢ ptu trong mảng thỏa mãn đk ko --> trả về true/ false  
**7. sort:** sắp xếp các ptu theo thứ tự alphabet => với chuỗi số cần thêm hàm compare (a-b)  
**8. push:** thêm ptu vào đầu mảng

**9. pop:** xóa ptu cuối mảng 

**10. shift:** Xóa và trả về ptu đầu tiên của mảng

**11. unshift:** thêm 1 hoặc nhiều ptu vao đầu mảng