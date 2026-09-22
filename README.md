# Example Cafe Menu

Bài tập dựng trang từ ảnh mẫu bằng HTML, CSS và một ít JavaScript thuần.

## Mở trang

Giải nén rồi mở `index.html` trong trình duyệt. Không cần cài thư viện hoặc chạy build.

- `index.html`: cấu trúc và nội dung.
- `style.css`: bố cục ba cột cố định theo ảnh mẫu 1260 × 772 px; không tự chuyển cột trên điện thoại.
- `script.js`: tìm món, mở rộng nội dung sự kiện, chọn đồ uống, kiểm tra/reset form.
- `assets/`: ảnh gốc được cung cấp trong đề.
- `vercel.json`: cấu hình triển khai website tĩnh.

Nhãn và cách viết trong ảnh mẫu được giữ nguyên, bao gồm “Cacel”. MAIN COURSES dẫn đến món gà trong danh sách vì ảnh mẫu không có mục Main Courses riêng. Form chỉ kiểm tra dữ liệu ngay trong trình duyệt; chưa có máy chủ nhận hoặc lưu thông tin. Ký hiệu (v) được giữ theo mẫu, không phải xác nhận thành phần của món ăn.

## Đưa lên GitHub và Vercel

Đưa toàn bộ nội dung thư mục này vào thư mục gốc của một GitHub repository. Khi nhập repository vào Vercel, chọn dự án tĩnh (Other), không đặt lệnh build, dùng thư mục gốc làm output. File `vercel.json` đã cấu hình sẵn. Sau khi triển khai thành công, lấy URL thực tế từ Vercel để nộp bài.

## Đối chiếu ảnh mẫu

Dùng vùng hiển thị trình duyệt 1260 × 772 CSS px và zoom 100%. Bố cục có chiều rộng cố định để giữ vị trí các thành phần. Trên màn hình nhỏ hơn sẽ cuộn ngang. Màu nền chính #EA9696 được lấy từ vùng màu phẳng trong JPEG. Các tọa độ đã được chỉnh theo ảnh; chưa xác nhận khớp từng pixel qua ảnh chụp trình duyệt. Font được yêu cầu là Times New Roman và Arial; font thay thế trên hệ điều hành khác có thể làm thay đổi chữ.
