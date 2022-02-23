# GIT FLOW

<ul>
<li> Khái niệm: Gitflow là 1 quy trình công việc kế thừa của Git, quản lý các nhánh của Git.

## **Các nhánh của Gitflow**

<li> Master:
<ul> 
<li> Branch chính
<li> Chỉ những leader của dự án mới có quyền đẩy code vào branch này
</ul>
<li> Develop:
<ul> 
<li> Nhánh chung phục vụ cho việc phát triển sản phẩm
</ul>
<li> Feature:
<ul> 
<li> Branch con của branch develop
<li> Mỗi feature ứng với mỗi chức năng
</ul>
<li> Hotfix
<ul>
<li> Sinh ra khi code chạy trên master xảy ra bug cần fix gấp
</ul>
</ul>

## Quy trình tổng thể Gitflow:

<ol>
<li> Nhánh develop được tạo từ nhánh master
<li> Nhánh release được tạo từ develop
<li> Các nhánh feature được tạo từ develop
<li> Khi nhánh feature a hoàn tất, nó được merge vào develop 
<li> Khi nhánh release được hoàn thành, nó được merge vào develop và master
<li> Khi phát hiện sự cố trong nhánh master, nhánh hotfix sẽ được tạo từ master
<li> Sau khi hotfix hoàn tất thì nó được merge vào develop và master
</ol>

## Tài liệu tham khảo:

- https://danielkummer.github.io/git-flow-cheatsheet/index.vi_VN.html
- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

---

# WEBPACK

<ul>

## Khái niệm:

<li> Là 1 công cụ giúp ta đóng gói các tài nguyên () thành 1 file hay nhiều file theo 1 cách có tổ chức gọn gàng.
<li> Tác dụng của Webpack:
<ul>
<li> Bundle js,css thành 1 file duy nhất
<li> Minify assets
<li> Phân biệt các mode
</ul>

## Ưu điểm:

<li> Dành cho những dự án lớn, dễ dàng phát triển, quản lý, custom
<li> Tăng tốc độ project
<li> Phân chia các module và chỉ load khi thật sự cần
<li> Đóng gói các file nguồn thành 1 file duy nhất. Nhờ vào loader mà nó có thể biên dịch các loại file khác nhau
<li> Biến các tài nguyên tĩnh (image, css) trở thành 1 module
<li> Biến đổi các mã nguồn: js, less, sass thành js,css, ... ES6<li>>ES5 thông qua babel Transplier

### Webpack => ReactJS:

<li> Đóng gói các module => Giải quyết được vấn đề đường dẫn
<li> Browser không hiểu JSX ( JSX => chuyển đổi => JS)
<li> Áp dụng CSS Preprocessor để xây dựng stylesheet

## Nhược điểm:

<li> Tài liệu khó đọc
<li> Cấu trúc khó hiểu
<li> Khá mất thời gian cho việc setup ban đầu

## Các core concepts trong Webpack:

<li> Entry
<li> Output
<li> Loader:
<ul>  
<li> Có 2 cái chính : 
<ul>
<li> test: phạm vi của file mình muốn can thiệp
<li> use: xác định trong phạm vi test thì cái loader nào được sử dụng
</ul>
</ul>
<li> Plugins : giúp ta mở rộng những tính năng hay, mở rộng phạm vi can thiệp
<ul>
<li> Có 2 loại plugin 
<ul>
<li> plugin có sẵn 
<li> plugin xây dựng bởi cộng đồng
</ul>
</ul>
<li> Mode:
<ul> 
<li> development
<li> production
</ul>
</ul>

## Tài liệu tham khảo:

- https://webpack.js.org/concepts/
- https://www.youtube.com/watch?v=145Po5_r0e4&list=PLWMM2vKkNM5gpiq7YKFOqqBIkvXzfIHu6

-----------------------------------------------------------------------------------


# Loader:
<ul>
<li> Babel loader:
<ul>
<li> Được dùng để chuyển đổi mã lệnh JS được viết dựa trên tiêu chuẩn ECMAScript phiên bản mới về phiên bản cũ hơn để tương thích với hầu hết các trình duyệt.
</ul>
<li> Style loader:
<ul>
<li> Giúp chúng ta Inject CSS into the DOM xác định vị trí chèn css vào html bằng JS
<li> Để sử dụng ta phải cài đặt thông qua npm và nên kết hợp với css-loader
</ul>
<li> Css loader:
<ul>
<li> Giúp giải quyết vấn đề khi import các tài nguyên như hình ảnh, font ở trong file css
<li> Nên kết hợp cùng với style-loader
</ul>
<li> Sass loader:
<ul>
<li> Giúp chúng ta compile file scss sang css
<li> Để sử dụng ta phải cài đặt thông qua npm
</ul>
</ul>

## Tài liệu tham khảo:

- https://webpack.js.org/loaders/babel-loader/
- https://webpack.js.org/loaders/style-loader/
- https://webpack.js.org/loaders/css-loader/
- https://webpack.js.org/loaders/sass-loader/
- https://viblo.asia/p/webpack-tu-a-den-a-webpack-babel-loader-WAyK87o65xX