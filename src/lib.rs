use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
        fn alert(s: &str);
}

#[wasm_bindgen]
pub fn big_computation() {
        alert("Big computation in Rust");
}

#[wasm_bindgen]
pub fn welcome(name: &str) {
       alert(&format!("Hello {}, from Rust!", name));
}

#[wasm_bindgen]
pub fn add_two_ints(a: u32, b: u32) -> u32 {
   a + b
}

#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
   if n == 0 || n == 1 {
      return n;
   }

   fib(n - 1) + fib(n - 2)
}

#[wasm_bindgen]
pub fn net() -> u32 {
    /*let mut stream = TcpStream::connect("192.168.0.20:9100");

    stream.unwrap().write(&[0x1b, 0x74, 18, 0x48, 0x6f,0x6c ,0x61, 0x20 ,0x6d, 0x75, 0x6e, 0x64 ,0x6f ,0x21,0x1b, 0x64, 0x04 ,0x1b, 0x64, 0x04, 0x1d, 0x56, 0x00, 0x1b, 0x40]);
     Ok::<(), std::io::Error>(());*/

    return 1;

}