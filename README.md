# Gines

```bash
git clone https://github.com/neomatrixcode/Gines.git
cd Gines
```
Optionally it is possible to use a Docker container with Node v17.2.0 and Rust V1.57.0 installed

```bash
docker run --rm  -it -v /rute/Gines:/source -p 8080:8080 neomatrixcode/webassembly bash
```

## Install packages Rust/nodeJS

```bash
cargo install -f wasm-bindgen-cli
npm i
```

## Compile project

```bash
npm run build
```

## Execute project

```bash
npm run dev
```

