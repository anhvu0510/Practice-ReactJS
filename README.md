# Practice-ReactJS
Example when learn React
# ReactJS
## 1. So sánh npm vs npx
  - NPM 
  - NPX
## 2. Webpack là gì ?
## 3. Component vs Prop ?
## 4. Hooks -> Chỉ dùng cho function Component, kiểm soát data luồn chạy lúc Re-Render
  1. **useState** : Thay đổi trạng thái của dữ liệu
     - Componet được re-render sau khi `setState`
     - Initial State chỉ được khơi tạo 1 lần
     - Set State có có thê nhận vào 1 function callback
     - Set State là thây thế giá trị cũ thành giá trị mới
  2. **useEffect**: Update DOM - Call API - Listen DOM Events - Cleanup
     - Callback luôn được gọi sau khi Component mounted
     - CleanUp Function luôn được gọi trước khi Component được unmounted
     - CleanUp Function luôn được gọi khi callback function của useEffect được thực thi (trừ lần mounted)
     - Sử dụng
       - useEffect(callback)
         - Gọi callback khi component được Re-Render
         - Gọi callback khi component thêm element vào DOM
       - useEffect(callback, [])
         - Chỉ gọi callback 1 lần khi component được MOUNTED vào DOM
       - useEffect(callback, [dependencies])
         - Callback sẽ được gọi lại mỗi khi giá trị Dependencies thay đổi
  3. **useLayoutEffect**
      - Cập nhật lại State
      - Cập nhật DOM
      - Call CleanUp Function
      - Call userLayoutEffect callback
      - Render UI
  4. **useRef**: Lưu giá trị tham chiếu từ bên ngoài
  5. **useCallback**: 
     1. Tránh việc KHỞI TẠO các Function quá nhiều lần khi Re-Render
     2. Component con phải sử dụng **React.memo** vì nếu không dùng thì lúc nào Component con cũng sẽ được Re-Render theo Component cha
  6. **useMemo**: 
     1. Tránh việc THỰC THI các logic của các Function trong lúc Re-Render
  7. **useReducer**
     1. Các bước: Init State => Action => Reducer (func logic cho action) => Dispatch (gửi đi)
  8. **useImperativeHandle**
